# PRD — 조은법률 조은이민 (Joun Lawyers) 공식 홈페이지

| 항목 | 내용 |
|---|---|
| 문서 버전 | v1.2 (About 프로필 사진 제거 + 대표 연락처/성명 갱신) |
| 작성일 | 2026-08-12 (최종 업데이트: 2026-08-18, v1.2) |
| 프로젝트명 | 조은법률 조은이민 (Joun Lawyers) 웹사이트 구축 |
| 사이트 주소 | **https://jounvisa.com** (Vercel 배포·운영 중) |
| 주 벤치마크 | [정성이민 (myjeongseong.com)](https://myjeongseong.com/) |
| 보조 벤치마크 | [Kris Ahn Lawyers](https://krisahn.com.au/) · [Kah Lawyers](https://kahlawyers.com/) · [AILS (australiavisa.com)](https://www.australiavisa.com/) · [Park & Co Lawyers](https://parklawyers.com.au/) |
| 상태 | **배포·운영 중** — 메인 페이지 v1.2가 `jounvisa.com`에 게시됨. 남은 작업: 구글 색인 등록(F-07b), 법적 문안·신규 문구 대표 검수(F-11), GA4(F-10), 서브 페이지 |
| 디자인 원본 | [Figma Make — Professional Law Firm Website](https://www.figma.com/make/wYOdGYyv8PsZJim1vNAaQT/Professional-Law-Firm-Website?t=Eq5SldCayuQhIKJR-1) |

---

## 1. 프로젝트 개요

### 1.1 배경
조은법률 조은이민(Joun Lawyers)은 법률 서비스와 이민(비자) 서비스를 함께 제공하는 사무소이다. 한인 고객을 주 대상으로 하는 공식 홈페이지를 구축하여 사무소 소개, 서비스 안내, 상담 유치를 온라인에서 수행하고자 한다.

### 1.2 목표
1. **신뢰 구축** — 대표 변호사/법무사의 전문성과 실적을 명확히 전달하여 방문자가 "믿고 맡길 수 있는 곳"이라는 인상을 받도록 한다.
2. **상담 전환** — 방문자가 쉽고 빠르게 상담을 신청할 수 있도록 명확한 CTA(상담예약)를 전 페이지에 배치한다.
3. **서비스 인지** — 제공하는 법률·이민 서비스 분야를 체계적으로 안내한다.
4. **검색 유입** — 한국어 키워드 검색(구글, 네이버)에서 상위 노출될 수 있는 SEO 기반을 갖춘다.

### 1.3 성공 지표 (KPI)
- 월간 상담 신청(예약폼 제출) 건수
- 방문자 → 상담신청 전환율
- 주요 키워드 검색 노출 순위
- 평균 페이지 체류 시간, 이탈률

---

## 2. 타겟 사용자

| 페르소나 | 설명 | 핵심 니즈 |
|---|---|---|
| 비자 준비자 | 비자 신청·연장·변경을 앞둔 한인 | 내 케이스에 맞는 비자 정보, 성공 가능성, 비용 |
| 비자 거절·취소 대응자 | 거절/취소 통보를 받고 급하게 해결책을 찾는 사람 | 빠른 상담, 재심 성공 사례, 신뢰할 수 있는 전문가 |
| 법률 자문 필요자 | 계약·분쟁 등 일반 법률 서비스가 필요한 한인 | 서비스 범위, 전문성, 연락 방법 |
| 기업/고용주 | 직원 스폰서십 등 기업 비자가 필요한 사업체 | 절차·요건 안내, 기업 대응 경험 |

> ❓ **확인 필요**: 주 활동 지역(호주? 한국? 기타), 영어권 고객 대상 여부(영문 페이지 필요 여부)

---

## 3. 벤치마크 분석

주 벤치마크는 정성이민(사이트 구조·톤의 기준), 보조 벤치마크는 호주 한인 법률·이민 사무소 4곳(신뢰 요소·서비스 구성 참고)이다.

### 3.A 주 벤치마크 — 정성이민 (myjeongseong.com)

### 3.1 사이트 구조
- **GNB(상단 메뉴)**: 인사말 / 비자성공법칙 / 비자서비스(하위: ART 재심-노미네이션 거절, ART 재심-비자거절·취소, 고용주후원비자, 졸업생비자, 파트너비자) / 나티번역공증
- **상단 고정 CTA**: "상담예약 하러가기" 버튼

### 3.2 메인 페이지 구성 (섹션 순서)
1. **풀스크린 히어로 슬라이더** — 지역명(SYDNEY / PERTH / AUSTRALIA) + 사무소명 + 슬로건
2. **대표 인사** — 대표 사진 + 핵심 메시지 3줄("검사역 출신 리스크 관리", "고객의 일을 나의 일처럼", "최고의 정성 약속") + 인사말/성공법칙 상세 페이지 링크
3. **서비스 분야** — 6개 카드 그리드(서비스명 + 관련 비자 서브클래스 + "자세히보기")
4. **차별점(고객만족)** — "맞춤형 솔루션 → 높은 성공률" 강조 섹션
5. **고객후기** — 별점 + 후기 발췌 카드 슬라이드, 전체보기 링크 (후기 게시판 연동)
6. **상담 유도 배너** — "명쾌한 상담, 최선의 솔루션" + 상담예약 버튼
7. **상담·오시는 길** — 예약폼 안내, 문자전용 전화번호, 오피스 주소(구글맵 링크)
8. **푸터** — Terms / Privacy / 자격 등록번호(MARN, NAATI) 등 공신력 링크

### 3.3 배울 점 (채택)
- 상담예약 CTA가 헤더에 상시 고정되고 페이지 곳곳에 반복 배치됨 → **채택**
- 대표 개인의 스토리·얼굴을 전면에 내세워 신뢰 형성 → **채택**
- 서비스를 카드형으로 분류하고 각 서비스별 상세 페이지 보유 → **채택**
- 실명 고객후기 + 별점으로 사회적 증거(social proof) 제공 → **채택**
- 푸터에 자격 등록번호를 명시하여 공신력 확보 → **채택**

### 3.4 개선할 점 (차별화)
- 벤치마크는 imweb 빌더 기반이라 모바일 대응·속도·디자인 일관성에 한계가 있음 → 커스텀 개발로 개선
- 후기 외에 **성공 사례(케이스 스터디)** 콘텐츠가 없음 → 성공사례 게시판 추가 검토
- 자주 묻는 질문(FAQ) 부재 → FAQ 섹션 추가 검토
- 칼럼/공지 등 콘텐츠 마케팅 영역 부재 → 블로그(칼럼) 게시판 추가 검토

### 3.B 보조 벤치마크 — 호주 한인 법률·이민 사무소 4곳

| 사이트 | 성격 | 참고 포인트 |
|---|---|---|
| [Kris Ahn Lawyers](https://krisahn.com.au/) | 이민 전문 로펌 (영어) | 서비스 아이콘 그리드(10개), "공인 이민법 전문가" 등 자격 배지, Google 5.0 별점 노출, News & Articles로 콘텐츠 마케팅 |
| [Kah Lawyers](https://kahlawyers.com/) | 시드니 부티크 로펌 — 이민 + 일반 법률 병행 | **이민 서비스와 일반 법률 서비스(상업·부동산·유언/상속·공증)를 한 사이트에서 이원화한 구조** — 조은(법률+이민) 사이트맵과 가장 유사. 대표(파트너) 개인 약력 중심 신뢰 구축, "Best Lawyers" 등 수상·협회 배지 |
| [AILS (australiavisa.com)](https://www.australiavisa.com/) | 대형 이민 에이전시 (영/중 2개 언어) | 숫자 기반 신뢰 강조("26년 경험, 20,000+ 비자 승인, 항소 성공률 80%"), 상담 3단계 프로세스 안내, 유료 상담($220) CTA, 비자 유형별 가이드 콘텐츠 |
| [Park & Co Lawyers](https://parklawyers.com.au/) | 한인 대상 종합 로펌 (한/영/중 3개 언어) | **"당신은 ~한 상황인가?" 식 상황 기반 서비스 안내** — 페르소나 니즈와 직결. 다국어 지원, "No Win No Fee" 등 명확한 정책 제시, 무료 온라인 문의 CTA |

**보조 벤치마크에서 채택 검토할 요소**
- 숫자·실적 기반 신뢰 요소(경력 연수, 처리 건수, 성공률) → 메인 "차별점" 섹션에 반영 (AILS)
- 이민/법률 서비스의 이원화 내비게이션 구조 → 사이트맵·GNB 설계 시 참고 (Kah)
- 상황(니즈) 기반 서비스 진입 카피 → 서비스 카드/상세 페이지 도입부에 적용 (Park & Co)
- 자격·수상·협회 배지의 시각적 노출(푸터 텍스트를 넘어 배지 이미지) → 검토 (Kris Ahn, Kah)
- 상담 프로세스 3단계 안내 섹션 → 상담 예약 페이지에 적용 검토 (AILS)
- 다국어(한/영) 구성 사례 → F-08 결정 시 참고 (Park & Co, AILS)

---

## 4. 사이트맵 (안)

```
Home
├── 사무소 소개
│   ├── 인사말 (대표 소개)
│   └── 조은의 약속 (철학 · 차별점)   ← 벤치마크의 "비자성공법칙" 대응
├── 이민 서비스 (조은이민)
│   ├── [비자 유형별 상세 페이지 — 확정 필요]
│   └── 예: 재심(AAT/ART), 고용주후원비자, 파트너비자, 학생·졸업생비자 등
├── 법률 서비스 (조은법률)
│   └── [분야별 상세 페이지 — 확정 필요]
│   └── 예: 계약, 부동산, 상속, 소송 등
├── 성공 사례 · 고객 후기
├── 칼럼 · 공지 (선택)
├── FAQ (선택)
└── 상담 예약
```

> ❓ **확인 필요**: 실제 제공 서비스 목록(이민/법률 각각), 메뉴 명칭 선호

---

## 5. 페이지별 요구사항

### 5.1 메인 페이지 (Home)
| # | 섹션 | 내용 |
|---|---|---|
| 1 | 히어로 | 풀스크린 비주얼 + 사무소명 + 슬로건 + 상담예약 CTA. 지역/키비주얼 슬라이드 |
| 2 | 대표 인사 | 대표 사진, 핵심 메시지 2–3줄, 인사말 페이지 링크 |
| 3 | 서비스 분야 | 카드 그리드(6±2개). 서비스명 + 한 줄 설명 + 상세 링크. 이민/법률 두 축 구분 표시 |
| 4 | 차별점 | 조은만의 강점 3–4가지 (숫자·실적 강조 가능) |
| 5 | 고객 후기 | 후기 카드 슬라이드(별점/이름/발췌) + 전체보기 |
| 6 | 상담 유도 배너 | 감성 카피 + 상담예약 버튼 |
| 7 | 오시는 길 | 주소, 지도(구글맵), 연락처, 운영시간 |

### 5.2 인사말 (About 섹션)
- 사진 없이 텍스트 중심의 가운데 정렬 레이아웃 (v1.2, 대표 요청으로 프로필 사진 및 사진 자리 제거)
- 사무소 소개 문단(bio) + **대표 프로필 카드**(이름·직함·자격번호·간단한 경력 소개)
- 자격 등록번호(MARN·JP)를 프로필 카드 내 텍스트로 명시 (사진 옆 배지 → 텍스트 표기로 전환, v1.2)
- 핵심 가치 3개 카드(정확한 리스크 진단, 고객의 일처럼, 책임지는 정성) — 좌측 정렬 유지

### 5.3 서비스 상세 (이민 / 법률 공통 템플릿)
- 서비스 개요, 대상(누구에게 필요한가), 절차 안내(단계 다이어그램), 필요 서류, FAQ(해당 서비스), 하단 상담 CTA
- 템플릿화하여 서비스 추가·수정이 쉽도록 설계

### 5.4 성공 사례 · 고객 후기
- 게시판 형태(목록 + 상세). 별점, 작성자(익명 처리 옵션), 케이스 요약
- 관리자가 직접 등록하는 방식 (v1) — 고객 직접 작성 여부는 확정 필요

### 5.5 상담 예약
- 예약 신청 폼: 이름, 연락처(전화), 이메일, 상담 분야(선택), 희망 일시, 상담 내용
- 제출 시: 관리자 이메일 알림 ✅ 구현 — FormSubmit AJAX로 `info@jounlawyer.com` 수신 (+ 자동 접수 확인 메일 검토)
- 개인정보 수집·이용 동의 체크 필수
- 폼 외 채널 안내: 전화, 문자 (카카오톡 채널 없음 — 확정)

### 5.6 칼럼 · 공지 (선택)
- 관리자가 글을 등록할 수 있는 간단한 게시판. SEO 유입 콘텐츠 역할

### 5.7 공통 요소
- **헤더**: 로고(Joun Lawyers), GNB, 상담예약 버튼(강조색), 모바일 햄버거 메뉴
- **푸터**: 사무소 정보(주소/연락처), 자격 등록번호, ABN, Terms & Conditions · Privacy Policy · Code of Conduct (모달, v0.8 ✅), 저작권
- **플로팅 버튼(모바일)**: 전화 걸기 + 문자 보내기 (카카오톡 채널 없음 — 문자로 대체 ✅)

---

## 6. 디자인 요구사항

### 6.1 브랜드
- 로고: `Logo.jpg` (Joun Lawyers + 조은법률·조은이민 낙관 도장)
- **컬러(로고 기반 제안)**
  - Primary: 버건디/다크레드 (`#8B1A1A` 계열 — 로고 "Joun" 색상)
  - Secondary: 다크 브라운/차콜 (`#4A3F35` 계열 — 로고 "JL·Lawyers" 색상)
  - Accent: 낙관 도장의 미색/아이보리
  - 배경: 화이트 + 라이트 그레이
- **타이포그래피**: 한글 — Pretendard 또는 Noto Sans KR / 제목용 세리프(명조) 병행 검토 (법률 사무소의 격조)

### 6.1a 로고 리뉴얼 — Joun Visa (✅ v2 확정, 2026-08-13)
- **네이밍**: "Joun Lawyers" → **"Joun Visa"** — 헤더 브랜드 텍스트에 반영 완료 (EN: "Joun Visa" / KO 부제: "JOUN VISA")
- **확정 로고**: `src/assets/logo.svg` — **여권 배지(Passport Badge) 마크**. 라운드 사각 버건디 배지 안에 JV 모노그램 + 내부 보더 + 하단 MRZ 점선(여권 커버 모티프), 투명 배경 SVG
- **시안 3종 중 채택**: V1 비자 스탬프(원형 스탬프 + 비행 궤적) / **V2 여권 배지 ← 채택** / V3 미니멀 체크(V=승인 체크마크). 시안 원본은 `src/assets/joun-visa-logo-v1~v3.svg`로 보존 — 워드마크 포함 풀 조합 버전이 필요할 때(푸터·명함·OG 이미지) 재사용 가능
- **헤더에서는 마크만 사용**: 헤더에 이미 "Joun Visa / JOUN VISA" 브랜드 텍스트가 로고 옆에 별도 표시되므로, 워드마크를 뺀 배지 마크 단독으로 적용해 텍스트 중복 방지
- **컬러**: 기존 브랜드 토큰 계승 — 배지 = 버건디 `#8B1A1A`, 내부 요소는 knockout(투명)
- **색 전환 대응(knockout 기법)**: 헤더 로고는 히어로(버건디) 위에서 `brightness(0) invert(1)` 필터로 흰색 전환되는데, 통짜 배지를 그대로 두면 흰 사각형이 되어 형태가 사라짐 → **JV 글자·내부 보더·MRZ 점선을 SVG mask로 뚫어** 히어로 위에서는 흰 배지 실루엣, 솔리드 헤더에서는 버건디 배지로 자연스럽게 전환되도록 처리
- **남은 적용 범위**: 파비콘·OG 이미지는 아직 구 로고/미적용 — 추후 교체 (12.2 참조)

### 6.2 톤 앤 매너
- 신뢰감 · 전문성 · 정중함. 과한 장식 없이 여백을 살린 정돈된 레이아웃
- 벤치마크처럼 대표의 얼굴과 메시지가 중심이 되는 휴먼 터치
- 사진: 실제 사무소·대표 사진 사용 권장 (스톡 이미지 최소화)

### 6.3 반응형
- 모바일 퍼스트 (한인 커뮤니티 유입 특성상 모바일 비중 높음)
- 브레이크포인트: 모바일(~640px) / 태블릿(~1024px) / 데스크톱(1280px+)

---

## 7. 기능 요구사항

| ID | 기능 | 우선순위 | 설명 |
|---|---|---|---|
| F-01 | 반응형 웹 | 필수 | 모바일/태블릿/데스크톱 대응 |
| F-02 | 상담 예약 폼 | 필수 ✅ 구현 | 제출 시 FormSubmit AJAX → `info@jounlawyer.com` 이메일 알림 (최초 1회 활성화 메일 승인 필요) |
| F-03 | ~~고객 후기 표시~~ → 익명화 사례 요약 | 필수 ✅ 구현 | 창작 후기 리스크로 **익명화된 사례 요약 캐러셀**로 대체 (v1.0). 실제 후기 확보·동의 시 후기 복원 검토 (13-5) |
| F-04 | 서비스 상세 템플릿 | 필수 | 서비스 추가가 쉬운 구조 |
| F-05 | 구글맵 연동 | 필수 ✅ 구현 | 오시는 길 — Eastwood 사무소 위치 embed iframe |
| F-06 | ~~카카오톡 채널 연결~~ | 제외 | 카카오톡 채널 없음(확정) — 플로팅 버튼은 전화+문자로 대체 |
| F-07 | SEO 기본 세팅 | 필수 ✅ 구현 | 메타태그·OG 태그·twitter card·canonical·파비콘·robots.txt·sitemap.xml·JSON-LD(LegalService 완성형)·언어별 title/description (v1.0). 도메인 확정(13-4) 후 URL 재확인 필요 |
| F-08 | 다국어(영/한) | 필수 ✅ 구현 | 영어가 기본 언어, 헤더 토글(EN | 한국어)로 전환. 선택 언어는 localStorage에 유지 |
| F-09 | 관리자 콘텐츠 관리 | 검토 | 후기·칼럼 등록 방식(CMS vs 코드 수정) 결정 필요 |
| F-10 | 방문 분석 | 권장 | Google Analytics 4 |
| F-11 | 법적 고지 3종 | 필수 ✅ 구현 | Terms & Conditions · Privacy Policy · Code of Conduct — 푸터 링크 → 모달 표시, 영/한 완역 (v0.8) |

---

## 8. 기술 스택 (확정 — v1 구현 기준)

- **프론트엔드**: Vite + React 18 (JavaScript) ✅ 적용 — 초기 제안이던 Next.js 대신 경량 SPA로 시작. SEO 강화가 필요해지면 Next.js 마이그레이션 검토
- **스타일**: 순수 CSS + 디자인 토큰(CSS 변수) ✅ 적용 — Tailwind 미사용, `src/styles/global.css` 단일 파일
- **콘텐츠 관리**: 코드 기반 ✅ 적용 — 모든 텍스트·서비스·후기·연락처를 `src/data/content.js` 한 파일에서 관리
- **폼 처리**: FormSubmit AJAX ✅ 적용 — `Contact.jsx`에서 `https://formsubmit.co/ajax/info@jounlawyer.com`으로 POST, 전송중/실패 상태 UI 포함
- **호스팅**: Vercel ✅ 배포 완료 — GitHub `ansmall-dev/Joun_web_main` `main` 브랜치 연동, push 시 자동 재배포. 프로젝트명 `joun-web-main`, 엣지 리전 `syd1`(시드니)
- **도메인**: **jounvisa.com** ✅ 확정·연결 완료 (v1.1) — Vercel 등록·관리(네임서버 Vercel, 자동 갱신 ON, 만료 2027-08-12), Vercel CDN·SSL 활성. 사이트 주소는 `jounvisa.com`이지만 **이메일은 `info@jounlawyer.com` 유지**(수신 계정·FormSubmit 엔드포인트 기준)

---

## 9. 비기능 요구사항

- **성능**: Lighthouse 성능 90점 이상, LCP 2.5초 이내
- **접근성**: 시맨틱 마크업, 명도 대비 WCAG AA
- **보안**: HTTPS, 폼 스팸 방지(honeypot/reCAPTCHA), 개인정보 최소 수집
- **법적 준수**: 개인정보 처리는 Privacy Act 1988 (Cth)의 호주 개인정보보호원칙(APPs) 기준. 이민 서비스는 OMARA 이민법무사 행동강령, 법률 서비스는 Legal Profession Uniform Law (NSW) 기준 고지 — 푸터 법적 고지 3종에 명문화 (F-11)
- **사업자 정보 표기**: ABN 98 716 989 655 — 푸터 및 이용약관·개인정보처리방침 본문에 표기
- **브라우저**: 최신 Chrome/Safari/Edge + 모바일 브라우저(iOS Safari, Android Chrome)

---

## 10. 범위 제외 (v1에서 하지 않는 것)

- 회원가입/로그인 (벤치마크에는 있으나 v1 불필요 판단)
- 온라인 결제
- 실시간 채팅 상담 (카카오톡 채널로 대체)
- 다국어 자동 번역

---

## 11. 일정 (안)

| 단계 | 내용 | 기간(안) |
|---|---|---|
| 1 | PRD 확정 + 콘텐츠 수집(원고·사진) | 1주 — 진행 중 (13장 미확정 항목 수집) |
| 2 | 디자인 시안 (메인 + 서브 템플릿) | 완료 ✅ — Figma Make 메인 시안 확정 |
| 3 | 개발 (전 페이지 + 폼) | 진행 중 — 메인 페이지 완료 (12장 참조), 서브 페이지 대기 |
| 4 | 콘텐츠 입력 · 검수 · SEO 세팅 | 1주 |
| 5 | 배포 및 오픈 | — |

---

## 12. 개발 진행 현황 (2026-08-18 기준, v1.2)

### 12.0i v1.2 변경 사항 ✅ (2026-08-18)

**About 섹션 프로필 사진 제거 + 대표 연락처·성명 갱신**

1. **About 섹션 대표 프로필 사진 제거** — 대표 요청에 따라 `profile.webp` 이미지와 이미지 자리(포트레이트 프레임 + 골드 오프셋 테두리 + MARN 배지) 전체 삭제. `About.jsx`에서 이미지 관련 마크업 제거, `global.css`의 `.about__portrait*`·`.about__badge*` 규칙 삭제
2. **자격번호 텍스트 표기로 전환** — 사진 옆에 있던 MARN 배지를 대표 프로필 카드 내 텍스트(`MARN 0741800 · JP No. 183656`)로 이동. 신규 `.about__principal-credentials` 스타일 추가
3. **About 섹션 레이아웃 가운데 정렬** — `.about__grid`를 1단 컬럼(최대폭 760px) + `margin: 0 auto` + `text-align: center`로 변경해 섹션 전체를 컨테이너 중앙에 배치. 단, 대표 프로필 카드(`.about__principal`)와 핵심 가치 카드(`.about__values`)는 가독성을 위해 좌측 정렬 유지
4. **연락처 갱신** — `SITE.phone`·`SITE.smsOnly`를 `0432 009 862` → **`0410 497 979`**로 일괄 변경. 단일 소스(`content.js`)로 관리되어 헤더 전화 링크·플로팅 버튼(`FloatingActions.jsx`)·Contact 섹션·`tel:`/`sms:` 링크에 자동 반영
5. **대표자명 정정** — "Dow Park" → **"Dow Woo Park"**로 변경 (영문 About 이름·소개 문단, 한글 About 섹션의 괄호 표기 "박두우 법무사 (Dow Woo Park)" 모두 반영)
6. **검증** — 로컬 dev 서버에서 About 섹션 렌더링(사진 없음·가운데 정렬·MARN/JP 텍스트), 전화번호 반영, 이름 변경을 브라우저로 확인

### 12.0h v1.1 변경 사항 ✅ (2026-08-13)

**도메인 확정(jounvisa.com) + 실서버 배포 + 구글 색인 준비**

1. **도메인 확정 — `jounvisa.com`** (13-4 해소). 기존 가정값 `jounlawyer.com`을 쓰던 8곳을 일괄 교체:
   - `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD `@id`·`url`·`image`·`logo`
   - `public/robots.txt` — `Sitemap:` 절대 URL
   - `public/sitemap.xml` — `<loc>` + en-AU/ko `hreflang` alternate 2건
   - `src/data/content.js` — `SITE.url`
   - ⚠️ **이메일은 의도적으로 미변경** — `info@jounlawyer.com`이 실제 수신 계정이자 FormSubmit 엔드포인트(`SITE.formEndpoint`)라, 도메인만 바꾸면 상담 폼 수신이 끊김. 향후 `info@jounvisa.com`으로 옮기려면 메일 계정 신설 → FormSubmit 재활성화(확인 메일 1회 승인) 순서 필요
2. **Vercel 배포·도메인 연결 완료** — GitHub `main` push → 자동 빌드·배포. `jounvisa.com`이 `joun-web-main` 프로젝트에 연결되고 Vercel CDN·SSL(Let's Encrypt/Sectigo CAA) 활성 확인
3. **실서버 검증** — 배포본 `https://jounvisa.com/`에서 canonical·og:url·og:image·`robots.txt`·`sitemap.xml` 모두 신규 도메인으로 정상 응답 확인 (구도메인 잔재 0건). 프로덕션 빌드 통과
4. **구글 색인 준비** — canonical/sitemap이 실제 서빙 도메인과 일치하게 되어 Search Console 등록 전제 조건 충족. 등록 절차는 12.2 **F-07b** 참조 (대표님 구글 계정 필요 — 개발자 대행 불가)

### 12.0g v1.0 변경 사항 ✅ (2026-08-13)

**콘텐츠 신뢰성 정비 + SEO/성능/접근성 일괄 개선**

1. **수치 → 정성적 문구 교체** (콘텐츠 신뢰성 · 법적 리스크 해소) — "Why Joun" 섹션의 근거 미확정 수치(15+년 경력 / 97% 승인율 / 2,400+ 사례)를 **정성적 원칙 3종**(정직한 진단 / 원스톱 / 한국어·EN)으로 교체. `Stats.jsx`의 숫자 카운트업 애니메이션 제거, 문구형 값 전용 스타일(`stat__value--word`) 신설. OMARA 행동강령·호주 소비자법(오인유발행위) 리스크 대응
2. **창작 후기 → 익명화 사례 요약 교체** — 5건의 창작 고객 후기(별점·가명)를 **익명화된 사례 요약 5건**(사례 유형 / 상황 / 조은의 대응)으로 전면 교체. 섹션명 "고객 후기 · Testimonials" → **"주요 사례 · Case Studies"**, 앵커 `#testimonials` → `#cases`. 카드 하단에 "과거 사례가 특정 결과를 보장하지 않습니다" 면책 문구 표기. `content.js`의 `testimonials` 사전 → `cases` 사전으로 재구성 (F-03 성격 변경)
3. **F-07 SEO 일괄 구현**
   - **파비콘**: 확정된 여권 배지 마크(V2)로 `public/favicon.svg` + PNG 3종(32px / 192px / 180px apple-touch) 생성, `index.html`에 링크. `theme-color`(#8b1a1a) 추가
   - **OG 이미지**: 1200×630 브랜드 카드(`public/og-image.png`, 배지 마크 + JOUN LAWYERS + 조은법률 조은이민) 생성, `og:image`·`twitter:card`(summary_large_image) 메타 추가
   - **canonical**: `https://jounvisa.com/` (13-4 도메인 확정에 따라 v0.9 이후 일괄 수정 완료)
   - **robots.txt / sitemap.xml**: `public/`에 추가 (sitemap에 en-AU/ko hreflang alternate 포함)
   - **JSON-LD LegalService 완성**: 기존 이름·설명만 → `address`(Eastwood 주소), `telephone`(+61 표기), `email`, `url`, `geo` 좌표, `openingHoursSpecification`(월–금 9–5), `image`/`logo`, `availableLanguage`(ko/en), `knowsAbout` 서비스 목록까지 로컬 SEO 필수 필드 전체 반영
   - **언어별 메타 동기화**: 언어 토글 시 `document.title`·meta description이 해당 언어로 변경 (`CONTENT.en/ko.meta`, `LanguageContext`)
4. **성능 개선**
   - **대표 프로필 이미지**: `profile.png` 1.6MB → **`profile.webp` 40KB** (880×1100, 약 97.5% 감소, 모바일 LCP 개선). `<img>`에 `width/height` 명시로 CLS 방지, `loading="lazy"` 적용. 원본은 루트 `Profile.png`에 보존
   - **Google Fonts 경량화**: Playfair Display 전체 가변 범위(400–900 + italic) → 실사용 굵기만(600·700 + italic), Noto Serif KR 400 제거 — 폰트 CSS 요청 축소
   - **.vite 캐시 git 추적 제거**: `.gitignore`에 `.vite` 추가 + `git rm -r --cached .vite`
5. **접근성 개선** (WCAG 터치 타깃·키보드 대응)
   - **키보드 포커스 표시**: 전역 `:focus-visible` 골드 아웃라인 신설 (폼 요소는 기존 포커스 스타일 유지)
   - **본문 바로가기**: skip link(`본문 바로가기` / `Skip to main content`) 추가 — 포커스 시에만 표시, `<main id="main">` 연결
   - **포커스 트랩**: 공용 훅 `useFocusTrap` 신설(Tab 순환 가둠 + Escape 닫기 + 닫힐 때 이전 포커스 복원) → 모바일 드로어·법적 고지 모달에 적용
   - **닫힌 드로어 접근 차단**: `inert` 속성 + `visibility: hidden`(닫힘 애니메이션 후 전환) — 닫힌 메뉴 링크가 Tab에 잡히던 문제 해소
   - **햄버거 버튼 aria-label**: 열림/닫힘 상태에 따라 "메뉴 열기/닫기"(언어별) 전환
   - **터치 타깃 40px+**: 캐러셀 도트(8px 시각 유지, 40×40 히트 영역), 언어 토글 버튼, 서비스 카드 링크(패딩+네거티브 마진로 시각 위치 유지)
6. **`.section--fit` 풀뷰포트 규칙 재정의** — 콘텐츠가 뷰포트를 넘치는 About/Services/Contact는 `min-height: 100svh` 강제 해제(헤더 회피 패딩만 유지), 한 화면에 들어가는 Stats/Cases만 새 `.section--fill`로 풀뷰포트 유지. 768p 노트북·모바일에서 섹션이 어중간하게 잘리던 문제 해소
7. **상담 폼 개인정보·UX 보강**
   - **개인정보처리방침 6조 보강** (en/ko): FormSubmit 제3자 경유·해외(미국) 서버 가능성 고지 + "여권번호·상세 사건 기록 등 고도 민감정보는 폼으로 제출 금지" 안내 추가 — ⚠️ 다른 법적 문안과 함께 대표 검수 대상
   - **자동 접수 확인 메일**: FormSubmit `_autoresponse` 필드 추가 — 제출자에게 현재 언어 기준 확인 메일 자동 발송
8. **검증** — 데스크톱(1280)·모바일(375) 가로 스크롤 0, 콘솔 에러 0, 프로덕션 빌드 통과 확인

### 12.0f v0.9 변경 사항 ✅ (2026-08-13)

**About 섹션 대표 소개 추가**

1. **대표 이름·직함·간단한 소개 추가** — 기존 About(인사말) 섹션의 사무소 소개문 아래에 박두우 법무사 프로필 카드 신설
   - **영문**: "Dow Park" + "Principal · Registered Migration Agent" + 경력 기반 간단한 소개(한 문단)
   - **한문**: "박두우 법무사 (Dow Park)" + "대표 · 공인 이민법무사" + 대응되는 한문 소개
2. **스타일링** — 기존 인사말(bio) 아래에 좌측 골드 테두리(`--color-gold`) 인용 스타일로 배치, 이름·직함·소개 텍스트 계층 구성
3. **데이터 관리** — `src/data/content.js`의 `CONTENT.en/ko` 각각의 `about.principal` 객체에서 관리 (이름, 직함, 소개 텍스트)
4. **구현** — `About.jsx`에 주프로필 섹션(`about__principal`) 렌더링 추가, `global.css`에 레이아웃·타이포 스타일 신설

### 12.0e v0.8 변경 사항 ✅ (2026-08-13)

**법적 고지 페이지 3종 + 푸터 ABN 표기**

1. **법적 문서 3종 신설** — Terms & Conditions(이용약관) / Privacy Policy(개인정보처리방침) / Code of Conduct(전문가 행동강령). 벤치마크(Kris Ahn Lawyers 프라이버시 정책 구조, AILS 푸터 ABN·면책 표기)를 참고해 호주 법률·이민 사무소 표준 구성으로 작성
   - **Terms**: 일반 정보 제공(법률 자문 아님), 의뢰 관계 성립 시점, 정확성 면책, 책임 제한(호주 소비자법), 지식재산권, 외부 링크, NSW 준거법 — 8개 조항
   - **Privacy**: Privacy Act 1988 (Cth) 호주 개인정보보호원칙(APPs) 준수, 수집 항목·목적, 민감정보, 제공 대상(내무부·ART 등), 7년 보관, 열람·정정, OAIC 불만 절차 — 9개 조항
   - **Code of Conduct**: Migration (Migration Agents Code of Conduct) Regulations 2021(OMARA) 및 NSW 변호사 행동규칙(Legal Profession Uniform Law) 기반 전문가 의무, 비용 투명성, OMARA·OLSC 불만 채널 — 5개 조항
2. **구현 방식** — 라우터 없는 SPA 특성에 맞춰 **모달 방식**: 푸터 하단 링크 3개 클릭 시 `LegalModal.jsx`(신규)가 오버레이로 표시. ESC·배경 클릭 닫기, 배경 스크롤 잠금, 모바일에서 바텀시트 스타일. 콘텐츠는 `content.js`의 `legal` 사전(en/ko 완역)에서 관리 — F-04/F-08 원칙 유지
3. **푸터 ABN 표기** — `SITE.abn = 'ABN 98 716 989 655'` 추가, 푸터 저작권 줄에 표기 (AILS 벤치마크 방식). Terms·Privacy 본문에도 ABN 명시
4. **푸터 법적 링크 갱신** — 기존 죽은 링크(#top) 2개 → 실제 모달 여는 버튼 3개로 교체 (EN: Terms & Conditions / Privacy Policy / Code of Conduct, KO: 이용약관 / 개인정보처리방침 / 전문가 행동강령)

### 12.0d v0.7 변경 사항 ✅ (2026-08-13)

**Joun Visa 로고 최종 확정 + 푸터 공신력 로고 레이아웃 개편**

1. **로고 시안 3종 제작 → V2(여권 배지) 채택** — 기존 브랜드 팔레트(버건디 `#8B1A1A` + 차콜 `#2E2620`)를 유지한 3개 방향을 제시하고 클라이언트가 V2 선택. 시안 파일은 `src/assets/joun-visa-logo-v1.svg` / `-v2.svg` / `-v3.svg`로 보존 (6.1a 참조)
2. **헤더 로고 교체** (`src/assets/logo.svg`) — V2 여권 배지 마크로 교체. 헤더 브랜드 텍스트와의 중복을 피해 워드마크 제외, 마크만 사용. 흰색 반전 필터에서도 형태가 유지되도록 **SVG mask knockout** 적용 (JV 글자·보더·MRZ 점선을 투명 처리)
3. **Justice of the Peace 실(seal) 재제작** (`src/assets/jp-logo.svg`) — 기존 NSW Justices Association 크레스트를 클라이언트 제공 이미지 기준의 **레드 원형 실**로 교체: 스캘럽(물결) 테두리 + 레드 라디얼 그라데이션 + 글로시 하이라이트 + 이탤릭 세리프 "Justice of the Peace". 흰 배경 박스 제거하고 완전 투명 배경으로 제작
4. **푸터 로고 레이아웃 개편** (`Footer.jsx` + `global.css`) — 배지 박스 **안 우측**에 작게(34–38px) 붙어 있던 로고들을 **박스 밖 오른쪽 별도 컬럼**으로 분리하고 크게 확대
   - 배지 박스는 텍스트만 표시 (Registered Migration Agent / Justice of the Peace / Legal Practice)
   - 오른쪽 로고 컬럼: MARA 로고(약 145px 폭) → MARA 등록번호 배지(145×95px) → JP 실(110×110px) 세로 스택, 가운데 정렬
   - 푸터 그리드를 4컬럼 → **5컬럼**(`4fr 2.2fr 2.2fr 2.8fr 2fr`)으로 확장, 로고 크기는 `.footer__logo-img--*`의 `max-width`로 조정 가능
5. **MARA 등록번호 확인** — 박두우 법무사님의 **MARN 0741800**이 `SITE.marn` 단일 소스로 관리되며 등록번호 배지 이미지에도 동일 반영됨을 확인 (참고 이미지의 샘플 번호 0211214 아님)

### 12.0c v0.6 변경 사항 ✅ (2026-08-13)

**Joun Visa 리브랜딩 + 대표 프로필 사진 적용**

1. **새 로고 제작·적용** (`src/assets/logo.svg` 신규) — JV 모노그램(차콜 J + 버건디 V) + "Joun / Visa" 세리프 워드마크, 투명 배경 SVG. `Header.jsx`가 기존 `logo.png` 대신 사용. 투명 로고 스크롤 색 전환 규칙(히어로 위 흰색 ↔ 솔리드 헤더 원본색) 그대로 적용됨
2. **헤더 브랜드 텍스트 변경** (`content.js`) — EN `brand.main`: "Joun Lawyers" → **"Joun Visa"** / KO `brand.sub`: "JOUN LAWYERS" → **"JOUN VISA"**
3. **대표 프로필 사진 적용** (`src/assets/profile.png` 신규) — About(인사말) 섹션의 "壽 / Principal Portrait" 플레이스홀더를 실제 사진 `<img>`로 교체 (13장 9번 일부 해소). 기존 4:5 프레임 + `object-fit: cover` 스타일 그대로 사용
4. 참고: 사이트 타이틀·메타태그·파비콘·푸터의 "Joun Lawyers" 표기는 아직 미변경 — 리브랜딩 범위 확정 후 일괄 교체 필요 (12.2 참조)

### 12.0b v0.5 변경 사항 ✅ (2026-08-12)

**푸터 공신력 로고 적용** — 클라이언트가 선택한 MARA 로고·MARA 등록번호 배지(+NSW JP 크레스트)를 푸터에 반영

1. **MARA 로고** (`src/assets/mara-logo.svg`) — 공식 로고(스우시 + 호주 지도 + MARA + Migration Agents Registration Authority)를 벡터로 재현. 배경 제거(투명), 다크 차콜 푸터에서 보이도록 **리버스(화이트) 버전**으로 제작. "Registered Migration Agent" 배지 우측에 표시
2. **MARA 등록번호 배지** (`src/assets/mara-number.svg` 신규) — 참고 이미지의 등록번호를 법무사님 번호인 **0741800**으로 변경, 배경(미색 카드) 제거 후 다크 배경용으로 재제작 (점 패턴 호주 지도 + Migration Agents Registration Number + 번호 박스 + www.mara.gov.au). 푸터에 이미지 단독 배지로 표시
3. **NSW JP 크레스트** (`src/assets/jp-logo.svg`) — NSW Justices Association 크레스트(원형 + 왕관 + 저울 + 1911)를 배경 투명 단색 버전으로 재현. "Justice of the Peace" 배지 우측에 표시
4. **구현**: `Footer.jsx`에 이미지 단독 배지(`image` 타입) 렌더링 추가, `content.js` en/ko 양쪽 badges에 등록번호 배지 항목 추가, `global.css`에 와이드 로고·이미지 배지 스타일 추가
5. 참고: 세 로고 모두 원본 이미지 기반 벡터 재현본 — 공식 원본 파일(투명 PNG/SVG) 확보 시 동일 경로 교체만 하면 됨

### 12.0a v0.4 변경 사항 ✅ (2026-08-12)

1. **클라이언트 확정 정보 반영** (`src/data/content.js` — 13장 1·2·3·7번 해소)
   - 주소: Suite 310, 33-43 Rowe St, Eastwood NSW 2122 / 전화·문자: 0432 009 862 / 이메일: info@jounlawyer.com / 운영시간: 월–금 9AM–5PM
   - 자격번호: **MARN 0741800** (Registered Migration Agent), **JP No. 183656** (Justice of the Peace)
   - 대표자명: **박두우 법무사 (Dow Park)** — About 섹션에 이름·직함·간단한 소개 노출 (v0.9에서 추가)
   - 서비스 목록: 현행 이민 4종 + 법률 4종 구성 유지 (대부분 서비스 제공 취지에 부합)
2. **F-02 폼 이메일 연동** — FormSubmit AJAX로 제출 내용이 `info@jounlawyer.com`에 테이블 형식 메일로 전송. 전송중(버튼 비활성)·실패(에러 메시지) 상태 처리. ⚠️ 최초 제출 시 FormSubmit이 보내는 활성화 확인 메일을 1회 승인해야 이후 수신됨
3. **F-05 구글맵 연동** — 지도 플레이스홀더를 실제 embed iframe으로 교체 (API 키 불필요)
4. **카카오톡 제거 (F-06 확정 제외)** — 연락처 목록·플로팅 버튼·문구에서 카카오톡 전면 제거, 플로팅 버튼은 전화+문자로 대체
5. **푸터 자격 배지 개편** — NAATI 번역 배지 제거, JP Number 배지 추가. Migration Agent·JP 배지 박스 우측에 로고 표시 (`src/assets/mara-logo.svg`, `jp-logo.svg` — 현재 임시 배지, 공식 로고 파일 확보 후 동일 경로에 교체만 하면 됨)

### 12.0 v0.3 변경 사항 ✅ (2026-08-12)

1. **F-08 다국어(영/한) 구현** — 호주 현지 사용 기준으로 **영어를 기본 언어**로 전환
   - `src/data/content.js`를 `CONTENT.en` / `CONTENT.ko` 이중 사전 구조로 재편 — 전 섹션(내비·히어로·인사말·서비스·약속·후기·상담폼·푸터·접근성 라벨) 완역
   - `src/i18n/LanguageContext.jsx` 신설 — React Context로 언어 상태 관리, 선택 언어 localStorage 유지, `<html lang>` 동기화
   - 헤더 우측 내비게이션(오시는 길)과 상담예약 버튼 사이에 **EN | 한국어 토글** 배치 (모바일은 드로어 내 배치)
   - `index.html` 메타태그·OG 태그를 영어 우선으로 갱신 (`og:locale` en_AU, alternate ko_KR)
2. **투명 배경 로고 + 스크롤 색 전환**
   - `logo.jpg`의 흰 배경을 제거한 `src/assets/logo.png` 생성·적용
   - 히어로(버건디) 위에서는 CSS 필터로 **흰색**, 스크롤 후 밝은 헤더에서는 **원본(검정+버건디)** — 헤더 내 다른 텍스트와 동일한 전환 규칙
3. **내비게이션 섹션 풀뷰포트 정렬 (요구 1–4)**
   - 인사말/서비스 분야/조은의 약속/고객 후기/오시는 길 5개 섹션에 `.section--fit` 적용 — `min-height: 100svh` + 헤더 높이만큼 상단 패딩 + 콘텐츠 수직 중앙 정렬
   - `scroll-padding-top`을 0으로 바꿔 앵커 클릭 시 섹션 최상단이 뷰포트 최상단에 정확히 도착 (검증: 5개 섹션 모두 top 0px)
   - 서비스·상담 섹션은 간격·폰트·폼 여백을 압축해 FHD(1080p) 화면에서 한 화면에 모두 표시 (측정: services 899px / contact 863px @ 720px 뷰포트 기준, 나머지는 정확히 100svh)
   - 상담 섹션 제목을 좌측 컬럼 안으로 이동해 세로 공간 절약, 지도 플레이스홀더 높이 축소
   - "조은의 약속"(Stats) 섹션에 섹션 라벨·제목 추가 후 풀뷰포트 중앙 정렬
4. **서비스 카드 크기 통일 (요구 4)** — Reveal 래퍼를 flex로 전환해 같은 행의 카드 4개가 그리드 행 높이를 동일하게 채움 (검증: 이민 4개 260px, 법률 4개 239px로 행 내 균일)

### 12.1 완료된 작업 ✅

**개발 환경**
- Vite + React 18 (JavaScript) 프로젝트 스캐폴딩 완료 (`npm run dev` → localhost:5173, `npm run build` 통과)
- `index.html`: 한국어 SEO 메타태그, OG 태그, LegalService 구조화 데이터(JSON-LD) 포함 (F-07 일부)
- Google Fonts 로드: Playfair Display + Noto Serif KR(제목), DM Sans + Noto Sans KR(본문), DM Mono(라벨)

**디자인 시스템** (Figma Make 명세 기반, `src/styles/global.css`)
- 컬러 토큰: Primary 버건디 `#8B1A1A` / Secondary 차콜 `#4A3F35` / Accent 골드 `#C9A96E` / 아이보리 `#F7F3EC` — 6.1 브랜드 컬러와 일치
- 반응형 브레이크포인트: 640px / 1024px (6.3 기준), 모바일 대응 완료
- 스크롤 진입 reveal 애니메이션, `prefers-reduced-motion` 대응

**메인 페이지 섹션** (5.1의 7개 섹션 전부 구현)
| # | 섹션 | 구현 내용 |
|---|---|---|
| 1 | 고정 헤더 | 로고(Logo.jpg) + GNB + 상담예약 CTA, 스크롤 시 배경 전환, 모바일 햄버거 드로어 |
| 2 | 히어로 | 풀스크린, 버건디 오버레이 + 골드 이탤릭 강조 헤드라인, 듀얼 CTA, SYDNEY·AUSTRALIA 라벨 |
| 3 | 대표 인사 | 사진 없이 가운데 정렬 텍스트 레이아웃(v1.2) + 사무소 소개 + **대표 프로필 카드**(이름 "Dow Woo Park"·직함·MARN·JP 번호·간단한 소개, v0.9 신설/v1.2 갱신) + 가치 카드 3개(좌측 정렬) |
| 4 | 서비스 분야 | 이민 4종 / 법률 4종 이원화 그리드 (Kah Lawyers 벤치마크 구조) |
| 5 | 차별점 | 스크롤 트리거 숫자 카운터 — 15+년 / 97% / 2,400+건 (수치는 플레이스홀더) |
| 6 | 고객 후기 | 캐러셀 5개(별점·익명 이름·케이스 유형), 이전/다음 + 도트 내비 |
| 7 | 상담 배너 + 오시는 길 | 버건디 리드 배너, 연락처·카카오톡 링크·지도 플레이스홀더, 상담 예약 폼 |
| — | 푸터 | 자격 배지(MARN·JP·NSW Law Society) + 우측 공신력 로고 컬럼(MARA·등록번호·JP 실, v0.7 개편), 서비스·사무소 링크, 법적 고지 3종 모달 링크 + ABN 표기(v0.8), 법적 면책 문구 |
| — | 플로팅 버튼 | 모바일 전용 전화·카카오톡 버튼 (F-06) |

**상담 예약 폼** (5.5 요구사항 반영)
- 필드: 이름·연락처(필수), 이메일, 상담 분야(이민/법률 9개 선택지), 희망 일시, 상담 내용, 개인정보 동의 체크(필수)
- 허니팟 스팸 방지 필드 적용 (9장 보안 요구사항)

**파일 구조**
```
├── index.html · vite.config.js · package.json
└── src/
    ├── main.jsx · App.jsx
    ├── styles/global.css        ← 디자인 토큰 + 전체 스타일
    ├── data/content.js          ← 모든 콘텐츠 단일 관리 (F-04) — CONTENT.en / CONTENT.ko 이중 사전 (F-08)
    │                              + legal 사전(terms · privacy · conduct) 영/한 완역 (F-11)
    │                              + SITE.abn (ABN 98 716 989 655)
    ├── i18n/LanguageContext.jsx ← 영/한 언어 상태 관리 (기본 en, localStorage 유지)
    ├── hooks/useReveal.js
    ├── assets/logo.svg (Joun Visa 여권 배지 마크 — 헤더 사용)
    │          joun-visa-logo-v1~v3.svg (시안 3종, 워드마크 포함 조합)
    │          mara-logo.svg · mara-number.svg · jp-logo.svg (푸터 공신력 로고)
    │          logo.jpg · logo.png (구 로고) · profile.png (대표 사진)
    └── components/  Header · Hero · About · Services · Stats ·
                     Testimonials · CtaBanner · Contact · Footer ·
                     LegalModal · FloatingActions · Reveal
```

### 12.2 남은 작업 (연동 대기) ⏳
- **F-02** FormSubmit 활성화: 첫 실제 제출 후 `info@jounlawyer.com`으로 오는 확인 메일 1회 승인
- ~~**F-07** sitemap.xml, robots.txt 추가~~ → ✅ 완료 (v1.0: `public/`에 추가. 도메인 `jounvisa.com` 확정에 따라 `robots.txt`·`sitemap.xml`·`index.html` canonical/OG URL·`SITE.url` 일괄 수정 완료)
- **F-07b Google Search Console 등록** 🔑 — 코드 작업은 v1.1에서 완료됐고, 남은 건 **대표님 구글 계정으로 하는 등록 절차**(개발자 대행 불가). 순서:
  1. [Search Console](https://search.google.com/search-console)에서 속성 유형 **"도메인"** 선택(URL 접두어 아님) → `jounvisa.com` 입력(`https://`·`www.` 제외) → 발급된 `google-site-verification=...` 문자열 복사
  2. Vercel → Domains → `jounvisa.com` → DNS Records에 TXT 추가 — **Name 비워둠**(`@`나 도메인명 입력 시 실패), Type `TXT`, Value 위 문자열, TTL `60`. 자물쇠 표시된 CAA 레코드(`pki.goog`·`sectigo.com`)는 SSL 발급용이므로 수정 금지
  3. Search Console에서 "확인" 클릭 (Vercel 자체 네임서버라 보통 1~2분, 실패 시 5분 후 재시도 — 전파 지연)
  4. Sitemaps 메뉴에 `sitemap.xml` 제출 → URL 검사에 `https://jounvisa.com/` 넣고 "색인 생성 요청"
  - 예상 소요: `site:jounvisa.com` 색인 확인까지 수일, 실검색어 순위 반영까지 수 주
- **F-07c Google 비즈니스 프로필 등록** (권장, 선택) — 구글 지도·로컬 팩 노출은 Search Console이 아닌 별도 서비스 관할. 이스트우드 지역 기반 유입 비중을 고려하면 실질 효과가 큼. 사이트에 `address`·`geo`·`openingHoursSpecification` 구조화 데이터가 이미 반영돼 있어 연동 시 시너지. 등록 시 우편 엽서 또는 전화 인증 필요
- **F-10** GA4 스크립트 삽입 (배포 시)
- ~~대표 프로필 사진 → 초상 플레이스홀더 교체~~ → ✅ 완료 (v0.6: `profile.png` 적용)
- 공식 MARA(OMARA)·JP 로고 원본 파일 확보 시 → `src/assets/mara-logo.svg` / `mara-number.svg` / `jp-logo.svg` 교체 (v0.5~v0.7에서 벡터 재현본 적용 완료 — 선택 사항). 단, 원본은 대부분 흰/미색 배경 + 남색·적색 인쇄용이라 다크 브라운 푸터에 얹으려면 배경 제거·리버스 처리 필요
- **F-11 법적 문안 검수** ⚠️ — 이용약관·개인정보처리방침·행동강령 3종은 벤치마크 및 호주 표준 관행(APPs, OMARA 행동강령, NSW 변호사 행동규칙)에 근거해 초안 작성한 것으로, **오픈 전 대표 법무사님의 내용 검수·승인 필요**. 특히 비용 약정 방식, 파일 보관 기간(현재 7년으로 기재), 불만 처리 채널 표기가 실제 사무소 운영과 일치하는지 확인 요망. v1.0에서 개인정보처리방침 6조에 **FormSubmit 제3자 경유·해외 서버 고지** 문단이 추가됨 — 함께 검수 필요
- 서브 페이지(서비스 상세, 성공사례 게시판, FAQ 등)는 미착수 — 사이트맵 확정 후 진행
- 법적 고지 3종은 현재 모달 방식 — 향후 라우터 도입 시 독립 URL(`/terms`, `/privacy`, `/code-of-conduct`)로 전환하면 SEO·외부 링크 참조에 유리 (선택 사항)
- **Joun Visa 리브랜딩 잔여 범위** — 헤더 로고·브랜드 텍스트 완료(v0.6), 로고 디자인 확정 완료(v0.7), ~~파비콘·OG 이미지~~ → ✅ 완료 (v1.0: 여권 배지 마크 기반 파비콘 4종 + OG 브랜드 카드). ~~도메인~~ → ✅ 확정 (v1.1: `jounvisa.com`). `index.html` 타이틀·메타태그, 푸터·본문 내 "Joun Lawyers" 표기의 일괄 교체 여부는 여전히 확정 필요 — 현재 사이트 주소는 `jounvisa.com`, 브랜드 표기는 헤더만 "Joun Visa"이고 타이틀·OG·푸터는 "Joun Lawyers"로 혼재. 이메일 도메인은 수신 계정 문제로 `jounlawyer.com` 유지 결정(12.0h-1 참조)
- **v1.0 신규 문구 검수** ⚠️ — "조은의 약속" 정성 문구 3종과 "주요 사례" 익명화 요약 5건은 개발 단계에서 작성한 초안. 실제 사무소 실무와 부합하는지 대표 검수 필요. 특히 사례 요약은 실제 사건을 특정할 수 있는 표현이 없는지 확인 요망

---

## 13. 미확정 사항 (클라이언트 확인 필요) ❓

1. ~~**사무소 기본 정보**~~ → ✅ 확정 (v0.4, 전화/문자 v1.2 갱신): Suite 310, 33-43 Rowe St, Eastwood NSW 2122 / **0410 497 979**(전화·문자) / info@jounlawyer.com / 월–금 9AM–5PM
2. ~~**대표 정보**~~ → ✅ 확정 (v0.4, v0.9, v1.2 갱신): 자격번호 MARN 0741800 · JP No. 183656 반영. **대표자명 "박두우 법무사 (Dow Woo Park)"**(v1.2에서 "Dow Park" → "Dow Woo Park" 정정) — About 섹션 프로필 카드에 이름·직함·MARN·JP 번호·간단한 소개 텍스트로 노출(v0.9 신설, v1.2에서 프로필 사진 제거 후 텍스트 강화). 프로필 사진은 v0.6에서 적용했으나 **v1.2에서 대표 요청으로 제거**
3. ~~**서비스 목록**~~ → ✅ 확정 (v0.4): 이민·법률 대부분 서비스 제공 — 현행 8개 카드 구성 유지
4. ~~**도메인**~~ → ✅ 확정 (v1.1): **jounvisa.com** — Vercel 등록·연결, canonical/OG/sitemap/robots/`SITE.url` 일괄 반영 및 배포 완료. 이메일은 수신 계정·FormSubmit 엔드포인트 유지를 위해 `info@jounlawyer.com` 그대로 사용
5. **고객 후기**: 기존 후기 자료 보유 여부, 실명 공개 가능 여부 — v1.0에서 창작 후기를 익명화 사례 요약으로 대체(리스크 해소). 실제 후기 확보·동의 시 후기 섹션 복원 여부 결정
6. ~~**영문 페이지** 필요 여부~~ → ✅ 확정·구현 완료 (v0.3: 영어 기본 + 한국어 토글)
7. ~~**카카오톡 채널** 보유 여부~~ → ✅ 확정 (v0.4): 채널 없음 — 사이트에서 전면 제거
8. **콘텐츠 관리**: 오픈 후 글(후기·칼럼)을 직접 등록하고 싶은지, 개발자에게 맡길 것인지
9. **사진 자산**: 대표 프로필 사진은 v0.6에서 적용했으나 **v1.2에서 대표 요청으로 About 섹션에서 제거**(사진 없이 텍스트 프로필만 노출). 사무소 사진 / 공식 MARA·JP 로고 원본 파일은 미확보
10. ~~**ABN**~~ → ✅ 확정 (v0.8): ABN 98 716 989 655 — 푸터 및 법적 고지 본문에 반영
11. **법적 고지 문안 승인**: 이용약관·개인정보처리방침·행동강령 3종 초안(v0.8)에 대한 대표 법무사님의 검수·승인 필요 — 12.2 참조
