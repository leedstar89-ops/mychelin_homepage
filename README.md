# Mychelin 공식 홈페이지

Mychelin(마이슐랭) — "Public Rating → Personal Taste"
방문한 식당 기록, 5가지 기준(맛·가격·특별함·분위기·재방문의사) 개인 평가, 지도 관리, 팔로우·가보고싶은곳·차단·신고 등 소셜 기능으로 새로운 맛집을 발견하는 서비스의 공식 랜딩 페이지입니다. 운영자: 이대규

백엔드/DB 없이 **HTML + CSS + JavaScript만** 사용하는 정적 사이트로,
Cloudflare Pages 무료 호스팅에 바로 배포 가능하며 **간편 로그인(소셜 로그인)** 앱 검수용 공식 홈페이지로 사용됩니다.

## 디자인 시스템 (MYCHELIN_HOMEPAGE_DESIGN.md 기준)

- **따뜻한 neutral 팔레트**: 배경 #faf9f7 / #f4f1ed, 잉크 #1f1d1b, 단일 액센트 #d6452b
- **첫 화면(hero)**: 사용자 제공 이미지(`assets/image/hero-bg.webp`)를 풀블리드 배경으로 사용, 어두운 오버레이로 가독성 확보
- **타이포그래피 중심**: clamp 기반 반응형, Inter 700, -0.02/-0.03em 타이트 트래킹
- **편집 스타일 섹션**: 번호형 에디토리얼 로우(01~04), 카드 그리드 대신 1px whisper border 분리선
- **라이트/다크 섹션 리듬**: 라이트(#faf9f7) ↔ 다크 CTA(#17181c) 교대
- **모바일 퍼스트**: 390px 기준 가로 스크롤 없음, 모바일에서 CTA만 노출
- **접근성**: `prefers-reduced-motion`, `:focus-visible`, 시맨틱 HTML, heading hierarchy

## 파일 구성

```
index.html            랜딩 페이지 (소개, 기능 카드 그리드, 시작하기 안내)
privacy-policy.html   개인정보처리방침 v2026-08-22.1
terms.html            이용약관 v2026-08-22.1
contact.html          문의 (서비스 / 개인정보 / 광고·제휴)
404.html              Not Found 페이지
robots.txt            전체 허용 + sitemap 위치
sitemap.xml           4개 페이지 등록
assets/css/style.css  디자인 시스템 (CSS 변수, 반응형, 애니메이션)
assets/js/main.js     헤더 스크롤, 스크롤 리빌, 부드러운 스크롤
assets/image/         히어로 배경 이미지 (hero-bg.webp)
README.md             이 문서
build.md              작업 기록
```

## Cloudflare Pages 배포 방법

### 방법 A — GitHub 연동 (권장)

1. 이 디렉터리 내용을 GitHub 저장소에 push합니다.
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages → Create → Pages → Connect to Git**에서 해당 저장소를 연결합니다.
3. 빌드 설정:
   - Framework preset: **None**
   - Build command: **(비워둠)** — 별도 빌드가 없습니다
   - Build output directory: **/** (루트 그대로)
4. **Save and Deploy**를 누르면 배포 완료. 이후 push할 때마다 자동 배포됩니다.

### 방법 B — Direct Upload

1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Upload assets**.
2. 프로젝트 이름(예: `mychelin`)을 지정하고, 이 디렉터리의 파일 전체(assets 폴더 포함)를 드래그해 업로드합니다.
3. 배포 완료. `https://<프로젝트명>.pages.dev` 도메인이 부여됩니다.

### 커스텀 도메인

Pages 프로젝트 → **Custom domains → Set up a custom domain**에서 `mychelin.app`을 추가하고, DNS에 안내되는 CNAME(또는 레코드)을 등록합니다.

### 404 페이지

Cloudflare Pages는 루트의 `404.html`을 자동으로 사용합니다. 별도 설정이 필요 없습니다.

## OAuth 검수 입력값

| 항목 | 값 |
|---|---|
| Homepage | `https://mychelin.app/` |
| Privacy Policy | `https://mychelin.app/privacy-policy.html` |
| Terms of Service | `https://mychelin.app/terms.html` |
| Authorized Domain | `mychelin.app` |

주의: OAuth Client Secret, API Key 등 비밀값은 이 사이트 코드에 절대 포함하지 않습니다.

## Google Search Console 소유권 인증 (DNS TXT)

1. [Google Search Console](https://search.google.com/search-console)에서 `https://mychelin.app/` 속성(도메인 속성 권장)을 추가합니다.
2. 안내된 `google-site-verification=<값>` TXT 레코드를 도메인 DNS(Cloudflare DNS)에 추가합니다.
   - Type: `TXT`, Name: `@`, Content: `google-site-verification=...`
3. DNS 전파(보통 수 분) 후 Search Console에서 **Verify**를 클릭합니다.

## SEO

- `lang="ko"`, title, meta description, viewport, canonical, Open Graph 기본 태그 포함
- `sitemap.xml`은 `https://mychelin.app/` 기준이며, 다른 도메인으로 배포 시 LOC 값을 수정하세요.
- `noindex` 없음, iframe 없음, robots.txt 차단 없음
- 시맨틱 HTML5 구조 (header, main, section, article, footer, nav)
- 구조화된 데이터 준비 가능 (JSON-LD 추후 추가 권장)

## 브라우저 지원

- Chrome/Edge 90+, Firefox 88+, Safari 14+
- CSS 변수, IntersectionObserver, backdrop-filter 지원 필요
- IE 미지원 (필요시 폴리필 추가)

## 성능 최적화

- Google Fonts `preconnect` + `preload` + `font-display: swap`
- 시스템 폰트 폴백으로 CLS 최소화
- CSS-only 애니메이션 (JS 최소화)
- 모바일 네비게이션은 CTA만 노출하고 기능/문의 링크는 숨깁니다 (데스크톱에서 전체 노출)
- 히어로 배경은 WebP로 최적화(1613KB → 71KB), `background-size: cover` 사용
- Gzip/Brotli 압축은 Cloudflare가 자동 처리