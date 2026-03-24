export const platformOptions = [
  { id: 'github', label: 'in GitHub' },
  { id: 'gitlab', label: 'in GitLab' },
  { id: 'cli', label: 'in CLI' },
] as const;

export type PlatformId = (typeof platformOptions)[number]['id'];

const prefixedPlatforms = new Set<PlatformId>(['gitlab', 'cli']);

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, '');
}

export function normalizeDocSlug(slug: string) {
  const normalized = trimSlashes(slug);

  if (!normalized || normalized === 'index') {
    return '';
  }

  return normalized.replace(/\/index$/, '');
}

export function getPlatformFromSlug(slug: string): PlatformId {
  const normalized = normalizeDocSlug(slug);
  const [firstSegment] = normalized.split('/');

  if (firstSegment && prefixedPlatforms.has(firstSegment as PlatformId)) {
    return firstSegment as PlatformId;
  }

  return 'github';
}

export function getTopicFromSlug(slug: string) {
  const normalized = normalizeDocSlug(slug);

  if (!normalized) {
    return '';
  }

  const segments = normalized.split('/');

  if (prefixedPlatforms.has(segments[0] as PlatformId)) {
    segments.shift();
  }

  return segments.join('/');
}

export function buildDocSlug(platform: PlatformId, topic = '') {
  const normalizedTopic = trimSlashes(topic);

  if (!normalizedTopic) {
    return platform === 'github' ? 'index' : `${platform}/index`;
  }

  return platform === 'github' ? normalizedTopic : `${platform}/${normalizedTopic}`;
}

export function buildDocHref(platform: PlatformId, topic = '') {
  const slug = buildDocSlug(platform, topic);
  const normalized = normalizeDocSlug(slug);

  return normalized ? `/${normalized}/` : '/';
}

export function buildHrefFromNormalizedSlug(slug: string) {
  const normalized = normalizeDocSlug(slug);

  return normalized ? `/${normalized}/` : '/';
}

export function getCanonicalTopicSlug(topic = '') {
  return normalizeDocSlug(buildDocSlug('github', topic));
}

export function getPlatformTopicSlug(platform: PlatformId, topic = '') {
  return normalizeDocSlug(buildDocSlug(platform, topic));
}

export function resolveDocSlug(
  availableDocs: ReadonlySet<string>,
  platform: PlatformId,
  topic = ''
) {
  const preferredSlug = getPlatformTopicSlug(platform, topic);

  if (platform !== 'github' && availableDocs.has(preferredSlug)) {
    return preferredSlug;
  }

  return getCanonicalTopicSlug(topic);
}

export function resolveDocHref(
  availableDocs: ReadonlySet<string>,
  platform: PlatformId,
  topic = ''
) {
  return buildHrefFromNormalizedSlug(resolveDocSlug(availableDocs, platform, topic));
}

export function getPlatformLabel(platform: PlatformId) {
  return platformOptions.find((option) => option.id === platform)?.label ?? 'in GitHub';
}
