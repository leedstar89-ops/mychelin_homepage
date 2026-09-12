MyChelin 공식 웹사이트를 만들어라.

목표:
- Cloudflare Pages 무료 호스팅에 바로 배포 가능한 정적 사이트
- Google OAuth 앱 검수에 사용할 공식 홈페이지
- 백엔드/DB 없이 HTML, CSS, JavaScript만 사용
- AI가 만든 티가 나는 과한 카드/그라데이션/둥근 UI는 피하고 실제 상용 앱 랜딩페이지처럼 자연스럽게 디자인

서비스 정보:

서비스명:
MyChelin / 마이슐랭

핵심 문구:
Public Rating → Personal Taste

서비스 설명:
사용자가 방문한 식당을 기록하고,
개인 취향에 따라 평가하며,
지도에서 관리하고,
팔로우한 친구들의 맛집 피드를 보고,
새로운 맛집을 발견하는 서비스.

필수 페이지:

1. index.html
- MyChelin 소개
- 서비스 설명
- 핵심 기능
- Google 로그인 사용 안내
- 개인정보처리방침 링크
- 이용약관 링크
- 문의 링크

2. privacy-policy.html
Google OAuth 검수용 개인정보처리방침 작성.

반드시 포함:
- Google 계정 고유 식별자
- 이메일
- 사용자 이름
- 프로필 이미지
- Google 계정 비밀번호는 수집하지 않음
- 회원 식별 및 로그인 목적으로 사용
- 서비스 제공 외 목적으로 사용하지 않음
- Google 사용자 데이터를 판매하지 않음
- 법적 요구가 없는 한 임의로 제3자에게 제공하지 않음
- 계정 삭제 시 관련 법적 보존 의무가 없는 데이터 삭제
- 사용자 열람/수정/삭제 권리

3. terms.html
- 서비스 이용약관
- 계정
- 사용자 의무
- 사용자 게시물
- 금지 행위
- 서비스 변경/중단
- 계정 해지
- 면책
- 약관 변경

4. contact.html
- 서비스 문의
- 개인정보 문의
- 광고/제휴 문의
- 이메일은 일단 support@mychelin.app placeholder 사용

추가 파일:
- robots.txt
- sitemap.xml
- 404.html
- assets/css/style.css
- 필요한 경우 assets/js/main.js
- README.md

디자인:

- 모바일 우선 반응형
- 음식/맛집 앱 느낌
- 깔끔하고 현대적
- 배경은 밝은 neutral 계열
- 포인트 컬러는 따뜻한 red/orange 계열
- 과한 gradient 금지
- 과한 shadow 금지
- 모든 영역 카드화 금지
- 불필요한 장식용 아이콘 금지
- 여백, typography, divider 중심
- 실제 스타트업 서비스 홈페이지처럼 자연스럽게

Google OAuth 검수 대응:

- 첫 화면에서 MyChelin이라는 앱 브랜드와 서비스 내용을 명확하게 표시
- 개인정보처리방침과 이용약관은 로그인 없이 접근 가능
- 모든 법적 문서는 실제 HTML 텍스트로 제공
- iframe 사용 금지
- noindex 사용 금지
- robots.txt에서 차단 금지
- 홈페이지 footer에서 privacy / terms / contact 접근 가능
- Google OAuth Client Secret, API Key 등 비밀값을 코드에 절대 넣지 않음

SEO:
- lang="ko"
- title
- meta description
- viewport
- canonical
- 기본 Open Graph
- sitemap.xml
- robots.txt

Cloudflare Pages:
- 별도 build 없이 정적 파일 그대로 배포 가능하게 구성
- GitHub 연동 또는 Direct Upload 가능
- README에 Cloudflare Pages 배포 방법 작성

커스텀 도메인 예:
mychelin.app

Google OAuth 입력값 예:
Homepage:
https://mychelin.app/

Privacy Policy:
https://mychelin.app/privacy-policy.html

Terms:
https://mychelin.app/terms.html

Authorized Domain:
mychelin.app

README에 Google Search Console DNS TXT 소유권 인증 절차도 짧게 작성.

작업 방식:
1. 현재 디렉터리를 확인
2. 기존 파일이 있으면 분석 후 재사용
3. 필요한 파일 생성/수정
4. 사이트 전체 링크 확인
5. 깨진 경로 없는지 확인
6. 완성 후 생성/수정한 파일 목록과 배포 방법 요약

중요:
설명만 하지 말고 실제 파일을 생성하고 작업을 완료해라.