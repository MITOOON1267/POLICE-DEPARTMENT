
"use strict";

/*
 * サンプルルールです。
 * 実際のCityの警察規則に合わせて内容を変更してください。
 * category:
 * basic = 基本規則
 * duty = 職務執行
 * crime = 犯罪対応
 * equipment = 装備・車両
 * rank = 階級・指揮
 */

const rules = [
  {
    id: "01",
    category: "basic",
    title: "警察官としての基本原則",
    summary: "すべての警察官が守るべき基本的な心得",
    content: [
      "市民に対して公平かつ冷静に対応すること。",
      "警察官としての権限を私的な目的で使用しないこと。",
      "街のルールおよび警察部門の規定を遵守すること。",
      "違反やトラブルを発見した場合は、適切な手順で報告すること。"
    ]
  },
  {
    id: "02",
    category: "basic",
    title: "服務規程・禁止事項",
    summary: "勤務中の行動と禁止される行為",
    content: [
      "職務中は警察官としてふさわしい行動を取ること。",
      "正当な理由なく市民や他の警察官に危害を加えないこと。",
      "職務上知り得た情報を不適切に共有しないこと。",
      "権限の濫用、私的制裁、職務の放棄を禁止する。",
      "黒を基調とした制服を着用し、デカールまたはベストに「POLICE」と記載すること。",
      "署長、副所長、または運営から許可がでた服装は問題ありません。"
    ]
  },
  {
    id: "03",
    category: "basic",
    title: "退勤時について",
    summary: "警察の備品の取り扱い",
    content: [
      "退勤時は、警察備品を所定のロッカーまたは警察車両等へ戻すこと。",
      "警察官であることを示さない服装へ着替えること。",
      "警察専用装備（テーザー・アーマー等）を勤務外へ持ち出さないこと。"
    ]
  },
  {
    id: "04",
    category: "duty",
    title: "警察官無線・GPSについて",
    summary: "無線・GPS義務",
    content: [
      "勤務中は必ず警察無線へ接続すること。",
      "警察のGPSに参加すること。"
    ]
  },
  {
    id: "05",
    category: "duty",
    title: "警察車両について",
    summary: "警察専用車両",
    content: [
      "警察車両の私的利用はしないこと。",
      "私用、長時間の外出（5分以上）目的で警察車両を使用しないこと。",
      "緊急走行を行う際は、原則として回転灯およびサイレンを使用すること。"
    ]
  },
  {
    id: "06",
    category: "duty",
    title: "警察としての対応",
    summary: "市民対応について",
    content: [
      "市民・犯罪者を問わず、冷静に対応すること。",
      "警察という権利を利用して一方的にRPを進めないこと。",
      "ルール上にない事柄については、上官または運営へ確認をとること。"
    ]
  },
  {
    id: "07",
    category: "crime",
    title: "発砲",
    summary: "発砲可能なタイミング",
    content: [
      "現場周辺の危険を確認し、市民の安全を確保すること。",
      "無抵抗の相手に対する理由のない発砲はしないこと。",
      "十分に警告できる状況で、何の警告もなく発砲しないこと。",
      "市民を巻き込む可能性を無視した無差別な発砲はしないこと",
      "※中型以上の犯罪、自身や他者に重大な危険が迫っている場合は、即発砲可能。"
    ]
  },
  {
    id: "08",
    category: "crime",
    title: "押収について",
    summary: "犯罪押収",
    content: [
      "押収は、違法物や犯罪に関連する物品を回収する目的で行うこと。",
      "押収対象かわからない場合は、上官へ確認を取ること。",
      "上官でも判断できない物品は運営へ連絡すること。",
      "新たな押収対象への追加判断は、運営と話し合ったうえで、署長・副所長のみ可能とする。"
    ]
  },
  {
    id: "09",
    category: "crime",
    title: "インパウンドについて",
    summary: "車両インパウンド対応",
    content: [
      "犯罪使用車両、違反車両、放置車両等について、必要に応じてインパウンドを行うこと。",
      "インパウンド時間、料金については、各種項目を確認すること。",
      "インパウンドを私的な嫌がらせや、不当な理由のない車両没収として利用しないこと。",
      "放置市民車両はできる限り本人に確認を取ったうえでインパウンドを行うこと。"
    ]
  },
  {
    id: "10",
    category: "equipment",
    title: "犯罪対応車両・航空機",
    summary: "犯罪対応利用制限",
    content: [
      "犯罪対応で使用する車両・ヘリコプターについて制限が設定されている場合は、下記各種項目にて、台数・使用条件を守ること。",
      "犯罪対応中に使用する車両・ヘリコプターを交換した場合も、新たに1台使用したものとして累計台数に加算すること。",
      "運営に許可されていないカスタムを無断で行わないこと。",
      "車両・ヘリコプターの台数上限は、同時に使用している台数ではなく、犯罪シーン開始から終了までに使用した累計台数として扱うこと。",
      "※車両・ヘリコプターの使用上限を上回った時点で、警察側の敗北とする。",
    ]
  },
  {
    id: "11",
    category: "equipment",
    title: "警察専用物品・押収済み物品の不正利用について",
    summary: "物品の取り扱い",
    content: [
      "警察専用の装備、武器などの物品を業務外で使用しないこと。",
      "警察専用の物品を第三者へ提供・販売したり、故意に第三者が入手できる状態にしないこと。",
      "一度押収した物品を私的に使用したり、第三者へ提供・販売・返却したり、故意に入手できる状態にしないこと。"
    ]
  },
  {
    id: "12",
    category: "rank",
    title: "各種項目",
    summary: "犯罪対応一覧",
    content: [
      "コンビニ強盗　　ヘリ1台、ライオット不可、即発砲不可、使用可能武器：ピストルのみ"
    ]
  },
  {
    id: "13",
    category: "rank",
    title: "報告・連絡・相談",
    summary: "情報共有とトラブル発生時の対応",
    content: [
      "重大な事案や規則違反は速やかに報告すること。",
      "引き継ぎ時は必要な情報を正確に共有すること。",
      "判断に迷う場合は独断で進めず、上官に相談すること。"
    ]
  }
];

const categoryNames = {
  basic: "基本規則",
  duty: "職務執行",
  crime: "犯罪対応",
  equipment: "装備・車両",
  rank: "階級・指揮"
};

const rulesList = document.getElementById("rulesList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resetSearch = document.getElementById("resetSearch");
const emptyState = document.getElementById("emptyState");
const documentCount = document.getElementById("documentCount");
const categoryList = document.getElementById("categoryList");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

let selectedCategory = "all";

function createRuleCard(rule) {
  const card = document.createElement("details");
  card.className = "rule-card";

  const summary = document.createElement("summary");

  const number = document.createElement("span");
  number.className = "rule-number";
  number.textContent = `RULE ${rule.id}`;

  const summaryContent = document.createElement("span");
  summaryContent.className = "rule-summary";

  const title = document.createElement("span");
  title.className = "rule-title";
  title.textContent = rule.title;

  const category = document.createElement("span");
  category.className = "rule-category";
  category.textContent = categoryNames[rule.category] || "その他";

  summaryContent.append(title, category);

  const arrow = document.createElement("span");
  arrow.className = "rule-arrow";
  arrow.textContent = "⌄";
  arrow.setAttribute("aria-hidden", "true");

  summary.append(number, summaryContent, arrow);

  const body = document.createElement("div");
  body.className = "rule-body";

  const description = document.createElement("p");
  description.textContent = rule.summary;
  body.appendChild(description);

  const list = document.createElement("ul");

  rule.content.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });

  body.appendChild(list);
  card.append(summary, body);

  return card;
}

function renderRules() {
  const keyword = searchInput.value
    .trim()
    .toLocaleLowerCase("ja");

  const filteredRules = rules.filter((rule) => {
    const matchesCategory =
      selectedCategory === "all" ||
      rule.category === selectedCategory;

    const searchableText = [
      rule.id,
      rule.title,
      rule.summary,
      categoryNames[rule.category],
      ...rule.content
    ].join(" ").toLocaleLowerCase("ja");

    const matchesKeyword = searchableText.includes(keyword);

    return matchesCategory && matchesKeyword;
  });

  rulesList.replaceChildren();

  filteredRules.forEach((rule) => {
    rulesList.appendChild(createRuleCard(rule));
  });

  documentCount.textContent =
    `RULES / ${String(filteredRules.length).padStart(2, "0")}`;

  emptyState.hidden = filteredRules.length !== 0;
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  selectedCategory = button.dataset.category;

  categoryList.querySelectorAll(".category").forEach((item) => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  renderRules();
});

searchInput.addEventListener("input", renderRules);

function resetFilters() {
  searchInput.value = "";
  selectedCategory = "all";

  categoryList.querySelectorAll(".category").forEach((button) => {
    const active = button.dataset.category === "all";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderRules();
}

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderRules();
  searchInput.focus();
});

resetSearch.addEventListener("click", resetFilters);

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    menuToggle.textContent = "☰";
  });
});

// 初期表示
categoryList.querySelectorAll(".category").forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.dataset.category === "all")
  );
});

renderRules();
