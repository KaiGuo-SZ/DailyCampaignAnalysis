(function () {
  const rootStyle = getComputedStyle(document.documentElement);
  const CHART_GRID = rootStyle.getPropertyValue("--chart-grid").trim() || "#e5e7eb";
  const CHART_TEXT = rootStyle.getPropertyValue("--chart-text").trim() || "#0f172a";
  const CHART_SUBTEXT = rootStyle.getPropertyValue("--chart-subtext").trim() || "#475569";

  const el = {
    fileInput: document.getElementById("fileInput"),
    importHint: document.getElementById("importHint"),
    dataStatus: document.getElementById("dataStatus"),
    dataScope: document.getElementById("dataScope"),
    projectHint: document.getElementById("projectHint"),

    tabStandard: document.getElementById("tabStandard"),
    tabNonStandard: document.getElementById("tabNonStandard"),
    tabOverview: document.getElementById("tabOverview"),
    tabStructure: document.getElementById("tabStructure"),
    tabTrend: document.getElementById("tabTrend"),
    tabCalculator: document.getElementById("tabCalculator"),

    compareSection: document.getElementById("compareSection"),
    overviewSection: document.getElementById("overviewSection"),
    overviewBigTable: document.getElementById("overviewBigTable"),
    overviewBigExportBtn: document.getElementById("overviewBigExportBtn"),
    overviewL2Table: document.getElementById("overviewL2Table"),
    overviewL2Hint: document.getElementById("overviewL2Hint"),
    overviewL2ExportBtn: document.getElementById("overviewL2ExportBtn"),
    overviewPlatTable: document.getElementById("overviewPlatTable"),
    overviewPlatExportBtn: document.getElementById("overviewPlatExportBtn"),
    overviewPlatL2Hint: document.getElementById("overviewPlatL2Hint"),
    overviewPlatL2Clear: document.getElementById("overviewPlatL2Clear"),
    ovSegAll: document.getElementById("ovSegAll"),
    ovSegStd: document.getElementById("ovSegStd"),
    ovSegNon: document.getElementById("ovSegNon"),

    structureSection: document.getElementById("structureSection"),
    structTableOverall: document.getElementById("structTableOverall"),
    structTableStd: document.getElementById("structTableStd"),
    structTableNon: document.getElementById("structTableNon"),
    structShare: document.getElementById("structShare"),
    structROI: document.getElementById("structROI"),
    structConv: document.getElementById("structConv"),
    structCAC: document.getElementById("structCAC"),
    structAddValue: document.getElementById("structAddValue"),
    structDrillCard: document.getElementById("structDrillCard"),
    structDrillTitle: document.getElementById("structDrillTitle"),
    structDrillTable: document.getElementById("structDrillTable"),
    structDrillClose: document.getElementById("structDrillClose"),
    structCompareCard: document.getElementById("structCompareCard"),
    structCompareTitle: document.getElementById("structCompareTitle"),
    structCompareTable: document.getElementById("structCompareTable"),
    structCompareClose: document.getElementById("structCompareClose"),

    trendSection: document.getElementById("trendSection"),
    trendShare: document.getElementById("trendShare"),
    trendROI: document.getElementById("trendROI"),
    trendAddCost: document.getElementById("trendAddCost"),
    trendAddValueLine: document.getElementById("trendAddValueLine"),
    trendCAC: document.getElementById("trendCAC"),
    trendAddRateLine: document.getElementById("trendAddRateLine"),
    trendLegendROI: document.getElementById("trendLegendROI"),
    trendLegendAddCost: document.getElementById("trendLegendAddCost"),
    trendLegendAddValue: document.getElementById("trendLegendAddValue"),
    trendLegendCAC: document.getElementById("trendLegendCAC"),
    trendLegendAddRate: document.getElementById("trendLegendAddRate"),
    trendBucketAll: document.getElementById("trendBucketAll"),
    trendBucketStd: document.getElementById("trendBucketStd"),
    trendBucketNon: document.getElementById("trendBucketNon"),
    trendRecentYes: document.getElementById("trendRecentYes"),
    trendRecentAll: document.getElementById("trendRecentAll"),
    trendRecentNo: document.getElementById("trendRecentNo"),
    trendHeatMeta: document.getElementById("trendHeatMeta"),
    heatLeadShare: document.getElementById("heatLeadShare"),
    heatROI: document.getElementById("heatROI"),
    heatConv: document.getElementById("heatConv"),
    heatAddCost: document.getElementById("heatAddCost"),
    heatAddValue: document.getElementById("heatAddValue"),
    heatCAC: document.getElementById("heatCAC"),
    heatAddRate: document.getElementById("heatAddRate"),

    yearMsBtn: document.getElementById("yearMsBtn"),
    yearMsLabel: document.getElementById("yearMsLabel"),
    yearMsBadge: document.getElementById("yearMsBadge"),
    yearMsPanel: document.getElementById("yearMsPanel"),
    yearMsOptions: document.getElementById("yearMsOptions"),
    yearMsSearch: document.getElementById("yearMsSearch"),
    yearMsSelectAll: document.getElementById("yearMsSelectAll"),
    yearMsClear: document.getElementById("yearMsClear"),
    yearMsCount: document.getElementById("yearMsCount"),

    monthMsBtn: document.getElementById("monthMsBtn"),
    monthMsLabel: document.getElementById("monthMsLabel"),
    monthMsBadge: document.getElementById("monthMsBadge"),
    monthMsPanel: document.getElementById("monthMsPanel"),
    monthMsOptions: document.getElementById("monthMsOptions"),
    monthMsSearch: document.getElementById("monthMsSearch"),
    monthMsSelectAll: document.getElementById("monthMsSelectAll"),
    monthMsClear: document.getElementById("monthMsClear"),
    monthMsCount: document.getElementById("monthMsCount"),

    projectMsBtn: document.getElementById("projectMsBtn"),
    projectMsLabel: document.getElementById("projectMsLabel"),
    projectMsBadge: document.getElementById("projectMsBadge"),
    projectMsPanel: document.getElementById("projectMsPanel"),
    projectMsOptions: document.getElementById("projectMsOptions"),
    projectMsSearch: document.getElementById("projectMsSearch"),
    projectMsSelectAll: document.getElementById("projectMsSelectAll"),
    projectMsClear: document.getElementById("projectMsClear"),
    projectMsCount: document.getElementById("projectMsCount"),

    periodMsBtn: document.getElementById("periodMsBtn"),
    periodMsLabel: document.getElementById("periodMsLabel"),
    periodMsBadge: document.getElementById("periodMsBadge"),
    periodMsPanel: document.getElementById("periodMsPanel"),
    periodMsOptions: document.getElementById("periodMsOptions"),
    periodMsSearch: document.getElementById("periodMsSearch"),
    periodMsSelectAll: document.getElementById("periodMsSelectAll"),
    periodMsClear: document.getElementById("periodMsClear"),
    periodMsCount: document.getElementById("periodMsCount"),

    overviewMeta: document.getElementById("overviewMeta"),
    searchInput: document.getElementById("searchInput"),
    platformList: document.getElementById("platformList"),
    leftEmptyHint: document.getElementById("leftEmptyHint"),
    rightEmptyHint: document.getElementById("rightEmptyHint"),
    activePlatformLabel: document.getElementById("activePlatformLabel"),
    platformMeta: document.getElementById("platformMeta"),
    ovROI: document.getElementById("ovROI"),
    ovAddValue: document.getElementById("ovAddValue"),
    ovLeadShare: document.getElementById("ovLeadShare"),
    ovCAC: document.getElementById("ovCAC"),
    ovConv: document.getElementById("ovConv"),
    ovAddRate: document.getElementById("ovAddRate"),
    plROI: document.getElementById("plROI"),
    plAddValue: document.getElementById("plAddValue"),
    plLeadShare: document.getElementById("plLeadShare"),
    plCAC: document.getElementById("plCAC"),
    plConv: document.getElementById("plConv"),
    plAddRate: document.getElementById("plAddRate"),

    calculatorSection: document.getElementById("calculatorSection"),
    calcAnalysisPeriod: document.getElementById("calcAnalysisPeriod"),
    calcExportBtn: document.getElementById("calcExportBtn"),
    calcResultTable: document.getElementById("calcResultTable"),
    calcRefMsBtn: document.getElementById("calcRefMsBtn"),
    calcRefMsLabel: document.getElementById("calcRefMsLabel"),
    calcRefMsBadge: document.getElementById("calcRefMsBadge"),
    calcRefMsPanel: document.getElementById("calcRefMsPanel"),
    calcRefMsOptions: document.getElementById("calcRefMsOptions"),
    calcRefMsSearch: document.getElementById("calcRefMsSearch"),
    calcRefMsSelectAll: document.getElementById("calcRefMsSelectAll"),
    calcRefMsClear: document.getElementById("calcRefMsClear"),
    calcRefMsCount: document.getElementById("calcRefMsCount"),
  };

  const PROJECT_COLOR_PALETTE = ["#38bdf8", "#22c55e", "#f59e0b", "#a78bfa", "#fb7185", "#34d399", "#f97316", "#60a5fa", "#e879f9", "#facc15"];
  let COLORS_BY_PROJECT = {};

  const STRUCT_BUCKETS = [
    { key: "standard", label: "标准", bucket: "标准渠道", color: "#3b82f6" },
    { key: "nonstandard", label: "非标", bucket: "非标渠道", color: "#f97316" },
  ];

  function asNum(n) {
    const x = Number(n);
    return Number.isFinite(x) ? x : 0;
  }

  function safeDiv(n, d) {
    const dd = asNum(d);
    if (!dd) return 0;
    return asNum(n) / dd;
  }

  function round2(x) {
    return Math.round((asNum(x) + 1e-12) * 100) / 100;
  }

  function fmtInt(x) {
    return String(Math.round(asNum(x)));
  }

  function fmt2(x) {
    return String(round2(x).toFixed(2));
  }

  function fmtPct1(x) {
    return asNum(x).toFixed(1) + "%";
  }

  function fmtPct0(x) {
    return String(Math.round(asNum(x))) + "%";
  }

  function uniq(arr) {
    return Array.from(new Set(arr));
  }

  function sortNumAsc(a, b) {
    return asNum(a) - asNum(b);
  }

  function sortNumDesc(a, b) {
    return asNum(b) - asNum(a);
  }

  function projectPeriodLabel(project, periodNum) {
    return String(project) + "｜" + String(asNum(periodNum)) + "期";
  }

  function parsePeriodNum(s) {
    const t = String(s == null ? "" : s).trim();
    if (!t) return -1;
    const m = t.match(/(\d+)\s*期?\s*$/);
    if (m) return asNum(m[1]);
    const m2 = t.match(/(\d+)/);
    if (m2) return asNum(m2[1]);
    return -1;
  }

  function normalizeText(s) {
    return String(s || "").trim().toLowerCase();
  }

  function optionMatches(opt, q) {
    const qq = normalizeText(q);
    if (!qq) return true;
    const t = normalizeText(opt.label);
    const v = normalizeText(opt.value);
    const g = normalizeText(opt.project || opt.group || "");
    return t.includes(qq) || v.includes(qq) || g.includes(qq);
  }

  function renderMultiSelectOptions(container, options, selectedSet, onChange, groupKey, searchText) {
    container.innerHTML = "";
    let lastGroup = null;
    for (const opt of options) {
      if (!optionMatches(opt, searchText)) continue;
      const g = groupKey ? String(opt[groupKey] || "") : "";
      if (groupKey && g && g !== lastGroup) {
        const gh = document.createElement("div");
        gh.className = "msGroup";
        gh.textContent = g;
        container.appendChild(gh);
        lastGroup = g;
      }

      const row = document.createElement("label");
      row.className = "msOpt";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = selectedSet.has(opt.value);
      cb.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          cb.checked = !cb.checked;
          cb.dispatchEvent(new Event("change", { bubbles: true }));
        }
      };
      cb.onchange = () => {
        if (cb.checked) selectedSet.add(opt.value);
        else selectedSet.delete(opt.value);
        onChange();
      };
      const txt = document.createElement("div");
      txt.className = "txt";
      txt.textContent = opt.label;
      row.appendChild(cb);
      row.appendChild(txt);
      container.appendChild(row);
    }
  }

  function labelForSelection(selectedSet, allOptions, emptyLabel, mode) {
    const n = selectedSet.size;
    const total = allOptions.length;
    if (!total) return emptyLabel || "无数据";
    if (!n || n === total) return "全部";
    if (mode === "list") {
      const selectedLabels = [];
      for (const opt of allOptions) {
        if (!selectedSet.has(opt.value)) continue;
        selectedLabels.push(opt.label);
        if (selectedLabels.length >= 3) break;
      }
      const extra = n > selectedLabels.length ? ` +${n - selectedLabels.length}` : "";
      return selectedLabels.join(" / ") + extra;
    }
    return `已选 ${n}`;
  }

  function setBadge(badgeEl, selectedSet, allOptions) {
    const n = selectedSet.size;
    const total = allOptions.length;
    if (!total || !n || n === total) {
      badgeEl.style.display = "none";
      badgeEl.textContent = "";
      return;
    }
    badgeEl.style.display = "inline-flex";
    badgeEl.textContent = String(n);
  }

  function setCount(countEl, selectedSet, allOptions, searchText) {
    const total = allOptions.length;
    const n = selectedSet.size;
    const visible = allOptions.filter((o) => optionMatches(o, searchText)).length;
    countEl.textContent = `已选 ${n} / ${total}（当前列表 ${visible}）`;
  }

  let rows = [];
  let dayAgg = {};
  let meta = {};
  let importRowsCount = 0;
  let aggRowsCount = 0;
  let hasYearDim = false;
  let hasMonthDim = false;

  const state = {
    mainTab: "overview",
    channelBucket: "标准渠道",
    years: new Set(),
    months: new Set(),
    projects: new Set(),
    periods: new Set(),
    platform: "__NONE__",
    search: "",
    structDrillProject: "",
    structDrillMode: "overall",
    structCompareMode: "",
    overviewBucket: "标准渠道",
    overviewL2: "__ALL__",
    overviewPlatSortKey: "share",
    overviewPlatSortDir: "desc",
    trendBucket: "__ALL__",
    trendRecent5: "__YES__",
    calcAnalysisProjectPeriod: "",
    calcRefProjectPeriods: new Set(),
  };

  const msRuntime = {
    year: { options: [], search: "", onChange: null },
    month: { options: [], search: "", onChange: null },
    project: { options: [], search: "", onChange: null },
    period: { options: [], search: "", onChange: null, cleared: false },
  };
  const calcRuntime = { options: [], search: "", onChange: null };

  function closeAllPanels() {
    if (el.yearMsPanel) el.yearMsPanel.classList.remove("open");
    if (el.yearMsBtn) el.yearMsBtn.classList.remove("isOpen");
    if (el.monthMsPanel) el.monthMsPanel.classList.remove("open");
    if (el.monthMsBtn) el.monthMsBtn.classList.remove("isOpen");
    if (el.projectMsPanel) el.projectMsPanel.classList.remove("open");
    if (el.projectMsBtn) el.projectMsBtn.classList.remove("isOpen");
    if (el.periodMsPanel) el.periodMsPanel.classList.remove("open");
    if (el.periodMsBtn) el.periodMsBtn.classList.remove("isOpen");
    if (el.calcRefMsPanel) el.calcRefMsPanel.classList.remove("open");
    if (el.calcRefMsBtn) el.calcRefMsBtn.classList.remove("isOpen");
  }

  function togglePanel(panel) {
    const isOpen = panel.classList.contains("open");
    closeAllPanels();
    if (!isOpen) {
      panel.classList.add("open");
      if (panel === el.yearMsPanel) el.yearMsBtn.classList.add("isOpen");
      if (panel === el.monthMsPanel) el.monthMsBtn.classList.add("isOpen");
      if (panel === el.projectMsPanel) el.projectMsBtn.classList.add("isOpen");
      if (panel === el.periodMsPanel) el.periodMsBtn.classList.add("isOpen");
      if (panel === el.calcRefMsPanel) el.calcRefMsBtn.classList.add("isOpen");
      setTimeout(() => {
        if (panel === el.yearMsPanel && el.yearMsSearch) el.yearMsSearch.focus();
        if (panel === el.monthMsPanel && el.monthMsSearch) el.monthMsSearch.focus();
        if (panel === el.projectMsPanel && el.projectMsSearch) el.projectMsSearch.focus();
        if (panel === el.periodMsPanel && el.periodMsSearch) el.periodMsSearch.focus();
        if (panel === el.calcRefMsPanel && el.calcRefMsSearch) el.calcRefMsSearch.focus();
      }, 0);
    }
  }

  function refreshYearUI(onChange) {
    const options = msRuntime.year.options || [];
    renderMultiSelectOptions(el.yearMsOptions, options, state.years, onChange, null, msRuntime.year.search);
    el.yearMsLabel.textContent = labelForSelection(state.years, options, "无年度", "list");
    setBadge(el.yearMsBadge, state.years, options);
    setCount(el.yearMsCount, state.years, options, msRuntime.year.search);
  }

  function refreshMonthUI(onChange) {
    const options = msRuntime.month.options || [];
    renderMultiSelectOptions(el.monthMsOptions, options, state.months, onChange, null, msRuntime.month.search);
    el.monthMsLabel.textContent = labelForSelection(state.months, options, "无月份", "list");
    setBadge(el.monthMsBadge, state.months, options);
    setCount(el.monthMsCount, state.months, options, msRuntime.month.search);
  }

  function formatSetForScope(setObj) {
    const n = setObj.size;
    if (!n) return "";
    const xs = Array.from(setObj.values());
    if (xs.length <= 3) return xs.join(" / ");
    return xs.slice(0, 2).join(" / ") + ` +${xs.length - 2}`;
  }

  function refreshProjectUI(onChange) {
    const options = msRuntime.project.options || [];
    renderMultiSelectOptions(el.projectMsOptions, options, state.projects, onChange, null, msRuntime.project.search);
    const total = options.length;
    const n = state.projects.size;
    if (!total) el.projectMsLabel.textContent = "无项目";
    else if (!n || n === total) el.projectMsLabel.textContent = "全部";
    else el.projectMsLabel.textContent = formatSetForScope(state.projects) || `已选 ${n}`;
    setBadge(el.projectMsBadge, state.projects, options);
    setCount(el.projectMsCount, state.projects, options, msRuntime.project.search);
  }

  function refreshPeriodUI(onChange) {
    const options = msRuntime.period.options || [];
    renderMultiSelectOptions(el.periodMsOptions, options, state.periods, onChange, "project", msRuntime.period.search);
    const total = options.length;
    const n = state.periods.size;
    if (!total) el.periodMsLabel.textContent = "无营期";
    else if (!n) el.periodMsLabel.textContent = msRuntime.period.cleared ? "未选择" : "全部";
    else if (n === total) el.periodMsLabel.textContent = "全部";
    else el.periodMsLabel.textContent = labelForSelection(state.periods, options, "无营期", "list");
    setBadge(el.periodMsBadge, state.periods, options);
    setCount(el.periodMsCount, state.periods, options, msRuntime.period.search);
  }

  function refreshCalcRefUI(onChange) {
    const options = calcRuntime.options || [];
    renderMultiSelectOptions(el.calcRefMsOptions, options, state.calcRefProjectPeriods, onChange, "project", calcRuntime.search);
    const total = options.length;
    const n = state.calcRefProjectPeriods.size;
    if (!total) el.calcRefMsLabel.textContent = "无营期";
    else if (!n) el.calcRefMsLabel.textContent = "未选择";
    else if (n === total) el.calcRefMsLabel.textContent = "全部";
    else el.calcRefMsLabel.textContent = labelForSelection(state.calcRefProjectPeriods, options, "无营期", "list");
    setBadge(el.calcRefMsBadge, state.calcRefProjectPeriods, options);
    setCount(el.calcRefMsCount, state.calcRefProjectPeriods, options, calcRuntime.search);
  }

  function scopeLabel(selectedSet, options, emptyLabel) {
    if (!options || !options.length) return emptyLabel || "无数据";
    return labelForSelection(selectedSet, options, emptyLabel || "无数据", "list");
  }

  function applyFiltersBase() {
    return rows.filter((r) => {
      if (r.channelBucket !== state.channelBucket) return false;
      if (state.years.size && !state.years.has(asNum(r.year))) return false;
      if (state.months.size && !state.months.has(asNum(r.month))) return false;
      if (state.projects.size && !state.projects.has(String(r.project))) return false;
      if (msRuntime.period.cleared && !state.periods.size) return false;
      if (state.periods.size && !state.periods.has(projectPeriodLabel(r.project, r.periodNum))) return false;
      return true;
    });
  }

  function applyFiltersAllChannels() {
    return rows.filter((r) => {
      if (state.years.size && !state.years.has(asNum(r.year))) return false;
      if (state.months.size && !state.months.has(asNum(r.month))) return false;
      if (state.projects.size && !state.projects.has(String(r.project))) return false;
      if (msRuntime.period.cleared && !state.periods.size) return false;
      if (state.periods.size && !state.periods.has(projectPeriodLabel(r.project, r.periodNum))) return false;
      return true;
    });
  }

  function rowsForMonthOptions() {
    return rows.filter((r) => {
      if (state.years.size && !state.years.has(asNum(r.year))) return false;
      return true;
    });
  }

  function rowsForProjectOptions() {
    return rows.filter((r) => {
      if (state.years.size && !state.years.has(asNum(r.year))) return false;
      if (state.months.size && !state.months.has(asNum(r.month))) return false;
      return true;
    });
  }

  function rowsForPeriodOptions() {
    return rows.filter((r) => {
      if (state.years.size && !state.years.has(asNum(r.year))) return false;
      if (state.months.size && !state.months.has(asNum(r.month))) return false;
      if (state.projects.size && !state.projects.has(String(r.project))) return false;
      return true;
    });
  }

  function setEmptyHint(node, text) {
    if (!node) return;
    const t = String(text || "");
    node.textContent = t;
    node.style.display = t ? "block" : "none";
  }


  function buildProjectOptions() {
    const base = rowsForProjectOptions();
    const projects = uniq(base.map((r) => String(r.project))).sort((a, b) => String(a).localeCompare(String(b), "zh-CN"));
    msRuntime.project.options = projects.map((x) => ({ value: x, label: x }));
    state.projects = new Set(Array.from(state.projects.values()).filter((x) => projects.includes(x)));
    const onChange = () => {
      if (!state.projects.size) for (const opt of msRuntime.project.options) state.projects.add(opt.value);
      buildPeriodOptions();
      state.platform = "__NONE__";
      refreshProjectUI(onChange);
      renderAll();
    };
    msRuntime.project.onChange = onChange;
    if (!state.projects.size) for (const opt of msRuntime.project.options) state.projects.add(opt.value);
    refreshProjectUI(onChange);
  }

  function buildPeriodOptions() {
    const base = rowsForPeriodOptions();
    const byProj = new Map();
    for (const r of base) {
      const proj = String(r.project);
      const pn = asNum(r.periodNum);
      if (pn < 0) continue;
      if (!byProj.has(proj)) byProj.set(proj, new Set());
      byProj.get(proj).add(pn);
    }
    const options = [];
    const projects = Array.from(byProj.keys()).sort((a, b) => String(a).localeCompare(String(b), "zh-CN"));
    for (const proj of projects) {
      const periods = Array.from(byProj.get(proj).values()).sort(sortNumAsc);
      for (const pn of periods) {
        options.push({
          value: projectPeriodLabel(proj, pn),
          label: `${shortProjectName(proj)} ${pn}期`,
          project: proj,
          periodNum: pn,
        });
      }
    }
    msRuntime.period.options = options;
    const keep = new Set(options.map((x) => x.value));
    state.periods = new Set(Array.from(state.periods.values()).filter((x) => keep.has(x)));
    const onChange = () => {
      if (state.periods.size) msRuntime.period.cleared = false;
      if (!state.periods.size && !msRuntime.period.cleared) {
        for (const opt of msRuntime.period.options) state.periods.add(opt.value);
      }
      state.platform = "__NONE__";
      refreshPeriodUI(onChange);
      renderAll();
    };
    msRuntime.period.onChange = onChange;
    if (!state.periods.size) for (const opt of msRuntime.period.options) state.periods.add(opt.value);
    refreshPeriodUI(onChange);
  }

  function buildYearOptions() {
    const years = uniq(rows.map((r) => r.year)).sort(sortNumDesc);
    const options = years.map((y) => ({ value: y, label: asNum(y) > 0 ? String(y) : "未知" }));
    msRuntime.year.options = options;
    state.years = new Set(Array.from(state.years.values()).filter((y) => years.includes(y)));
    const onChange = () => {
      if (!state.years.size) for (const opt of msRuntime.year.options) state.years.add(opt.value);
      buildMonthOptions();
      buildProjectOptions();
      buildPeriodOptions();
      state.platform = "__NONE__";
      refreshYearUI(onChange);
      renderAll();
    };
    msRuntime.year.onChange = onChange;
    if (!state.years.size) for (const opt of msRuntime.year.options) state.years.add(opt.value);
    refreshYearUI(onChange);
  }

  function buildMonthOptions() {
    const base = rowsForMonthOptions();
    const months = uniq(base.map((r) => r.month)).sort((a, b) => {
      const aa = asNum(a), bb = asNum(b);
      const aKnown = aa >= 1 && aa <= 12;
      const bKnown = bb >= 1 && bb <= 12;
      if (aKnown && bKnown) return aa - bb;
      if (aKnown && !bKnown) return -1;
      if (!aKnown && bKnown) return 1;
      return aa - bb;
    });
    const options = months.map((m) => ({ value: m, label: asNum(m) >= 1 && asNum(m) <= 12 ? String(asNum(m)) : "未知" }));
    msRuntime.month.options = options;
    state.months = new Set(Array.from(state.months.values()).filter((m) => months.includes(m)));
    const onChange = () => {
      if (!state.months.size) for (const opt of msRuntime.month.options) state.months.add(opt.value);
      buildProjectOptions();
      buildPeriodOptions();
      state.platform = "__NONE__";
      refreshMonthUI(onChange);
      renderAll();
    };
    msRuntime.month.onChange = onChange;
    if (!state.months.size) for (const opt of msRuntime.month.options) state.months.add(opt.value);
    refreshMonthUI(onChange);
  }

  function computeNiceMax(vMax) {
    const x = Math.max(0, asNum(vMax));
    if (!x) return 1;
    const base = Math.pow(10, Math.floor(Math.log10(x)));
    const n = x / base;
    const m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
    return m * base;
  }

  function drawGroupedBarChart(canvas, cfg) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    if (!W || !H) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * ratio);
    canvas.height = Math.round(H * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const labels = cfg.labels || [];
    const series = cfg.series || [];
    const maxV = computeNiceMax(cfg.maxValue || 0);
    const padL = 38, padR = 12, padT = 10, padB = 32;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    ctx.strokeStyle = CHART_GRID;
    ctx.fillStyle = CHART_SUBTEXT;
    ctx.font = "12px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const gridN = 4;
    for (let i = 0; i <= gridN; i++) {
      const y = padT + (plotH * i) / gridN;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();
      const v = maxV * (1 - i / gridN);
      ctx.fillText(cfg.tickFormat ? cfg.tickFormat(v) : fmt2(v), padL - 6, y);
    }

    const n = labels.length;
    if (!n) return;
    const groupGap = Math.max(6, plotW * 0.02);
    const groupW = (plotW - groupGap * (n - 1)) / n;
    const sN = series.length;
    const barGap = 3;
    const barW = sN ? (groupW - barGap * (sN - 1)) / sN : groupW;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let i = 0; i < n; i++) {
      const gx = padL + i * (groupW + groupGap);
      const lx = gx + groupW / 2;
      const lab = String(labels[i]);
      ctx.fillStyle = CHART_SUBTEXT;
      ctx.fillText(lab, lx, H - padB + 8);
      for (let j = 0; j < sN; j++) {
        const s = series[j];
        const v = asNum((s.values || [])[i]);
        const h = maxV ? (v / maxV) * plotH : 0;
        const x = gx + j * (barW + barGap);
        const y = padT + plotH - h;
        const itemColor = Array.isArray(s.itemColors) ? s.itemColors[i] : "";
        ctx.fillStyle = itemColor || s.color || "#3b82f6";
        ctx.fillRect(x, y, barW, h);
        ctx.fillStyle = CHART_TEXT;
        ctx.font = "11px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
        if (cfg.valueLabel) {
          const txt = cfg.valueLabel(v);
          ctx.fillText(txt, x + barW / 2, y - 14);
        }
      }
    }
  }

  function drawLineChart(canvas, cfg) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    if (!W || !H) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * ratio);
    canvas.height = Math.round(H * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const labels = cfg.labels || [];
    const series = cfg.series || [];
    const customTicks = Array.isArray(cfg.tickValues) && cfg.tickValues.length ? cfg.tickValues.map(asNum) : null;
    const maxV = customTicks ? Math.max(0.0001, ...customTicks) : computeNiceMax(cfg.maxValue || 0);
    const padL = 42, padR = 14, padT = 12, padB = 34;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    ctx.strokeStyle = CHART_GRID;
    ctx.fillStyle = CHART_SUBTEXT;
    ctx.font = "12px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    if (customTicks) {
      for (const vv of customTicks) {
        const v = asNum(vv);
        const y = padT + plotH - (maxV ? (v / maxV) * plotH : 0);
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(W - padR, y);
        ctx.stroke();
        ctx.fillText(cfg.tickFormat ? cfg.tickFormat(v) : fmt2(v), padL - 6, y);
      }
    } else {
      const gridN = 4;
      for (let i = 0; i <= gridN; i++) {
        const y = padT + (plotH * i) / gridN;
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(W - padR, y);
        ctx.stroke();
        const v = maxV * (1 - i / gridN);
        ctx.fillText(cfg.tickFormat ? cfg.tickFormat(v) : fmt2(v), padL - 6, y);
      }
    }

    const n = labels.length;
    if (!n) return;
    const stepX = n === 1 ? 0 : plotW / (n - 1);
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let i = 0; i < n; i++) {
      const x = padL + i * stepX;
      ctx.fillStyle = CHART_SUBTEXT;
      ctx.fillText(String(labels[i]), x, H - padB + 8);
    }

    for (const s of series) {
      const vals = s.values || [];
      ctx.strokeStyle = s.color || "#3b82f6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      vals.forEach((rawV, i) => {
        const v = asNum(rawV);
        const x = padL + i * stepX;
        const y = padT + plotH - (maxV ? (v / maxV) * plotH : 0);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      vals.forEach((rawV, i) => {
        const v = asNum(rawV);
        const x = padL + i * stepX;
        const y = padT + plotH - (maxV ? (v / maxV) * plotH : 0);
        ctx.fillStyle = s.color || "#3b82f6";
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        if (cfg.valueLabel) {
          ctx.fillStyle = s.color || "#3b82f6";
          ctx.font = "11px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.fillText(cfg.valueLabel(v), x, y - 6);
        }
      });
    }
  }

  function shortProjectName(name) {
    return String(name || "").replace(/英语/g, "");
  }

  function level2OfPlatform(platform) {
    const m = window.__LEVEL2_BY_PLATFORM__ || {};
    const k = String(platform || "");
    return String(m[k] || "未匹配");
  }

  function projectColor(name) {
    return COLORS_BY_PROJECT[String(name)] || "#3b82f6";
  }

  function renderLegend(container, items) {
    if (!container) return;
    container.innerHTML = (items || [])
      .map((it) => `<span><span class="dot" style="background:${it.color}; border-color:${it.color};"></span> ${it.label}</span>`)
      .join("");
  }

  function drawStackedBarChart(canvas, cfg) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    if (!W || !H) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * ratio);
    canvas.height = Math.round(H * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const labels = cfg.labels || [];
    const stacks = cfg.stacks || [];
    const padL = 38, padR = 12, padT = 10, padB = 32;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    ctx.strokeStyle = CHART_GRID;
    ctx.fillStyle = CHART_SUBTEXT;
    ctx.font = "12px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const gridN = 4;
    for (let i = 0; i <= gridN; i++) {
      const y = padT + (plotH * i) / gridN;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();
      const v = 100 * (1 - i / gridN);
      ctx.fillText(cfg.tickFormat ? cfg.tickFormat(v) : fmt2(v), padL - 6, y);
    }

    const n = labels.length;
    if (!n) return;
    const groupGap = Math.max(8, plotW * 0.03);
    const barW = (plotW - groupGap * (n - 1)) / n;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let i = 0; i < n; i++) {
      const x = padL + i * (barW + groupGap);
      const lab = String(labels[i]);
      ctx.fillStyle = CHART_SUBTEXT;
      ctx.fillText(lab, x + barW / 2, H - padB + 8);
      let acc = 0;
      for (const st of stacks) {
        const v = asNum((st.values || [])[i]);
        const h = (v / 100) * plotH;
        const y = padT + plotH - acc - h;
        ctx.fillStyle = st.color || "#3b82f6";
        ctx.fillRect(x, y, barW, h);
        ctx.fillStyle = CHART_TEXT;
        ctx.font = "11px system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
        if (cfg.valueLabel) {
          const txt = cfg.valueLabel(v);
          ctx.fillText(txt, x + barW / 2, y + h / 2 - 6);
        }
        acc += h;
      }
    }
  }

  function buildAggByProjectPeriod(filteredRows) {
    const m = new Map();
    for (const r of filteredRows) {
      const k = String(r.project) + "|" + String(asNum(r.periodNum));
      if (!m.has(k)) m.set(k, { project: String(r.project), periodNum: asNum(r.periodNum), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0, platforms: new Set() });
      const v = m.get(k);
      v.cost += asNum(r.cost);
      v.leads += asNum(r.leads);
      v.adds += asNum(r.adds);
      v.l1Orders += asNum(r.l1Orders);
      v.l1Value += asNum(r.l1Value);
      v.platforms.add(String(r.platform));
    }
    const list = Array.from(m.values());
    for (const it of list) {
      it.roi = safeDiv(it.l1Value, it.cost);
      it.cac = safeDiv(it.cost, it.leads);
      it.conv = safeDiv(it.l1Orders, it.adds) * 100;
      it.addValue = safeDiv(it.l1Value, it.adds);
      it.addRate = safeDiv(it.adds, it.leads) * 100;
      it.platformCnt = it.platforms.size;
    }
    return list;
  }

  function buildPlatformSummary(filteredRows) {
    const m = new Map();
    for (const r of filteredRows) {
      const pk = String(r.platform);
      if (!m.has(pk)) m.set(pk, { platform: pk, projects: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 });
      const v = m.get(pk);
      v.projects.add(String(r.project));
      v.cost += asNum(r.cost);
      v.leads += asNum(r.leads);
      v.adds += asNum(r.adds);
      v.l1Orders += asNum(r.l1Orders);
      v.l1Value += asNum(r.l1Value);
    }
    const list = Array.from(m.values());
    for (const it of list) {
      it.projectCnt = it.projects.size;
      it.roi = safeDiv(it.l1Value, it.cost);
    }
    list.sort((a, b) => b.projectCnt - a.projectCnt || b.leads - a.leads || b.l1Value - a.l1Value);
    return list;
  }

  function renderPlatformList(filteredRows, denomRowsAllChannels) {
    const list = buildPlatformSummary(filteredRows);
    const q = normalizeText(state.search || "");
    const shown = q ? list.filter((x) => normalizeText(x.platform).includes(q)) : list;
    if (!shown.length) setEmptyHint(el.leftEmptyHint, "没有匹配的平台");
    else setEmptyHint(el.leftEmptyHint, "");

    el.platformList.innerHTML = shown
      .map((it) => {
        const active = state.platform === it.platform;
        return [
          `<div class="item${active ? " active" : ""}" data-platform="${String(it.platform)}">`,
          `<div class="platName">${String(it.platform)}</div>`,
          `<div style="text-align:right;">${fmtInt(it.projectCnt)}</div>`,
          `<div style="text-align:right;">${fmtInt(it.leads)}</div>`,
          `<div style="text-align:right;">${fmt2(it.roi)}</div>`,
          `</div>`,
        ].join("");
      })
      .join("");

    for (const node of el.platformList.querySelectorAll(".item")) {
      node.onclick = () => {
        const p = node.getAttribute("data-platform");
        state.platform = p || "__NONE__";
        renderPlatformList(filteredRows, denomRowsAllChannels);
        renderPlatformDetail(filteredRows, denomRowsAllChannels);
      };
    }
  }

  function renderOverview(filteredRows, denomRowsAllChannels) {
    const agg = buildAggByProjectPeriod(filteredRows).sort((a, b) => b.roi - a.roi || b.leads - a.leads);
    const denomMap = new Map();
    for (const r of denomRowsAllChannels) {
      const k = String(r.project) + "|" + String(asNum(r.periodNum));
      if (!denomMap.has(k)) denomMap.set(k, 0);
      denomMap.set(k, denomMap.get(k) + asNum(r.leads));
    }
    const labels = agg.map((x) => shortProjectName(x.project) + String(asNum(x.periodNum)) + "期");
    const itemColors = agg.map((x) => projectColor(x.project));

    const roi = agg.map((x) => x.roi);
    const cac = agg.map((x) => x.cac);
    const addValue = agg.map((x) => x.addValue);
    const conv = agg.map((x) => x.conv);
    const addRate = agg.map((x) => x.addRate);
    const share = agg.map((x) => {
      const k = String(x.project) + "|" + String(asNum(x.periodNum));
      const denom = asNum(denomMap.get(k));
      return denom ? (asNum(x.leads) / denom) * 100 : 0;
    });

    drawGroupedBarChart(el.ovROI, {
      labels,
      series: [{ name: "ROI", values: roi, color: "#3b82f6", itemColors }],
      maxValue: Math.max(1, ...roi),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmt2(v),
    });
    drawGroupedBarChart(el.ovAddValue, {
      labels,
      series: [{ name: "添加产值", values: addValue, color: "#3b82f6", itemColors }],
      maxValue: Math.max(1, ...addValue),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmt2(v),
    });
    drawGroupedBarChart(el.ovCAC, {
      labels,
      series: [{ name: "CAC", values: cac, color: "#3b82f6", itemColors }],
      maxValue: Math.max(1, ...cac),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmt2(v),
    });
    drawGroupedBarChart(el.ovLeadShare, {
      labels,
      series: [{ name: "获客量占比", values: share, color: "#3b82f6", itemColors }],
      maxValue: Math.max(1, ...share),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmtPct1(v),
    });
    drawGroupedBarChart(el.ovConv, {
      labels,
      series: [{ name: "转率", values: conv, color: "#3b82f6", itemColors }],
      maxValue: Math.max(1, ...conv),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmtPct1(v),
    });
    drawGroupedBarChart(el.ovAddRate, {
      labels,
      series: [{ name: "添加率", values: addRate, color: "#3b82f6", itemColors }],
      maxValue: Math.max(1, ...addRate),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmtPct1(v),
    });

    if (el.overviewMeta) {
      const totalLeads = agg.reduce((s, x) => s + asNum(x.leads), 0);
      const totalCost = agg.reduce((s, x) => s + asNum(x.cost), 0);
      const totalAdds = agg.reduce((s, x) => s + asNum(x.adds), 0);
      const totalOrders = agg.reduce((s, x) => s + asNum(x.l1Orders), 0);
      const totalValue = agg.reduce((s, x) => s + asNum(x.l1Value), 0);
      el.overviewMeta.textContent = `获客=${fmtInt(totalLeads)}｜添加=${fmtInt(totalAdds)}｜单量=${fmtInt(totalOrders)}｜产值=${fmtInt(totalValue)}｜成本=${fmtInt(totalCost)}`;
    }
  }

  function renderPlatformDetail(filteredRows, denomRowsAllChannels) {
    const plat = state.platform;
    if (!plat || plat === "__NONE__") {
      setEmptyHint(el.rightEmptyHint, "请选择左侧一个投放平台");
      el.platformMeta.innerHTML = "";
      el.activePlatformLabel.textContent = "";
      return;
    }
    setEmptyHint(el.rightEmptyHint, "");
    el.activePlatformLabel.textContent = String(plat);

    const rowsPlat = filteredRows.filter((r) => String(r.platform) === String(plat));
    if (!rowsPlat.length) {
      setEmptyHint(el.rightEmptyHint, "当前筛选范围下该平台无数据");
      el.platformMeta.innerHTML = "";
      return;
    }

    const denomMap = new Map();
    for (const r of denomRowsAllChannels) {
      const k = String(r.project) + "|" + String(asNum(r.periodNum));
      if (!denomMap.has(k)) denomMap.set(k, 0);
      denomMap.set(k, denomMap.get(k) + asNum(r.leads));
    }

    const agg = buildAggByProjectPeriod(rowsPlat).sort((a, b) => b.roi - a.roi || b.leads - a.leads);
    const labels = agg.map((x) => shortProjectName(x.project) + String(asNum(x.periodNum)) + "期");
    const itemColors = agg.map((x) => projectColor(x.project));
    const roi = agg.map((x) => x.roi);
    const cac = agg.map((x) => x.cac);
    const addValue = agg.map((x) => x.addValue);
    const conv = agg.map((x) => x.conv);
    const addRate = agg.map((x) => x.addRate);
    const share = agg.map((x) => {
      const k = String(x.project) + "|" + String(asNum(x.periodNum));
      const denom = asNum(denomMap.get(k));
      return denom ? (asNum(x.leads) / denom) * 100 : 0;
    });

    drawGroupedBarChart(el.plROI, { labels, series: [{ name: "ROI", values: roi, color: "#3b82f6", itemColors }], maxValue: Math.max(1, ...roi), tickFormat: (v) => fmt2(v), valueLabel: (v) => fmt2(v) });
    drawGroupedBarChart(el.plAddValue, { labels, series: [{ name: "添加产值", values: addValue, color: "#3b82f6", itemColors }], maxValue: Math.max(1, ...addValue), tickFormat: (v) => fmt2(v), valueLabel: (v) => fmt2(v) });
    drawGroupedBarChart(el.plCAC, { labels, series: [{ name: "CAC", values: cac, color: "#3b82f6", itemColors }], maxValue: Math.max(1, ...cac), tickFormat: (v) => fmt2(v), valueLabel: (v) => fmt2(v) });
    drawGroupedBarChart(el.plLeadShare, { labels, series: [{ name: "获客占比", values: share, color: "#3b82f6", itemColors }], maxValue: Math.max(1, ...share), tickFormat: (v) => fmt2(v), valueLabel: (v) => fmtPct1(v) });
    drawGroupedBarChart(el.plConv, { labels, series: [{ name: "转率", values: conv, color: "#3b82f6", itemColors }], maxValue: Math.max(1, ...conv), tickFormat: (v) => fmt2(v), valueLabel: (v) => fmtPct1(v) });
    drawGroupedBarChart(el.plAddRate, { labels, series: [{ name: "添加率", values: addRate, color: "#3b82f6", itemColors }], maxValue: Math.max(1, ...addRate), tickFormat: (v) => fmt2(v), valueLabel: (v) => fmtPct1(v) });

    const sum = agg.reduce(
      (s, x) => {
        s.cost += asNum(x.cost);
        s.leads += asNum(x.leads);
        s.adds += asNum(x.adds);
        s.l1Orders += asNum(x.l1Orders);
        s.l1Value += asNum(x.l1Value);
        s.platformCnt += asNum(x.platformCnt || 0);
        return s;
      },
      { cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0, platformCnt: 0 }
    );
    const roiTotal = safeDiv(sum.l1Value, sum.cost);
    const convTotal = safeDiv(sum.l1Orders, sum.adds) * 100;
    const cacTotal = safeDiv(sum.cost, sum.leads);
    const addValueTotal = safeDiv(sum.l1Value, sum.adds);
    const addRateTotal = safeDiv(sum.adds, sum.leads) * 100;
    const kv = [
      ["项目数", fmtInt(uniq(agg.map((x) => x.project)).length)],
      ["营期数", fmtInt(agg.length)],
      ["获客量", fmtInt(sum.leads)],
      ["添加数", fmtInt(sum.adds)],
      ["单量", fmtInt(sum.l1Orders)],
      ["产值", fmtInt(sum.l1Value)],
      ["ROI", fmt2(roiTotal)],
      ["转率", fmtPct1(convTotal)],
      ["获客成本", fmt2(cacTotal)],
      ["添加产值", fmt2(addValueTotal)],
      ["添加率", fmtPct1(addRateTotal)],
    ];
    el.platformMeta.innerHTML = kv.map(([k, v]) => `<div class="k">${k}</div><div class="v">${v}</div>`).join("");
  }

  function mark(val, cls) {
    if (!cls) return String(val);
    return `<span class="mark ${cls}">${String(val)}</span>`;
  }

  function markZero(val, x) {
    const v = asNum(x);
    if (!v) return `<span class="mark zero">${String(val)}</span>`;
    return String(val);
  }

  function renderStructure(allRowsAllChannels) {
    if (!el.structTableOverall) return;
    const byProject = new Map();
    for (const r of allRowsAllChannels) {
      const p = String(r.project);
      if (!byProject.has(p)) byProject.set(p, { project: p, overall: { periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 }, standard: { periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 }, nonstandard: { periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 } });
      const rec = byProject.get(p);
      const key = String(asNum(r.periodNum));
      rec.overall.periods.add(key);
      rec.overall.cost += asNum(r.cost);
      rec.overall.leads += asNum(r.leads);
      rec.overall.adds += asNum(r.adds);
      rec.overall.l1Orders += asNum(r.l1Orders);
      rec.overall.l1Value += asNum(r.l1Value);
      if (r.channelBucket === "标准渠道") {
        rec.standard.periods.add(key);
        rec.standard.cost += asNum(r.cost);
        rec.standard.leads += asNum(r.leads);
        rec.standard.adds += asNum(r.adds);
        rec.standard.l1Orders += asNum(r.l1Orders);
        rec.standard.l1Value += asNum(r.l1Value);
      } else if (r.channelBucket === "非标渠道") {
        rec.nonstandard.periods.add(key);
        rec.nonstandard.cost += asNum(r.cost);
        rec.nonstandard.leads += asNum(r.leads);
        rec.nonstandard.adds += asNum(r.adds);
        rec.nonstandard.l1Orders += asNum(r.l1Orders);
        rec.nonstandard.l1Value += asNum(r.l1Value);
      }
    }

    const projects = Array.from(byProject.values());
    let totalLeads = 0;
    for (const it of projects) totalLeads += asNum(it.overall.leads);
    let totalAdds = 0;
    for (const it of projects) totalAdds += asNum(it.overall.adds);
    function enrich(v) {
      const roi = safeDiv(v.l1Value, v.cost);
      const cac = safeDiv(v.cost, v.leads);
      const addValue = safeDiv(v.l1Value, v.adds);
      const conv = safeDiv(v.l1Orders, v.adds) * 100;
      const addRate = safeDiv(v.adds, v.leads) * 100;
      const share = totalLeads ? (asNum(v.leads) / totalLeads) * 100 : 0;
      const addShare = totalAdds ? (asNum(v.adds) / totalAdds) * 100 : 0;
      return { ...v, periodCnt: v.periods.size, roi, cac, addValue, conv, addRate, share, addShare };
    }

    function buildRows(mode) {
      const list = projects.map((it) => {
        const v = mode === "overall" ? enrich(it.overall) : mode === "standard" ? enrich(it.standard) : enrich(it.nonstandard);
        return { project: it.project, ...v };
      });
      return list;
    }

    function extremaCls(arr, key, higherBetter) {
      let max = -Infinity, min = Infinity;
      for (const it of arr) {
        const v = asNum(it[key]);
        max = Math.max(max, v);
        min = Math.min(min, v);
      }
      const EPS = 1e-9;
      return (it) => {
        const v = asNum(it[key]);
        if (Math.abs(max - min) < EPS) return "";
        if (Math.abs(v - max) < EPS) return higherBetter ? "hi" : "lo";
        if (Math.abs(v - min) < EPS) return higherBetter ? "lo" : "hi";
        return "";
      };
    }

    function renderTable(targetEl, mode) {
      const list = buildRows(mode);
      list.sort((a, b) => asNum(b.share) - asNum(a.share) || asNum(b.leads) - asNum(a.leads));
      const clsROI = extremaCls(list, "roi", true);
      const clsCAC = extremaCls(list, "cac", false);
      const clsAddValue = extremaCls(list, "addValue", true);
      const clsConv = extremaCls(list, "conv", true);
      const clsAddRate = extremaCls(list, "addRate", true);

      const head = [
        `<div class="tHead">`,
        `<div class="tCell">项目</div>`,
        `<div class="tCell tNum">营期数</div>`,
        `<div class="tCell tNum">ROI</div>`,
        `<div class="tCell tNum">获客成本</div>`,
        `<div class="tCell tNum">添加产值</div>`,
        `<div class="tCell tNum">转率</div>`,
        `<div class="tCell tNum">总获客量</div>`,
        `<div class="tCell tNum">获客占比</div>`,
        `<div class="tCell tNum">总添加数</div>`,
        `<div class="tCell tNum">添加占比</div>`,
        `<div class="tCell tNum">添加率</div>`,
        `</div>`,
      ].join("");

      const rowsHtml = list
        .map((it) => {
          return [
            `<div class="tRow">`,
            `<div class="tCell"><button class="linkBtn" type="button" data-struct-project="${String(it.project)}" data-struct-mode="${mode}">${String(it.project).replace(/英语/g, "")}</button></div>`,
            `<div class="tCell tNum">${fmtInt(it.periodCnt)}</div>`,
            `<div class="tCell tNum">${mark(fmt2(it.roi), clsROI(it))}</div>`,
            `<div class="tCell tNum">${mark(fmt2(it.cac), clsCAC(it))}</div>`,
            `<div class="tCell tNum">${mark(fmt2(it.addValue), clsAddValue(it))}</div>`,
            `<div class="tCell tNum">${mark(fmtPct1(it.conv), clsConv(it))}</div>`,
            `<div class="tCell tNum">${fmtInt(it.leads)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.share)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.adds)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.addShare)}</div>`,
            `<div class="tCell tNum">${mark(fmtPct1(it.addRate), clsAddRate(it))}</div>`,
            `</div>`,
          ].join("");
        })
        .join("");

      targetEl.innerHTML = head + rowsHtml;
    }

    renderTable(el.structTableOverall, "overall");
    renderTable(el.structTableStd, "standard");
    renderTable(el.structTableNon, "nonstandard");

    const projNames = projects.map((x) => x.project);
    const stdShares = [];
    const nonShares = [];
    for (const it of projects) {
      const total = asNum(it.overall.adds);
      const std = asNum(it.standard.adds);
      const non = asNum(it.nonstandard.adds);
      const stdPct = total ? (std / total) * 100 : 0;
      const nonPct = total ? (non / total) * 100 : 0;
      stdShares.push(stdPct);
      nonShares.push(nonPct);
    }
    drawStackedBarChart(el.structShare, {
      labels: projNames.map((x) => String(x).replace(/英语/g, "")),
      stacks: [
        { name: "标准", values: stdShares, color: "#3b82f6" },
        { name: "非标", values: nonShares, color: "#f97316" },
      ],
      valueLabel: (v) => fmtPct1(v),
      tickFormat: (v) => fmt2(v),
    });

    const stdList = projects.map((it) => enrich(it.standard));
    const nonList = projects.map((it) => enrich(it.nonstandard));
    const labels = projNames.map((x) => String(x).replace(/英语/g, ""));
    const roiStd = stdList.map((x) => x.roi);
    const roiNon = nonList.map((x) => x.roi);
    const convStd = stdList.map((x) => x.conv);
    const convNon = nonList.map((x) => x.conv);
    const cacStd = stdList.map((x) => x.cac);
    const cacNon = nonList.map((x) => x.cac);
    const addValueStd = stdList.map((x) => x.addValue);
    const addValueNon = nonList.map((x) => x.addValue);
    drawGroupedBarChart(el.structROI, {
      labels,
      series: [
        { name: "标准", values: roiStd, color: "#3b82f6" },
        { name: "非标", values: roiNon, color: "#f97316" },
      ],
      maxValue: Math.max(1, ...roiStd, ...roiNon),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmt2(v),
    });
    drawGroupedBarChart(el.structConv, {
      labels,
      series: [
        { name: "标准", values: convStd, color: "#3b82f6" },
        { name: "非标", values: convNon, color: "#f97316" },
      ],
      maxValue: Math.max(1, ...convStd, ...convNon),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmtPct1(v),
    });
    drawGroupedBarChart(el.structCAC, {
      labels,
      series: [
        { name: "标准", values: cacStd, color: "#3b82f6" },
        { name: "非标", values: cacNon, color: "#f97316" },
      ],
      maxValue: Math.max(1, ...cacStd, ...cacNon),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmt2(v),
    });
    drawGroupedBarChart(el.structAddValue, {
      labels,
      series: [
        { name: "标准", values: addValueStd, color: "#3b82f6" },
        { name: "非标", values: addValueNon, color: "#f97316" },
      ],
      maxValue: Math.max(1, ...addValueStd, ...addValueNon),
      tickFormat: (v) => fmt2(v),
      valueLabel: (v) => fmt2(v),
    });

    for (const node of document.querySelectorAll("[data-struct-project]")) {
      node.onclick = () => {
        const p = node.getAttribute("data-struct-project") || "";
        const m = node.getAttribute("data-struct-mode") || "overall";
        state.structDrillProject = p;
        state.structDrillMode = m;
        state.structCompareMode = "";
        renderStructure(applyFiltersAllChannels());
      };
    }
    for (const node of document.querySelectorAll("[data-struct-compare-mode]")) {
      node.onclick = () => {
        state.structCompareMode = node.getAttribute("data-struct-compare-mode") || "";
        state.structDrillProject = "";
        renderStructure(applyFiltersAllChannels());
      };
    }

    if (el.structDrillClose) {
      el.structDrillClose.onclick = () => {
        state.structDrillProject = "";
        if (el.structDrillCard) el.structDrillCard.style.display = "none";
      };
    }
    if (el.structCompareClose) {
      el.structCompareClose.onclick = () => {
        state.structCompareMode = "";
        if (el.structCompareCard) el.structCompareCard.style.display = "none";
      };
    }

    function drillRows(project, mode) {
      const bucket = mode === "standard" ? "标准渠道" : mode === "nonstandard" ? "非标渠道" : null;
      const base = allRowsAllChannels.filter((r) => String(r.project) === String(project));
      const denomOverall = base.reduce((s, r) => s + asNum(r.leads), 0);
      const denomAddsOverall = base.reduce((s, r) => s + asNum(r.adds), 0);
      const use = bucket ? base.filter((r) => r.channelBucket === bucket) : base;
      const m = new Map();
      for (const r of use) {
        const k = String(r.platform);
        if (!m.has(k)) m.set(k, { platform: k, periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 });
        const v = m.get(k);
        v.periods.add(String(asNum(r.periodNum)));
        v.cost += asNum(r.cost);
        v.leads += asNum(r.leads);
        v.adds += asNum(r.adds);
        v.l1Orders += asNum(r.l1Orders);
        v.l1Value += asNum(r.l1Value);
      }
      const list = Array.from(m.values()).map((it) => {
        const roi = safeDiv(it.l1Value, it.cost);
        const cac = safeDiv(it.cost, it.leads);
        const addValue = safeDiv(it.l1Value, it.adds);
        const conv = safeDiv(it.l1Orders, it.adds) * 100;
        const share = denomOverall ? (asNum(it.leads) / denomOverall) * 100 : 0;
        const addShare = denomAddsOverall ? (asNum(it.adds) / denomAddsOverall) * 100 : 0;
        const addRate = safeDiv(it.adds, it.leads) * 100;
        return { ...it, periodCnt: it.periods.size, roi, cac, addValue, conv, share, addShare, addRate };
      });
      list.sort((a, b) => asNum(b.addShare) - asNum(a.addShare) || asNum(b.adds) - asNum(a.adds) || asNum(b.roi) - asNum(a.roi));
      return { list, denomOverall };
    }

    function renderDrillTable(project, mode) {
      if (!project) {
        if (el.structDrillCard) el.structDrillCard.style.display = "none";
        return;
      }
      if (el.structDrillCard) el.structDrillCard.style.display = "block";
      const label = mode === "standard" ? "标准" : mode === "nonstandard" ? "非标" : "整体";
      if (el.structDrillTitle) el.structDrillTitle.textContent = `${project.replace(/英语/g, "")}｜${label}｜投放平台明细`;
      const { list } = drillRows(project, mode);
      const gridCols = `grid-template-columns: 120px 64px 78px 92px 92px 78px 92px 88px 92px 78px;`;
      const head = [
        `<div class="tHead" style="${gridCols}">`,
        `<div class="tCell">投放平台</div>`,
        `<div class="tCell tNum">营期数</div>`,
        `<div class="tCell tNum">ROI</div>`,
        `<div class="tCell tNum">获客成本</div>`,
        `<div class="tCell tNum">添加产值</div>`,
        `<div class="tCell tNum">转率</div>`,
        `<div class="tCell tNum">总获客量</div>`,
        `<div class="tCell tNum">添加占比</div>`,
        `<div class="tCell tNum">总添加数</div>`,
        `<div class="tCell tNum">添加率</div>`,
        `</div>`,
      ].join("");
      const rowsHtml = list
        .map((it) => {
          const addRateCls = asNum(it.addRate) < 60 ? "lo" : "";
          return [
            `<div class="tRow" style="${gridCols}">`,
            `<div class="tCell">${String(it.platform)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.periodCnt)}</div>`,
            `<div class="tCell tNum">${fmt2(it.roi)}</div>`,
            `<div class="tCell tNum">${fmt2(it.cac)}</div>`,
            `<div class="tCell tNum">${fmt2(it.addValue)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.conv)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.leads)}</div>`,
            `<div class="tCell tNum">${markZero(fmtPct1(it.addShare), it.addShare)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.adds)}</div>`,
            `<div class="tCell tNum">${mark(fmtPct1(it.addRate), addRateCls)}</div>`,
            `</div>`,
          ].join("");
        })
        .join("");
      el.structDrillTable.innerHTML = head + rowsHtml;
    }

    function renderCompareTable(mode) {
      if (!mode) {
        if (el.structCompareCard) el.structCompareCard.style.display = "none";
        return;
      }
      if (el.structCompareCard) el.structCompareCard.style.display = "block";
      const label = mode === "standard" ? "标准" : mode === "nonstandard" ? "非标" : "整体";
      const projectsSorted = projects.map((x) => x.project).sort((a, b) => String(a).localeCompare(String(b), "zh-CN"));
      if (projectsSorted.length < 2) return;
      const pa = projectsSorted[0];
      const pb = projectsSorted[1];
      if (el.structCompareTitle) el.structCompareTitle.textContent = `${pa.replace(/英语/g, "")} & ${pb.replace(/英语/g, "")}｜投放平台明细｜${label}`;
      const a = drillRows(pa, mode).list;
      const b = drillRows(pb, mode).list;
      const mapA = new Map(a.map((x) => [x.platform, x]));
      const mapB = new Map(b.map((x) => [x.platform, x]));
      const platforms = uniq([...Array.from(mapA.keys()), ...Array.from(mapB.keys())]).sort((x, y) => {
        const ax = asNum((mapA.get(x) || {}).leads) + asNum((mapB.get(x) || {}).leads);
        const ay = asNum((mapA.get(y) || {}).leads) + asNum((mapB.get(y) || {}).leads);
        return ay - ax || String(x).localeCompare(String(y), "zh-CN");
      });

      const EPS = 1e-9;
      const head1 = [
        `<div class="tHeadCmp1">`,
        `<div class="tCell">投放平台</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">营期数</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">ROI</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">获客成本</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">添加产值</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">转率</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">总获客量</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">添加占比</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">总添加数</div>`,
        `<div class="tCell tNum" style="grid-column: span 2;">添加率</div>`,
        `</div>`,
      ].join("");

      const head2 = [
        `<div class="tHeadCmp2">`,
        `<div class="tCell"></div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pa.replace(/英语/g, "")}</div>`,
        `<div class="tCell tNum">${pb.replace(/英语/g, "")}</div>`,
        `</div>`,
      ].join("");

      const rowsCmp = platforms
        .map((platform) => {
          const aa = mapA.get(platform) || { periodCnt: 0, roi: 0, cac: 0, addValue: 0, conv: 0, leads: 0, share: 0, addShare: 0, adds: 0, addRate: 0 };
          const bb = mapB.get(platform) || { periodCnt: 0, roi: 0, cac: 0, addValue: 0, conv: 0, leads: 0, share: 0, addShare: 0, adds: 0, addRate: 0 };
          const roiA = asNum(aa.roi);
          const roiB = asNum(bb.roi);
          const convA = asNum(aa.conv);
          const convB = asNum(bb.conv);
          const roiACls = roiA > roiB + EPS ? "hi" : roiA + EPS < roiB ? "lo" : "";
          const roiBCls = roiB > roiA + EPS ? "hi" : roiB + EPS < roiA ? "lo" : "";
          const convACls = convA > convB + EPS ? "hi" : convA + EPS < convB ? "lo" : "";
          const convBCls = convB > convA + EPS ? "hi" : convB + EPS < convA ? "lo" : "";
          return [
            `<div class="tRowCmp">`,
            `<div class="tCell">${String(platform)}</div>`,
            `<div class="tCell tNum">${fmtInt(aa.periodCnt)}</div>`,
            `<div class="tCell tNum">${fmtInt(bb.periodCnt)}</div>`,
            `<div class="tCell tNum">${mark(fmt2(aa.roi), roiACls)}</div>`,
            `<div class="tCell tNum">${mark(fmt2(bb.roi), roiBCls)}</div>`,
            `<div class="tCell tNum">${fmt2(aa.cac)}</div>`,
            `<div class="tCell tNum">${fmt2(bb.cac)}</div>`,
            `<div class="tCell tNum">${fmt2(aa.addValue)}</div>`,
            `<div class="tCell tNum">${fmt2(bb.addValue)}</div>`,
            `<div class="tCell tNum">${mark(fmtPct1(aa.conv), convACls)}</div>`,
            `<div class="tCell tNum">${mark(fmtPct1(bb.conv), convBCls)}</div>`,
            `<div class="tCell tNum">${fmtInt(aa.leads)}</div>`,
            `<div class="tCell tNum">${fmtInt(bb.leads)}</div>`,
            `<div class="tCell tNum">${markZero(fmtPct1(aa.addShare), aa.addShare)}</div>`,
            `<div class="tCell tNum">${markZero(fmtPct1(bb.addShare), bb.addShare)}</div>`,
            `<div class="tCell tNum">${fmtInt(aa.adds)}</div>`,
            `<div class="tCell tNum">${fmtInt(bb.adds)}</div>`,
            `<div class="tCell tNum">${fmtPct1(aa.addRate)}</div>`,
            `<div class="tCell tNum">${fmtPct1(bb.addRate)}</div>`,
            `</div>`,
          ].join("");
        })
        .join("");

      el.structCompareTable.innerHTML = head1 + head2 + rowsCmp;
    }

    renderDrillTable(state.structDrillProject, state.structDrillMode);
    renderCompareTable(state.structCompareMode);
  }

  function renderOverviewTab(allRowsAllChannels) {
    if (!el.overviewBigTable || !el.overviewPlatTable) return;

    const big = new Map();
    const plat = new Map();
    const l2 = new Map();
    let totalLeads = 0;
    let totalAdds = 0;
    const bucket = String(state.overviewBucket || "标准渠道");
    const bucketLabel = bucket === "__ALL__" ? "整体" : bucket === "标准渠道" ? "标准" : bucket === "非标渠道" ? "非标" : bucket;
    if (el.ovSegAll) el.ovSegAll.classList.toggle("active", bucket === "__ALL__");
    if (el.ovSegStd) el.ovSegStd.classList.toggle("active", bucket === "标准渠道");
    if (el.ovSegNon) el.ovSegNon.classList.toggle("active", bucket === "非标渠道");
    for (const r of allRowsAllChannels) totalLeads += asNum(r.leads);
    for (const r of allRowsAllChannels) totalAdds += asNum(r.adds);

    function dayKey(r) {
      return String(r.channelBucket) + "|" + String(asNum(r.year)) + "|" + String(asNum(r.month)) + "|" + String(r.project) + "|" + String(asNum(r.periodNum)) + "|" + String(r.platform);
    }

    for (const r of allRowsAllChannels) {
      const cb = String(r.channelBucket);
      const dk = dayKey(r);
      const d = dayAgg[dk] || [0, 0, 0, 0];

      if (!big.has(cb)) big.set(cb, { channelBucket: cb, periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0, day3: 0, day4: 0, day5: 0, day67: 0 });
      const bv = big.get(cb);
      bv.periods.add(String(r.project) + "|" + String(asNum(r.periodNum)));
      bv.cost += asNum(r.cost);
      bv.leads += asNum(r.leads);
      bv.adds += asNum(r.adds);
      bv.l1Orders += asNum(r.l1Orders);
      bv.l1Value += asNum(r.l1Value);
      bv.day3 += asNum(d[0]);
      bv.day4 += asNum(d[1]);
      bv.day5 += asNum(d[2]);
      bv.day67 += asNum(d[3]);

      if (bucket !== "__ALL__" && cb !== bucket) continue;
      const pk = String(r.platform);
      const l2Key = String(r.level2 || level2OfPlatform(pk) || "未匹配");
      if (!plat.has(pk))
        plat.set(pk, { platform: pk, level2: l2Key, periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0, day3: 0, day4: 0, day5: 0, day67: 0 });
      const pv = plat.get(pk);
      pv.periods.add(String(r.project) + "|" + String(asNum(r.periodNum)));
      pv.cost += asNum(r.cost);
      pv.leads += asNum(r.leads);
      pv.adds += asNum(r.adds);
      pv.l1Orders += asNum(r.l1Orders);
      pv.l1Value += asNum(r.l1Value);
      pv.day3 += asNum(d[0]);
      pv.day4 += asNum(d[1]);
      pv.day5 += asNum(d[2]);
      pv.day67 += asNum(d[3]);

      if (!l2.has(l2Key))
        l2.set(l2Key, { level2: l2Key, periods: new Set(), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0, day3: 0, day4: 0, day5: 0, day67: 0 });
      const lv = l2.get(l2Key);
      lv.periods.add(String(r.project) + "|" + String(asNum(r.periodNum)));
      lv.cost += asNum(r.cost);
      lv.leads += asNum(r.leads);
      lv.adds += asNum(r.adds);
      lv.l1Orders += asNum(r.l1Orders);
      lv.l1Value += asNum(r.l1Value);
      lv.day3 += asNum(d[0]);
      lv.day4 += asNum(d[1]);
      lv.day5 += asNum(d[2]);
      lv.day67 += asNum(d[3]);
    }

    function enrich(it) {
      const roi = safeDiv(it.l1Value, it.cost);
      const conv = safeDiv(it.l1Orders, it.adds) * 100;
      const cac = safeDiv(it.cost, it.leads);
      const addCost = safeDiv(it.cost, it.adds);
      const addValue = safeDiv(it.l1Value, it.adds);
      const share = totalLeads ? (asNum(it.leads) / totalLeads) * 100 : 0;
      const addShare = totalAdds ? (asNum(it.adds) / totalAdds) * 100 : 0;
      const addRate = safeDiv(it.adds, it.leads) * 100;
      const d3Share = safeDiv(it.day3, it.l1Orders) * 100;
      const d4Share = safeDiv(it.day4, it.l1Orders) * 100;
      const d5Share = safeDiv(it.day5, it.l1Orders) * 100;
      const d67Share = safeDiv(it.day67, it.l1Orders) * 100;
      const d3Conv = safeDiv(it.day3, it.adds) * 100;
      const d4Conv = safeDiv(it.day4, it.adds) * 100;
      const d5Conv = safeDiv(it.day5, it.adds) * 100;
      const d67Conv = safeDiv(it.day67, it.adds) * 100;
      return { ...it, periodCnt: it.periods.size, roi, conv, cac, addCost, addValue, share, addShare, addRate, d3Share, d4Share, d5Share, d67Share, d3Conv, d4Conv, d5Conv, d67Conv };
    }

    const listBig = Array.from(big.values()).map(enrich).sort((a, b) => b.addShare - a.addShare || b.adds - a.adds || b.roi - a.roi || String(a.channelBucket).localeCompare(String(b.channelBucket), "zh-CN"));
    const sortKey = state.overviewPlatSortKey || "share";
    const dir = state.overviewPlatSortDir === "asc" ? 1 : -1;
    const listPlatRaw = Array.from(plat.values())
      .map(enrich)
      .sort(
        (a, b) =>
          (asNum(a[sortKey]) - asNum(b[sortKey])) * dir ||
          b.share - a.share ||
          b.leads - a.leads ||
          String(a.platform).localeCompare(String(b.platform), "zh-CN")
      );
    const listPlat = state.overviewL2 && state.overviewL2 !== "__ALL__" ? listPlatRaw.filter((x) => String(x.level2 || "未匹配") === String(state.overviewL2)) : listPlatRaw;
    const listL2 = Array.from(l2.values()).map(enrich).sort((a, b) => b.addShare - a.addShare || b.adds - a.adds || b.roi - a.roi || b.leads - a.leads || String(a.level2).localeCompare(String(b.level2), "zh-CN"));

    const sortMark = (k) => (sortKey === k ? (dir === -1 ? " ↓" : " ↑") : "");
    const bigColumns = ["渠道类型", "营期数", "ROI", "转率", "获客成本", "添加成本", "添加产值", "总获客量", "总添加数", "总单量", "获客占比", "添加占比", "添加率", "D3出单占比", "D4出单占比", "D5出单占比", "D6-7出单占比", "D3转率", "D4转率", "D5转率", "D6-7转率"];
    const l2Columns = ["二级类型", "营期数", "ROI", "转率", "获客成本", "添加成本", "添加产值", "总获客量", "总添加数", "总单量", "获客占比", "添加占比", "添加率", "D3出单占比", "D4出单占比", "D5出单占比", "D6-7出单占比", "D3转率", "D4转率", "D5转率", "D6-7转率"];
    const platColumns = ["投放平台", "营期数", "ROI", "转率", "获客成本", "添加成本", "添加产值", "总获客量", "总添加数", "总单量", "获客占比", "添加占比", "添加率", "D3出单占比", "D4出单占比", "D5出单占比", "D6-7出单占比", "D3转率", "D4转率", "D5转率", "D6-7转率"];

    const bigRowsData = listBig.map((it) => {
      const cb = it.channelBucket === "标准渠道" ? "标准" : it.channelBucket === "非标渠道" ? "非标" : it.channelBucket;
      return [cb, fmtInt(it.periodCnt), fmt2(it.roi), fmtPct1(it.conv), fmt2(it.cac), fmt2(it.addCost), fmt2(it.addValue), fmtInt(it.leads), fmtInt(it.adds), fmtInt(it.l1Orders), fmtPct1(it.share), fmtPct1(it.addShare), fmtPct1(it.addRate), fmtPct1(it.d3Share), fmtPct1(it.d4Share), fmtPct1(it.d5Share), fmtPct1(it.d67Share), fmtPct1(it.d3Conv), fmtPct1(it.d4Conv), fmtPct1(it.d5Conv), fmtPct1(it.d67Conv)];
    });
    const l2RowsData = listL2.map((it) => [String(it.level2 || "未匹配"), fmtInt(it.periodCnt), fmt2(it.roi), fmtPct1(it.conv), fmt2(it.cac), fmt2(it.addCost), fmt2(it.addValue), fmtInt(it.leads), fmtInt(it.adds), fmtInt(it.l1Orders), fmtPct1(it.share), fmtPct1(it.addShare), fmtPct1(it.addRate), fmtPct1(it.d3Share), fmtPct1(it.d4Share), fmtPct1(it.d5Share), fmtPct1(it.d67Share), fmtPct1(it.d3Conv), fmtPct1(it.d4Conv), fmtPct1(it.d5Conv), fmtPct1(it.d67Conv)]);
    const platRowsData = listPlat.map((it) => [String(it.platform), fmtInt(it.periodCnt), fmt2(it.roi), fmtPct1(it.conv), fmt2(it.cac), fmt2(it.addCost), fmt2(it.addValue), fmtInt(it.leads), fmtInt(it.adds), fmtInt(it.l1Orders), fmtPct1(it.share), fmtPct1(it.addShare), fmtPct1(it.addRate), fmtPct1(it.d3Share), fmtPct1(it.d4Share), fmtPct1(it.d5Share), fmtPct1(it.d67Share), fmtPct1(it.d3Conv), fmtPct1(it.d4Conv), fmtPct1(it.d5Conv), fmtPct1(it.d67Conv)]);

    const headBig = [
      `<div class="tHeadOvBig">`,
      `<div class="tCell">渠道类型</div>`,
      `<div class="tCell tNum">营期数</div>`,
      `<div class="tCell tNum">ROI</div>`,
      `<div class="tCell tNum">转率</div>`,
      `<div class="tCell tNum">获客成本</div>`,
      `<div class="tCell tNum">添加成本</div>`,
      `<div class="tCell tNum">添加产值</div>`,
      `<div class="tCell tNum">总获客量</div>`,
      `<div class="tCell tNum">总添加数</div>`,
      `<div class="tCell tNum">总单量</div>`,
      `<div class="tCell tNum">获客占比</div>`,
      `<div class="tCell tNum">添加占比</div>`,
      `<div class="tCell tNum">添加率</div>`,
      `<div class="tCell tNum">D3出单占比</div>`,
      `<div class="tCell tNum">D4出单占比</div>`,
      `<div class="tCell tNum">D5出单占比</div>`,
      `<div class="tCell tNum">D6-7出单占比</div>`,
      `<div class="tCell tNum">D3转率</div>`,
      `<div class="tCell tNum">D4转率</div>`,
      `<div class="tCell tNum">D5转率</div>`,
      `<div class="tCell tNum">D6-7转率</div>`,
      `</div>`,
    ].join("");

    const rowsBig = listBig
      .map((it) => {
        const cb = it.channelBucket === "标准渠道" ? "标准" : it.channelBucket === "非标渠道" ? "非标" : it.channelBucket;
        return [
          `<div class="tRowOvBig">`,
          `<div class="tCell">${cb}</div>`,
          `<div class="tCell tNum">${fmtInt(it.periodCnt)}</div>`,
          `<div class="tCell tNum">${fmt2(it.roi)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.conv)}</div>`,
          `<div class="tCell tNum">${fmt2(it.cac)}</div>`,
          `<div class="tCell tNum">${fmt2(it.addCost)}</div>`,
          `<div class="tCell tNum">${fmt2(it.addValue)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.leads)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.adds)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.l1Orders)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.addShare)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.addRate)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d3Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d4Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d5Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d67Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d3Conv)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d4Conv)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d5Conv)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d67Conv)}</div>`,
          `</div>`,
        ].join("");
      })
      .join("");

    const headPlat = [
      `<div class="tHeadOvPlat">`,
      `<div class="tCell">投放平台</div>`,
      `<div class="tCell tNum">营期数</div>`,
      `<div class="tCell tNum tSort" data-ov-plat-sort="roi">ROI${sortMark("roi")}</div>`,
      `<div class="tCell tNum tSort" data-ov-plat-sort="conv">转率${sortMark("conv")}</div>`,
      `<div class="tCell tNum">获客成本</div>`,
      `<div class="tCell tNum">添加成本</div>`,
      `<div class="tCell tNum">添加产值</div>`,
      `<div class="tCell tNum">总获客量</div>`,
      `<div class="tCell tNum">总添加数</div>`,
      `<div class="tCell tNum">总单量</div>`,
      `<div class="tCell tNum tSort" data-ov-plat-sort="share">获客占比${sortMark("share")}</div>`,
      `<div class="tCell tNum">添加占比</div>`,
      `<div class="tCell tNum">添加率</div>`,
      `<div class="tCell tNum">D3出单占比</div>`,
      `<div class="tCell tNum">D4出单占比</div>`,
      `<div class="tCell tNum">D5出单占比</div>`,
      `<div class="tCell tNum">D6-7出单占比</div>`,
      `<div class="tCell tNum">D3转率</div>`,
      `<div class="tCell tNum">D4转率</div>`,
      `<div class="tCell tNum">D5转率</div>`,
      `<div class="tCell tNum">D6-7转率</div>`,
      `</div>`,
    ].join("");

    const rowsPlat = listPlat
      .map((it) => {
        return [
          `<div class="tRowOvPlat">`,
          `<div class="tCell">${String(it.platform)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.periodCnt)}</div>`,
          `<div class="tCell tNum">${fmt2(it.roi)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.conv)}</div>`,
          `<div class="tCell tNum">${fmt2(it.cac)}</div>`,
          `<div class="tCell tNum">${fmt2(it.addCost)}</div>`,
          `<div class="tCell tNum">${fmt2(it.addValue)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.leads)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.adds)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.l1Orders)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.addShare)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.addRate)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d3Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d4Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d5Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d67Share)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d3Conv)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d4Conv)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d5Conv)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.d67Conv)}</div>`,
          `</div>`,
        ].join("");
      })
      .join("");

    el.overviewBigTable.innerHTML = headBig + rowsBig;
    el.overviewPlatTable.innerHTML = headPlat + rowsPlat;

    if (el.overviewL2Hint) {
      const picked = state.overviewL2 && state.overviewL2 !== "__ALL__" ? `已选：${String(state.overviewL2)}` : "未筛选";
      el.overviewL2Hint.textContent = `${bucketLabel}｜点击行筛选投放平台｜${picked}`;
    }
    if (el.overviewPlatL2Hint) {
      el.overviewPlatL2Hint.textContent =
        state.overviewL2 && state.overviewL2 !== "__ALL__" ? `当前范围：${bucketLabel}｜当前二级类型：${String(state.overviewL2)}` : `当前范围：${bucketLabel}｜当前二级类型：全部`;
    }
    if (el.overviewPlatL2Clear) el.overviewPlatL2Clear.disabled = !(state.overviewL2 && state.overviewL2 !== "__ALL__");

    if (el.overviewL2Table) {
      const headL2 = [
        `<div class="tHeadOvL2">`,
        `<div class="tCell">二级类型</div>`,
        `<div class="tCell tNum">营期数</div>`,
        `<div class="tCell tNum">ROI</div>`,
        `<div class="tCell tNum">转率</div>`,
        `<div class="tCell tNum">获客成本</div>`,
        `<div class="tCell tNum">添加成本</div>`,
        `<div class="tCell tNum">添加产值</div>`,
        `<div class="tCell tNum">总获客量</div>`,
        `<div class="tCell tNum">总添加数</div>`,
        `<div class="tCell tNum">总单量</div>`,
        `<div class="tCell tNum">获客占比</div>`,
        `<div class="tCell tNum">添加占比</div>`,
        `<div class="tCell tNum">添加率</div>`,
        `<div class="tCell tNum">D3出单占比</div>`,
        `<div class="tCell tNum">D4出单占比</div>`,
        `<div class="tCell tNum">D5出单占比</div>`,
        `<div class="tCell tNum">D6-7出单占比</div>`,
        `<div class="tCell tNum">D3转率</div>`,
        `<div class="tCell tNum">D4转率</div>`,
        `<div class="tCell tNum">D5转率</div>`,
        `<div class="tCell tNum">D6-7转率</div>`,
        `</div>`,
      ].join("");
      const rowsL2 = listL2
        .map((it) => {
          const k = String(it.level2 || "未匹配");
          const active = state.overviewL2 && state.overviewL2 !== "__ALL__" && String(state.overviewL2) === k;
          const cls = active ? " active" : "";
          const data = k.replace(/"/g, "&quot;");
          return [
            `<div class="tRowOvL2${cls}" data-ov-l2="${data}">`,
            `<div class="tCell">${k}</div>`,
            `<div class="tCell tNum">${fmtInt(it.periodCnt)}</div>`,
            `<div class="tCell tNum">${fmt2(it.roi)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.conv)}</div>`,
            `<div class="tCell tNum">${fmt2(it.cac)}</div>`,
            `<div class="tCell tNum">${fmt2(it.addCost)}</div>`,
            `<div class="tCell tNum">${fmt2(it.addValue)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.leads)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.adds)}</div>`,
            `<div class="tCell tNum">${fmtInt(it.l1Orders)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.share)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.addShare)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.addRate)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d3Share)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d4Share)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d5Share)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d67Share)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d3Conv)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d4Conv)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d5Conv)}</div>`,
            `<div class="tCell tNum">${fmtPct1(it.d67Conv)}</div>`,
            `</div>`,
          ].join("");
        })
        .join("");
      el.overviewL2Table.innerHTML = headL2 + rowsL2;
      for (const node of el.overviewL2Table.querySelectorAll("[data-ov-l2]")) {
        node.onclick = () => {
          const k = node.getAttribute("data-ov-l2") || "";
          if (!k) return;
          state.overviewL2 = state.overviewL2 && state.overviewL2 !== "__ALL__" && String(state.overviewL2) === k ? "__ALL__" : k;
          renderAll();
        };
      }
    }

    for (const node of el.overviewPlatTable.querySelectorAll("[data-ov-plat-sort]")) {
      node.onclick = () => {
        const key = node.getAttribute("data-ov-plat-sort") || "";
        if (!key) return;
        if (state.overviewPlatSortKey === key) state.overviewPlatSortDir = state.overviewPlatSortDir === "desc" ? "asc" : "desc";
        else {
          state.overviewPlatSortKey = key;
          state.overviewPlatSortDir = "desc";
        }
        renderAll();
      };
    }

    const now = new Date();
    const pad2 = (x) => String(x).padStart(2, "0");
    const stamp = `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}_${pad2(now.getHours())}${pad2(now.getMinutes())}`;
    if (el.overviewBigExportBtn) {
      el.overviewBigExportBtn.disabled = !bigRowsData.length;
      el.overviewBigExportBtn.onclick = () => exportRowsCsv(`overview_level1_${stamp}.csv`, bigColumns, bigRowsData);
    }
    if (el.overviewL2ExportBtn) {
      el.overviewL2ExportBtn.disabled = !l2RowsData.length;
      el.overviewL2ExportBtn.onclick = () => exportRowsCsv(`overview_level2_${bucketLabel}_${stamp}.csv`, l2Columns, l2RowsData);
    }
    if (el.overviewPlatExportBtn) {
      el.overviewPlatExportBtn.disabled = !platRowsData.length;
      el.overviewPlatExportBtn.onclick = () => exportRowsCsv(`overview_platform_${bucketLabel}_${stamp}.csv`, platColumns, platRowsData);
    }
  }

  function aggregateBundle(inputRows) {
    return inputRows.reduce(
      (s, r) => {
        s.cost += asNum(r.cost);
        s.leads += asNum(r.leads);
        s.adds += asNum(r.adds);
        s.l1Orders += asNum(r.l1Orders);
        s.l1Value += asNum(r.l1Value);
        return s;
      },
      { cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 }
    );
  }

  function getTrendRowsByBucket(allRows, bucketMode) {
    if (bucketMode === "standard") return allRows.filter((r) => r.channelBucket === "标准渠道");
    if (bucketMode === "nonstandard") return allRows.filter((r) => r.channelBucket === "非标渠道");
    return allRows.slice();
  }

  function renderHeatmap(container, cfg) {
    if (!container) return;
    const xLabels = cfg.xLabels || [];
    const rowLabels = cfg.rowLabels || [];
    const values = cfg.values || [];
    const maxValue = Math.max(0.0001, asNum(cfg.maxValue));
    const formatter = cfg.formatter || ((v) => fmt2(v));
    const gradient = `<div class="heatmapLegend"><span>${formatter(0)}</span><span class="heatmapSwatch"></span><span>${formatter(maxValue)}</span></div>`;
    const headCells = [`<div class="heatmapCell label">投放平台</div>`]
      .concat(xLabels.map((x) => `<div class="heatmapCell">${x}</div>`))
      .join("");
    const rowsHtml = rowLabels
      .map((label, rowIdx) => {
        const cells = [`<div class="heatmapCell label">${label}</div>`];
        for (let colIdx = 0; colIdx < xLabels.length; colIdx++) {
          const v = asNum(values[rowIdx] && values[rowIdx][colIdx]);
          const t = Math.max(0, Math.min(1, v / maxValue));
          const isZero = v <= 0;
          const intensity = Math.pow(t, 0.65);
          const lightness = Math.round(94 - intensity * 50);
          const bg = isZero ? "#ffffff" : `hsl(221 83% ${lightness}%)`;
          const color = isZero ? "#94a3b8" : intensity > 0.58 ? "#ffffff" : "#0f172a";
          cells.push(`<div class="heatmapCell value" style="background:${bg}; color:${color};">${formatter(v)}</div>`);
        }
        return `<div class="heatmapRow">${cells.join("")}</div>`;
      })
      .join("");
    container.innerHTML = `${gradient}<div class="heatmapTable" style="--hm-cols:${xLabels.length};"><div class="heatmapHead">${headCells}</div>${rowsHtml}</div>`;
  }

  function renderTrend(allRowsAllChannels) {
    const rowsOverall = allRowsAllChannels.slice().sort((a, b) => asNum(a.periodNum) - asNum(b.periodNum));
    const periods = uniq(rowsOverall.map((r) => asNum(r.periodNum))).filter((x) => x >= 0).sort(sortNumAsc);
    if (!periods.length) {
      for (const node of [el.heatLeadShare, el.heatROI, el.heatConv, el.heatAddCost, el.heatAddValue, el.heatCAC, el.heatAddRate]) if (node) node.innerHTML = "";
      return;
    }

    const labels = periods.map((p) => String(p));
    const overallSeries = [];
    const stdSeries = [];
    const nonSeries = [];
    const stdShare = [];
    const nonShare = [];
    const roiOverall = [], roiStd = [], roiNon = [];
    const addCostOverall = [], addCostStd = [], addCostNon = [];
    const addValueOverall = [], addValueStd = [], addValueNon = [];
    const cacOverall = [], cacStd = [], cacNon = [];
    const addRateOverall = [], addRateStd = [], addRateNon = [];

    for (const p of periods) {
      const periodRows = rowsOverall.filter((r) => asNum(r.periodNum) === p);
      const overall = aggregateBundle(periodRows);
      const std = aggregateBundle(periodRows.filter((r) => r.channelBucket === "标准渠道"));
      const non = aggregateBundle(periodRows.filter((r) => r.channelBucket === "非标渠道"));

      overallSeries.push(overall);
      stdSeries.push(std);
      nonSeries.push(non);

      const totalAdds = asNum(overall.adds);
      stdShare.push(totalAdds ? (asNum(std.adds) / totalAdds) * 100 : 0);
      nonShare.push(totalAdds ? (asNum(non.adds) / totalAdds) * 100 : 0);

      roiOverall.push(safeDiv(overall.l1Value, overall.cost));
      roiStd.push(safeDiv(std.l1Value, std.cost));
      roiNon.push(safeDiv(non.l1Value, non.cost));

      addCostOverall.push(safeDiv(overall.cost, overall.adds));
      addCostStd.push(safeDiv(std.cost, std.adds));
      addCostNon.push(safeDiv(non.cost, non.adds));

      addValueOverall.push(safeDiv(overall.l1Value, overall.adds));
      addValueStd.push(safeDiv(std.l1Value, std.adds));
      addValueNon.push(safeDiv(non.l1Value, non.adds));

      cacOverall.push(safeDiv(overall.cost, overall.leads));
      cacStd.push(safeDiv(std.cost, std.leads));
      cacNon.push(safeDiv(non.cost, non.leads));

      addRateOverall.push(safeDiv(overall.adds, overall.leads) * 100);
      addRateStd.push(safeDiv(std.adds, std.leads) * 100);
      addRateNon.push(safeDiv(non.adds, non.leads) * 100);
    }

    drawStackedBarChart(el.trendShare, {
      labels,
      stacks: [
        { name: "标准", values: stdShare, color: "#3b82f6" },
        { name: "非标", values: nonShare, color: "#f97316" },
      ],
      valueLabel: (v) => `${Math.round(asNum(v))}%`,
      tickFormat: (v) => `${fmtInt(v)}%`,
    });

    const roiMax = Math.max(0.0001, ...roiOverall, ...roiStd, ...roiNon);
    const roiScale = Math.max(0.2, Math.ceil(roiMax / 0.2) * 0.2);
    const roiTicks = [];
    for (let t = 0.2; t <= roiScale + 1e-9; t += 0.2) roiTicks.push(round2(t));

    const lineDefs = [
      { canvas: el.trendROI, legend: el.trendLegendROI, values: [roiOverall, roiStd, roiNon], fmt: (v) => fmt2(v), tickFmt: (v) => round2(v).toFixed(1), max: roiScale, ticks: roiTicks },
      { canvas: el.trendAddCost, legend: el.trendLegendAddCost, values: [addCostOverall, addCostStd, addCostNon], fmt: (v) => fmtInt(v), tickFmt: (v) => fmtInt(v), max: Math.max(1, ...addCostOverall, ...addCostStd, ...addCostNon) },
      { canvas: el.trendAddValueLine, legend: el.trendLegendAddValue, values: [addValueOverall, addValueStd, addValueNon], fmt: (v) => fmtInt(v), tickFmt: (v) => fmtInt(v), max: Math.max(1, ...addValueOverall, ...addValueStd, ...addValueNon) },
      { canvas: el.trendCAC, legend: el.trendLegendCAC, values: [cacOverall, cacStd, cacNon], fmt: (v) => fmtInt(v), tickFmt: (v) => fmtInt(v), max: Math.max(1, ...cacOverall, ...cacStd, ...cacNon) },
      { canvas: el.trendAddRateLine, legend: el.trendLegendAddRate, values: [addRateOverall, addRateStd, addRateNon], fmt: (v) => fmtPct0(v), tickFmt: (v) => fmtPct0(v), max: Math.max(1, ...addRateOverall, ...addRateStd, ...addRateNon) },
    ];
    for (const def of lineDefs) {
      renderLegend(def.legend, [
        { label: "整体", color: "#2563eb" },
        { label: "标准", color: "#10b981" },
        { label: "非标", color: "#f59e0b" },
      ]);
      drawLineChart(def.canvas, {
        labels,
        series: [
          { name: "整体", values: def.values[0], color: "#2563eb" },
          { name: "标准", values: def.values[1], color: "#10b981" },
          { name: "非标", values: def.values[2], color: "#f59e0b" },
        ],
        maxValue: def.max,
        tickValues: def.ticks,
        tickFormat: def.tickFmt || def.fmt,
        valueLabel: def.fmt,
      });
    }

    const heatRows = getTrendRowsByBucket(rowsOverall, state.trendBucket);
    const heatPeriods = periods.slice();
    const recentPeriods = heatPeriods.slice(-5);
    const perMap = new Map();
    for (const r of heatRows) {
      const p = asNum(r.periodNum);
      const key = `${r.platform}|${p}`;
      if (!perMap.has(key)) perMap.set(key, { cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 });
      const v = perMap.get(key);
      v.cost += asNum(r.cost);
      v.leads += asNum(r.leads);
      v.adds += asNum(r.adds);
      v.l1Orders += asNum(r.l1Orders);
      v.l1Value += asNum(r.l1Value);
    }

    const perMapAll = new Map();
    const denomMapAll = new Map();
    for (const r of rowsOverall) {
      const p = asNum(r.periodNum);
      const key = `${r.platform}|${p}`;
      if (!perMapAll.has(key)) perMapAll.set(key, { adds: 0 });
      const v = perMapAll.get(key);
      v.adds += asNum(r.adds);
      denomMapAll.set(p, asNum(denomMapAll.get(p)) + asNum(r.adds));
    }

    const platformTotals = new Map();
    for (const [key, val] of perMapAll.entries()) {
      const platform = key.split("|")[0];
      platformTotals.set(platform, asNum(platformTotals.get(platform)) + asNum(val.adds));
    }
    let platforms = Array.from(platformTotals.keys()).sort((a, b) => asNum(platformTotals.get(b)) - asNum(platformTotals.get(a)) || String(a).localeCompare(String(b), "zh-CN"));

    const hitMap = new Map();
    const projectPeriodDenom = new Map();
    const projectPlatformPeriodLeads = new Map();
    const heatProjects = uniq(rowsOverall.map((r) => String(r.project)));
    for (const platform of platforms) {
      hitMap.set(platform, false);
    }
    for (const r of rowsOverall) {
      const p = asNum(r.periodNum);
      const project = String(r.project);
      const denomKey = `${project}|${p}`;
      const ppKey = `${project}|${r.platform}|${p}`;
      projectPeriodDenom.set(denomKey, asNum(projectPeriodDenom.get(denomKey)) + asNum(r.leads));
      projectPlatformPeriodLeads.set(ppKey, asNum(projectPlatformPeriodLeads.get(ppKey)) + asNum(r.leads));
    }
    for (const platform of platforms) {
      let hit = false;
      for (const project of heatProjects) {
        for (const p of recentPeriods) {
          const denom = asNum(projectPeriodDenom.get(`${project}|${p}`));
          if (!denom) continue;
          const share = (asNum(projectPlatformPeriodLeads.get(`${project}|${platform}|${p}`)) / denom) * 100;
          if (share > 3) {
            hit = true;
            break;
          }
        }
        if (hit) break;
      }
      hitMap.set(platform, hit);
    }
    if (state.trendRecent5 === "__YES__") platforms = platforms.filter((x) => hitMap.get(x));
    if (state.trendRecent5 === "__NO__") platforms = platforms.filter((x) => !hitMap.get(x));

    const xLabels = heatPeriods.map((p) => `${p}期`);
    const shareMatrix = [];
    const roiMatrix = [];
    const convMatrix = [];
    const addCostMatrix = [];
    const addValueMatrix = [];
    const cacMatrix = [];
    const addRateMatrix = [];
    let maxShare = 0, maxROI = 0, maxConv = 0, maxAddCost = 0, maxAddValue = 0, maxCAC = 0, maxAddRate = 0;

    for (const platform of platforms) {
      const rowShare = [], rowROI = [], rowConv = [], rowAddCost = [], rowAddValue = [], rowCAC = [], rowAddRate = [];
      for (const p of heatPeriods) {
        const item = perMap.get(`${platform}|${p}`) || { cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0 };
        const itemAll = perMapAll.get(`${platform}|${p}`) || { adds: 0 };
        const share = safeDiv(itemAll.adds, denomMapAll.get(p)) * 100;
        const roi = safeDiv(item.l1Value, item.cost);
        const conv = safeDiv(item.l1Orders, item.adds) * 100;
        const addCost = safeDiv(item.cost, item.adds);
        const addValue = safeDiv(item.l1Value, item.adds);
        const cac = safeDiv(item.cost, item.leads);
        const addRate = safeDiv(item.adds, item.leads) * 100;
        maxShare = Math.max(maxShare, share);
        maxROI = Math.max(maxROI, roi);
        maxConv = Math.max(maxConv, conv);
        maxAddCost = Math.max(maxAddCost, addCost);
        maxAddValue = Math.max(maxAddValue, addValue);
        maxCAC = Math.max(maxCAC, cac);
        maxAddRate = Math.max(maxAddRate, addRate);
        rowShare.push(share);
        rowROI.push(roi);
        rowConv.push(conv);
        rowAddCost.push(addCost);
        rowAddValue.push(addValue);
        rowCAC.push(cac);
        rowAddRate.push(addRate);
      }
      shareMatrix.push(rowShare);
      roiMatrix.push(rowROI);
      convMatrix.push(rowConv);
      addCostMatrix.push(rowAddCost);
      addValueMatrix.push(rowAddValue);
      cacMatrix.push(rowCAC);
      addRateMatrix.push(rowAddRate);
    }

    const bucketLabel = state.trendBucket === "standard" ? "标准" : state.trendBucket === "nonstandard" ? "非标" : "全部";
    const recentLabel = state.trendRecent5 === "__YES__" ? "近5期占比>3%" : state.trendRecent5 === "__NO__" ? "近5期占比≤3%" : "全部平台";
    if (el.trendHeatMeta) el.trendHeatMeta.textContent = `热力图口径：${bucketLabel}｜平台过滤：${recentLabel}｜平台数=${platforms.length}｜营期数=${heatPeriods.length}`;
    if (el.trendBucketAll) el.trendBucketAll.classList.toggle("active", state.trendBucket === "__ALL__");
    if (el.trendBucketStd) el.trendBucketStd.classList.toggle("active", state.trendBucket === "standard");
    if (el.trendBucketNon) el.trendBucketNon.classList.toggle("active", state.trendBucket === "nonstandard");
    if (el.trendRecentYes) el.trendRecentYes.classList.toggle("active", state.trendRecent5 === "__YES__");
    if (el.trendRecentAll) el.trendRecentAll.classList.toggle("active", state.trendRecent5 === "__ALL__");
    if (el.trendRecentNo) el.trendRecentNo.classList.toggle("active", state.trendRecent5 === "__NO__");

    renderHeatmap(el.heatLeadShare, { xLabels, rowLabels: platforms, values: shareMatrix, maxValue: Math.max(1, maxShare), formatter: (v) => fmtPct1(v) });
    renderHeatmap(el.heatROI, { xLabels, rowLabels: platforms, values: roiMatrix, maxValue: Math.max(1, maxROI), formatter: (v) => fmt2(v) });
    renderHeatmap(el.heatConv, { xLabels, rowLabels: platforms, values: convMatrix, maxValue: Math.max(1, maxConv), formatter: (v) => fmtPct1(v) });
    renderHeatmap(el.heatAddCost, { xLabels, rowLabels: platforms, values: addCostMatrix, maxValue: Math.max(1, maxAddCost), formatter: (v) => fmt2(v) });
    renderHeatmap(el.heatAddValue, { xLabels, rowLabels: platforms, values: addValueMatrix, maxValue: Math.max(1, maxAddValue), formatter: (v) => fmt2(v) });
    renderHeatmap(el.heatCAC, { xLabels, rowLabels: platforms, values: cacMatrix, maxValue: Math.max(1, maxCAC), formatter: (v) => fmt2(v) });
    renderHeatmap(el.heatAddRate, { xLabels, rowLabels: platforms, values: addRateMatrix, maxValue: Math.max(1, maxAddRate), formatter: (v) => fmtPct1(v) });
  }

  function renderCalculator() {
    if (!el.calcResultTable) return;
    const all = applyFiltersAllChannels();
    const analysisKey = state.calcAnalysisProjectPeriod;
    const refKeys = state.calcRefProjectPeriods;
    if (!analysisKey) {
      el.calcResultTable.innerHTML = `<div class="tRowCalc"><div class="tCell">请选择分析营期</div></div>`;
      el.calcExportBtn.disabled = true;
      el.calcExportBtn.onclick = null;
      return;
    }
    if (!refKeys || !refKeys.size) {
      el.calcResultTable.innerHTML = `<div class="tRowCalc"><div class="tCell">请至少选择 1 个对照营期</div></div>`;
      el.calcExportBtn.disabled = true;
      el.calcExportBtn.onclick = null;
      return;
    }

    const [analysisProject, analysisPeriodStr] = analysisKey.split("｜");
    const analysisPeriodNum = parsePeriodNum(analysisPeriodStr);
    const analysisRows = all.filter((r) => String(r.project) === String(analysisProject) && asNum(r.periodNum) === asNum(analysisPeriodNum));
    const analysisMap = new Map();
    let analysisAddsTotal = 0;
    let analysisLeadsTotal = 0;
    for (const r of analysisRows) {
      const k = String(r.platform);
      if (!analysisMap.has(k)) analysisMap.set(k, { platform: k, adds: 0, leads: 0, l1Orders: 0, l1Value: 0 });
      const v = analysisMap.get(k);
      v.adds += asNum(r.adds);
      v.leads += asNum(r.leads);
      v.l1Orders += asNum(r.l1Orders);
      v.l1Value += asNum(r.l1Value);
      analysisAddsTotal += asNum(r.adds);
      analysisLeadsTotal += asNum(r.leads);
    }

    const refMap = new Map();
    let refLeadsTotal = 0;
    if (refKeys && refKeys.size) {
      for (const r of all) {
        const kpp = projectPeriodLabel(r.project, r.periodNum);
        if (!refKeys.has(kpp)) continue;
        const k = String(r.platform);
        if (!refMap.has(k)) refMap.set(k, { platform: k, adds: 0, leads: 0, l1Orders: 0, l1Value: 0 });
        const v = refMap.get(k);
        v.adds += asNum(r.adds);
        v.leads += asNum(r.leads);
        v.l1Orders += asNum(r.l1Orders);
        v.l1Value += asNum(r.l1Value);
        refLeadsTotal += asNum(r.leads);
      }
    }

    const platforms = uniq([...Array.from(analysisMap.keys()), ...Array.from(refMap.keys())]);
    platforms.sort((a, b) => {
      const aa = refMap.get(a);
      const bb = refMap.get(b);
      const sa = aa && refLeadsTotal ? asNum(aa.leads) / refLeadsTotal : 0;
      const sb = bb && refLeadsTotal ? asNum(bb.leads) / refLeadsTotal : 0;
      if (sb !== sa) return sb - sa;
      return String(a).localeCompare(String(b), "zh-CN");
    });

    const rowsOut = platforms.map((platform) => {
      const a = analysisMap.get(platform) || { adds: 0, leads: 0, l1Orders: 0, l1Value: 0 };
      const r = refMap.get(platform) || { adds: 0, leads: 0, l1Orders: 0, l1Value: 0 };

      const analysisShare = analysisLeadsTotal ? asNum(a.leads) / analysisLeadsTotal : 0;
      const analysisConv = safeDiv(a.l1Orders, a.adds);
      const refShare = refLeadsTotal ? asNum(r.leads) / refLeadsTotal : 0;
      const refConv = safeDiv(r.l1Orders, r.adds);
      const refAvgPrice = safeDiv(r.l1Value, r.l1Orders);

      const deltaShare = analysisShare - refShare;
      const deltaConv = analysisConv - refConv;
      const analysisConvPeople = asNum(a.adds) * analysisConv;
      const expectedConvPeople = asNum(analysisAddsTotal) * refShare * refConv;
      const deltaConvPeople = analysisConvPeople - expectedConvPeople;
      const deltaValue = deltaConvPeople * refAvgPrice;

      return {
        platform,
        analysisAdds: asNum(a.adds),
        analysisShare,
        analysisConv,
        refShare,
        refConv,
        refAvgPrice,
        deltaShare,
        deltaConv,
        deltaConvPeople,
        deltaValue,
      };
    });

    const head = [
      `<div class="tHeadCalc">`,
      `<div class="tCell">投放平台</div>`,
      `<div class="tCell tNum">分析添加</div>`,
      `<div class="tCell tNum">分析占比</div>`,
      `<div class="tCell tNum">分析转率</div>`,
      `<div class="tCell tNum">对照占比</div>`,
      `<div class="tCell tNum">对照转率</div>`,
      `<div class="tCell tNum">对照客单价</div>`,
      `<div class="tCell tNum">占比差异</div>`,
      `<div class="tCell tNum">转率差异</div>`,
      `<div class="tCell tNum">转化人数差异</div>`,
      `<div class="tCell tNum">产值差异</div>`,
      `</div>`,
    ].join("");

    const rowsHtml = rowsOut
      .map((it) => {
        return [
          `<div class="tRowCalc">`,
          `<div class="tCell">${String(it.platform)}</div>`,
          `<div class="tCell tNum">${fmtInt(it.analysisAdds)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.analysisShare * 100)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.analysisConv * 100)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.refShare * 100)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.refConv * 100)}</div>`,
          `<div class="tCell tNum">${fmt2(it.refAvgPrice)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.deltaShare * 100)}</div>`,
          `<div class="tCell tNum">${fmtPct1(it.deltaConv * 100)}</div>`,
          `<div class="tCell tNum">${fmt2(it.deltaConvPeople)}</div>`,
          `<div class="tCell tNum">${fmt2(it.deltaValue)}</div>`,
          `</div>`,
        ].join("");
      })
      .join("");

    el.calcResultTable.innerHTML = head + rowsHtml;

    el.calcExportBtn.disabled = !rowsOut.length;
    el.calcExportBtn.onclick = () => {
      const now = new Date();
      const pad2 = (x) => String(x).padStart(2, "0");
      const name = `calculator_result_${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}_${pad2(now.getHours())}${pad2(now.getMinutes())}.csv`;
      exportCalculatorCsv(name, rowsOut, analysisKey, Array.from(refKeys || []).join(" / "));
    };
  }

  function csvEscapeCell(s) {
    const t = String(s == null ? "" : s);
    if (/[",\r\n]/.test(t)) return `"${t.replace(/"/g, '""')}"`;
    return t;
  }

  function exportRowsCsv(filename, header, rowsData) {
    const lines = [header.map(csvEscapeCell).join(",")];
    for (const row of rowsData || []) lines.push((row || []).map(csvEscapeCell).join(","));
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + lines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function exportCalculatorCsv(filename, rowsOut) {
    const header = [
      "投放平台",
      "分析营期_总添加数",
      "分析营期_获客占比",
      "分析营期_转率",
      "对照营期_获客占比",
      "对照营期_转率",
      "对照营期_平均客单价",
      "获客占比差异",
      "转率差异",
      "转化人数差异",
      "产值差异",
    ];
    const rowsData = rowsOut.map((it) => [it.platform, it.analysisAdds, it.analysisShare, it.analysisConv, it.refShare, it.refConv, it.refAvgPrice, it.deltaShare, it.deltaConv, it.deltaConvPeople, it.deltaValue]);
    exportRowsCsv(filename, header, rowsData);
  }

  function renderAll() {
    const selected = applyFiltersBase();
    const selectedAllChannels = applyFiltersAllChannels();
    initCalcSelectors();

    const tabName =
      state.mainTab === "overview"
        ? "总览"
        : state.mainTab === "structure"
          ? "渠道结构"
          : state.mainTab === "trend"
            ? "趋势"
            : state.mainTab === "calculator"
              ? "计算器"
              : state.channelBucket;
    if (el.dataStatus) el.dataStatus.textContent = `导入行=${importRowsCount}｜聚合行=${aggRowsCount}｜页签=${tabName}`;
    const scopeParts = [];
    if (hasYearDim) scopeParts.push(state.years.size ? `年度=${Array.from(state.years.values()).sort(sortNumDesc).join("，")}` : "年度=全部");
    if (hasMonthDim) scopeParts.push(state.months.size ? `月=${Array.from(state.months.values()).sort(sortNumAsc).join("，")}` : "月=全部");
    scopeParts.push(`项目=${scopeLabel(state.projects, msRuntime.project.options, "无项目")}`);
    const periodScopeLabel = msRuntime.period.cleared && !state.periods.size ? "未选择" : scopeLabel(state.periods, msRuntime.period.options, "无营期");
    scopeParts.push(`营期=${periodScopeLabel}`);
    if (el.dataScope) el.dataScope.textContent = scopeParts.join("｜");
    refreshTopTabs();
    if (state.mainTab === "overview") {
      renderOverviewTab(selectedAllChannels);
    } else if (state.mainTab === "compare") {
      renderOverview(selected, selectedAllChannels);
      renderPlatformList(selected, selectedAllChannels);
      renderPlatformDetail(selected, selectedAllChannels);
    } else if (state.mainTab === "structure") {
      renderStructure(selectedAllChannels);
    } else if (state.mainTab === "trend") {
      renderTrend(selectedAllChannels);
    } else {
      renderCalculator();
    }
  }

  function setMainTab(tabKey) {
    state.mainTab = tabKey;
    refreshTopTabs();
    renderAll();
  }

  function refreshTopTabs() {
    if (el.tabOverview) el.tabOverview.classList.toggle("active", state.mainTab === "overview");
    if (el.tabStructure) el.tabStructure.classList.toggle("active", state.mainTab === "structure");
    if (el.tabTrend) el.tabTrend.classList.toggle("active", state.mainTab === "trend");
    if (el.tabCalculator) el.tabCalculator.classList.toggle("active", state.mainTab === "calculator");
    if (el.tabStandard) el.tabStandard.classList.toggle("active", state.mainTab === "compare" && state.channelBucket === "标准渠道");
    if (el.tabNonStandard) el.tabNonStandard.classList.toggle("active", state.mainTab === "compare" && state.channelBucket === "非标渠道");

    if (el.overviewSection) el.overviewSection.style.display = state.mainTab === "overview" ? "block" : "none";
    if (el.compareSection) el.compareSection.style.display = state.mainTab === "compare" ? "block" : "none";
    if (el.structureSection) el.structureSection.style.display = state.mainTab === "structure" ? "block" : "none";
    if (el.trendSection) el.trendSection.style.display = state.mainTab === "trend" ? "block" : "none";
    if (el.calculatorSection) el.calculatorSection.style.display = state.mainTab === "calculator" ? "block" : "none";
  }

  function setChannelBucket(bucket, keepMainTab) {
    if (!keepMainTab) state.mainTab = "compare";
    state.channelBucket = bucket;
    state.platform = "__NONE__";
    state.search = "";
    if (el.searchInput) el.searchInput.value = "";
    refreshTopTabs();
    closeAllPanels();
    renderAll();
  }

  function normalizeHeaderText(text) {
    return String(text || "")
      .replace(/^\ufeff/, "")
      .trim()
      .replace(/[【】\[\]（）()]/g, "")
      .replace(/[／⁄∕]/g, "/")
      .replace(/\s+/g, "");
  }

  function inferChannelBucketValue(value) {
    const v = String(value || "").trim().replace(/\s+/g, "");
    if (!v) return "";
    if (v === "非标渠道" || v === "非标" || v.includes("非标")) return "非标渠道";
    if (v === "标准渠道" || v === "标准" || v.includes("标准")) return "标准渠道";
    return "";
  }

  function inferChannelBucketFromRow(row) {
    const v1 = inferChannelBucketValue(row.stdNon);
    if (v1) return v1;
    const v2 = inferChannelBucketValue(row.channelType);
    if (v2) return v2;
    return "非标渠道";
  }

  function parseCsv(text) {
    let s = String(text == null ? "" : text);
    if (s.charCodeAt(0) === 0xfeff) s = s.slice(1);
    const rowsOut = [];
    let row = [];
    let cell = "";
    let inQuote = false;
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (inQuote) {
        if (ch === '"') {
          if (s[i + 1] === '"') {
            cell += '"';
            i++;
          } else {
            inQuote = false;
          }
        } else {
          cell += ch;
        }
        continue;
      }
      if (ch === '"') {
        inQuote = true;
        continue;
      }
      if (ch === ",") {
        row.push(cell);
        cell = "";
        continue;
      }
      if (ch === "\n") {
        row.push(cell.replace(/\r$/, ""));
        cell = "";
        rowsOut.push(row);
        row = [];
        continue;
      }
      cell += ch;
    }
    row.push(cell);
    rowsOut.push(row);
    return rowsOut.filter((r) => r.some((x) => String(x || "").trim() !== ""));
  }

  function normalizeHeaderMap(headers) {
    const m = new Map();
    for (let i = 0; i < headers.length; i++) {
      const h = normalizeHeaderText(headers[i]);
      if (!h) continue;
      m.set(h, i);
    }
    function pick(keys) {
      for (const k of keys) {
        const nk = normalizeHeaderText(k);
        if (m.has(nk)) return m.get(nk);
      }
      return -1;
    }
    return {
      project: pick(["项目", "项目名称", "团队"]),
      period: pick(["营期", "期"]),
      platform: pick(["投放平台", "平台"]),
      cost: pick(["投放总成本", "投放成本", "成本"]),
      leads: pick(["获客量", "获客", "线索量"]),
      adds: pick(["添加数", "添加"]),
      l1Orders: pick(["L1总单量", "总单量", "L1单量"]),
      l1Value: pick(["L1总产值", "L1产值", "总产值"]),
      day3: pick(["DAY3", "D3"]),
      day4: pick(["DAY4", "D4"]),
      day5: pick(["DAY5", "D5"]),
      follow: pick(["追单", "D6-7", "DAY6-7"]),
      year: pick(["运营年", "年度", "年"]),
      month: pick(["运营月", "月份", "月"]),
      stdNon: pick(["标准/非标", "标准 / 非标", "标准／非标", "【标准/非标】", "非标/标准", "一级类型", "【一级类型】"]),
      channelType: pick(["渠道类型"]),
    };
  }

  function cleanNum(s) {
    const t = String(s == null ? "" : s).trim();
    if (!t) return 0;
    const x = Number(t.replace(/[^\d.\-]/g, ""));
    return Number.isFinite(x) ? x : 0;
  }

  function setData(nextRows, nextDayAgg, nextMeta, rawCnt, aggCnt) {
    rows = nextRows;
    dayAgg = nextDayAgg || {};
    meta = nextMeta || {};
    importRowsCount = rawCnt || 0;
    aggRowsCount = aggCnt || nextRows.length;

    const projects = uniq(rows.map((r) => String(r.project)));
    COLORS_BY_PROJECT = {};
    for (let i = 0; i < projects.length; i++) COLORS_BY_PROJECT[projects[i]] = PROJECT_COLOR_PALETTE[i % PROJECT_COLOR_PALETTE.length];

    const hasStd = rows.some((r) => r.channelBucket === "标准渠道");
    const hasNon = rows.some((r) => r.channelBucket === "非标渠道");
    state.channelBucket = hasStd ? "标准渠道" : hasNon ? "非标渠道" : "非标渠道";
    state.overviewBucket = hasStd ? "标准渠道" : hasNon ? "非标渠道" : "非标渠道";
    state.overviewL2 = "__ALL__";

    state.years = new Set();
    state.months = new Set();
    state.projects = new Set();
    state.periods = new Set();
    state.platform = "__NONE__";
    state.search = "";
    state.structDrillProject = "";
    state.structDrillMode = "overall";
    state.structCompareMode = "";
    state.mainTab = "overview";
    state.trendBucket = "__ALL__";
    state.trendRecent5 = "__YES__";
    msRuntime.period.cleared = false;

    const allPeriods = uniq(rows.map((r) => projectPeriodLabel(r.project, r.periodNum)));
    state.calcAnalysisProjectPeriod = allPeriods[0] || "";
    state.calcRefProjectPeriods = new Set(allPeriods);
    initCalcSelectors();

    if (el.projectHint) {
      const projLabel = projects.length ? `项目：${projects.map((p) => p.replace(/英语/g, "")).join(" / ")}` : "";
      el.projectHint.textContent = projLabel;
    }
  }

  function initCalcSelectors() {
    const base = applyFiltersAllChannels();
    const byProj = new Map();
    for (const r of base) {
      const proj = String(r.project);
      if (!byProj.has(proj)) byProj.set(proj, new Set());
      byProj.get(proj).add(asNum(r.periodNum));
    }
    const opts = [];
    const projs = Array.from(byProj.keys()).sort((a, b) => String(a).localeCompare(String(b), "zh-CN"));
    for (const proj of projs) {
      const periods = Array.from(byProj.get(proj).values()).filter((x) => x >= 0).sort(sortNumAsc);
      for (const pn of periods) {
        const v = projectPeriodLabel(proj, pn);
        opts.push({ value: v, label: v, project: proj, periodNum: pn });
      }
    }
    calcRuntime.options = opts;
    if (!state.calcAnalysisProjectPeriod && opts.length) state.calcAnalysisProjectPeriod = opts[0].value;
    const keep = new Set(opts.map((x) => x.value));
    state.calcRefProjectPeriods = new Set(Array.from(state.calcRefProjectPeriods.values()).filter((x) => keep.has(x)));
    if (!state.calcRefProjectPeriods.size) state.calcRefProjectPeriods = new Set(opts.map((x) => x.value));
    const onChange = () => {
      refreshCalcRefUI(onChange);
      renderCalculator();
    };
    calcRuntime.onChange = onChange;
    refreshCalcRefUI(onChange);

    if (el.calcAnalysisPeriod) {
      el.calcAnalysisPeriod.innerHTML = opts.map((x) => `<option value="${String(x.value).replace(/"/g, "&quot;")}">${String(x.label)}</option>`).join("");
      el.calcAnalysisPeriod.value = state.calcAnalysisProjectPeriod || "";
      el.calcAnalysisPeriod.onchange = () => {
        state.calcAnalysisProjectPeriod = el.calcAnalysisPeriod.value || "";
        renderCalculator();
      };
    }
  }

  function loadFromCsvText(text, fileName) {
    const table = parseCsv(text);
    if (table.length < 2) throw new Error("CSV 内容为空或格式不正确");
    const headers = table[0];
    const idx = normalizeHeaderMap(headers);
    const required = [idx.project, idx.period, idx.platform, idx.cost, idx.leads, idx.adds, idx.l1Orders, idx.l1Value];
    if (required.some((x) => x < 0)) throw new Error("CSV 缺少必需列（项目/营期/投放平台/投放总成本/获客量/添加数/L1总单量/L1总产值）");

    const agg = new Map();
    const dayMap = {};
    let kept = 0;
    for (let i = 1; i < table.length; i++) {
      const row = table[i];
      const platform = String(row[idx.platform] || "").trim();
      if (!platform || platform.includes("期汇总")) continue;
      const project = String(row[idx.project] || "未知").trim() || "未知";
      const periodNum = parsePeriodNum(row[idx.period]);
      const cost = cleanNum(row[idx.cost]);
      const leads = cleanNum(row[idx.leads]);
      const adds = cleanNum(row[idx.adds]);
      const l1Orders = cleanNum(row[idx.l1Orders]);
      const l1Value = cleanNum(row[idx.l1Value]);
      const year = idx.year >= 0 ? cleanNum(row[idx.year]) : -1;
      const month = idx.month >= 0 ? cleanNum(row[idx.month]) : -1;
      const stdNon = idx.stdNon >= 0 ? String(row[idx.stdNon] || "") : "";
      const channelType = idx.channelType >= 0 ? String(row[idx.channelType] || "") : "";
      const channelBucket = inferChannelBucketFromRow({ stdNon, channelType });

      const key = [channelBucket, project, platform, asNum(year), asNum(month), asNum(periodNum)].join("|");
      if (!agg.has(key)) agg.set(key, { channelBucket, project, platform, year: asNum(year), month: asNum(month), periodNum: asNum(periodNum), cost: 0, leads: 0, adds: 0, l1Orders: 0, l1Value: 0, day3: 0, day4: 0, day5: 0, day67: 0 });
      const v = agg.get(key);
      v.cost += cost;
      v.leads += leads;
      v.adds += adds;
      v.l1Orders += l1Orders;
      v.l1Value += l1Value;
      if (idx.day3 >= 0) v.day3 += cleanNum(row[idx.day3]);
      if (idx.day4 >= 0) v.day4 += cleanNum(row[idx.day4]);
      if (idx.day5 >= 0) v.day5 += cleanNum(row[idx.day5]);
      if (idx.follow >= 0) v.day67 += cleanNum(row[idx.follow]);
      kept++;
    }

    const rowsOut = Array.from(agg.values());
    for (const r of rowsOut) {
      const dk = String(r.channelBucket) + "|" + String(asNum(r.year)) + "|" + String(asNum(r.month)) + "|" + String(r.project) + "|" + String(asNum(r.periodNum)) + "|" + String(r.platform);
      dayMap[dk] = [asNum(r.day3), asNum(r.day4), asNum(r.day5), asNum(r.day67)];
    }

    return {
      rows: rowsOut.map((r) => ({
        channelBucket: r.channelBucket,
        project: r.project,
        platform: r.platform,
        level2: level2OfPlatform(r.platform),
        year: r.year,
        month: r.month,
        periodNum: r.periodNum,
        cost: r.cost,
        leads: r.leads,
        adds: r.adds,
        l1Orders: r.l1Orders,
        l1Value: r.l1Value,
      })),
      dayAgg: dayMap,
      meta: { sourceName: String(fileName || ""), importedAt: new Date().toISOString() },
      importRowsCount: Math.max(0, table.length - 1),
      keptRowsCount: kept,
      aggRowsCount: rowsOut.length,
    };
  }

  function setControlsEnabled(enabled) {
    const tabs = [el.tabOverview, el.tabStructure, el.tabStandard, el.tabNonStandard, el.tabTrend, el.tabCalculator];
    for (const t of tabs) if (t) t.disabled = !enabled;
    const msBtns = [el.yearMsBtn, el.monthMsBtn, el.projectMsBtn, el.periodMsBtn, el.calcRefMsBtn];
    for (const b of msBtns) if (b) b.disabled = !enabled;
    if (el.calcAnalysisPeriod) el.calcAnalysisPeriod.disabled = !enabled;
    if (el.calcExportBtn) el.calcExportBtn.disabled = !enabled;
    if (el.searchInput) el.searchInput.disabled = !enabled;
  }

  function adjustYearMonthVisibility() {
    const years = uniq(rows.map((r) => asNum(r.year)));
    const months = uniq(rows.map((r) => asNum(r.month)));
    const showYear = years.some((x) => x > 0);
    const showMonth = months.some((x) => x >= 1 && x <= 12);
    hasYearDim = showYear;
    hasMonthDim = showMonth;
    const yearField = el.yearMsBtn ? el.yearMsBtn.closest(".field") : null;
    const monthField = el.monthMsBtn ? el.monthMsBtn.closest(".field") : null;
    if (yearField) yearField.style.display = showYear ? "" : "none";
    if (monthField) monthField.style.display = showMonth ? "" : "none";
  }

  let bound = false;
  function bindOnce() {
    if (bound) return;
    bound = true;

    if (el.fileInput) {
      el.fileInput.onchange = async () => {
        const f = el.fileInput.files && el.fileInput.files[0];
        if (!f) return;
        const text = await f.text();
        try {
          const loaded = loadFromCsvText(text, f.name);
          setData(loaded.rows, loaded.dayAgg, loaded.meta, loaded.importRowsCount, loaded.aggRowsCount);
          if (el.importHint) el.importHint.classList.add("hidden");
          setControlsEnabled(true);
          adjustYearMonthVisibility();
          buildYearOptions();
          buildMonthOptions();
          buildProjectOptions();
          buildPeriodOptions();
          renderAll();
        } catch (err) {
          setControlsEnabled(false);
          if (el.importHint) el.importHint.classList.remove("hidden");
          if (el.dataStatus) el.dataStatus.textContent = "导入失败";
          if (el.dataScope) el.dataScope.textContent = String(err && err.message ? err.message : err);
        } finally {
          el.fileInput.value = "";
        }
      };
    }

    if (el.tabOverview) el.tabOverview.onclick = () => setMainTab("overview");
    if (el.tabStructure) el.tabStructure.onclick = () => setMainTab("structure");
    if (el.tabTrend) el.tabTrend.onclick = () => setMainTab("trend");
    if (el.tabCalculator) el.tabCalculator.onclick = () => setMainTab("calculator");
    if (el.tabStandard) el.tabStandard.onclick = () => setChannelBucket("标准渠道", false);
    if (el.tabNonStandard) el.tabNonStandard.onclick = () => setChannelBucket("非标渠道", false);
    if (el.ovSegAll) el.ovSegAll.onclick = () => { state.overviewBucket = "__ALL__"; state.overviewL2 = "__ALL__"; renderAll(); };
    if (el.ovSegStd) el.ovSegStd.onclick = () => { state.overviewBucket = "标准渠道"; state.overviewL2 = "__ALL__"; renderAll(); };
    if (el.ovSegNon) el.ovSegNon.onclick = () => { state.overviewBucket = "非标渠道"; state.overviewL2 = "__ALL__"; renderAll(); };
    if (el.overviewPlatL2Clear) el.overviewPlatL2Clear.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.overviewL2 = "__ALL__"; renderAll(); };

    if (el.yearMsBtn) el.yearMsBtn.onclick = (e) => { e.stopPropagation(); togglePanel(el.yearMsPanel); };
    if (el.monthMsBtn) el.monthMsBtn.onclick = (e) => { e.stopPropagation(); togglePanel(el.monthMsPanel); };
    if (el.projectMsBtn) el.projectMsBtn.onclick = (e) => { e.stopPropagation(); togglePanel(el.projectMsPanel); };
    if (el.periodMsBtn) el.periodMsBtn.onclick = (e) => { e.stopPropagation(); togglePanel(el.periodMsPanel); };
    if (el.calcRefMsBtn) el.calcRefMsBtn.onclick = (e) => { e.stopPropagation(); togglePanel(el.calcRefMsPanel); };

    if (el.yearMsSearch) el.yearMsSearch.oninput = () => { msRuntime.year.search = el.yearMsSearch.value || ""; if (typeof msRuntime.year.onChange === "function") refreshYearUI(msRuntime.year.onChange); };
    if (el.monthMsSearch) el.monthMsSearch.oninput = () => { msRuntime.month.search = el.monthMsSearch.value || ""; if (typeof msRuntime.month.onChange === "function") refreshMonthUI(msRuntime.month.onChange); };
    if (el.projectMsSearch) el.projectMsSearch.oninput = () => { msRuntime.project.search = el.projectMsSearch.value || ""; if (typeof msRuntime.project.onChange === "function") refreshProjectUI(msRuntime.project.onChange); };
    if (el.periodMsSearch) el.periodMsSearch.oninput = () => { msRuntime.period.search = el.periodMsSearch.value || ""; if (typeof msRuntime.period.onChange === "function") refreshPeriodUI(msRuntime.period.onChange); };
    if (el.calcRefMsSearch) el.calcRefMsSearch.oninput = () => { calcRuntime.search = el.calcRefMsSearch.value || ""; if (typeof calcRuntime.onChange === "function") refreshCalcRefUI(calcRuntime.onChange); };

    if (el.yearMsSelectAll) el.yearMsSelectAll.onclick = (e) => { e.stopPropagation(); for (const opt of msRuntime.year.options || []) if (optionMatches(opt, msRuntime.year.search)) state.years.add(opt.value); if (typeof msRuntime.year.onChange === "function") msRuntime.year.onChange(); };
    if (el.monthMsSelectAll) el.monthMsSelectAll.onclick = (e) => { e.stopPropagation(); for (const opt of msRuntime.month.options || []) if (optionMatches(opt, msRuntime.month.search)) state.months.add(opt.value); if (typeof msRuntime.month.onChange === "function") msRuntime.month.onChange(); };
    if (el.projectMsSelectAll) el.projectMsSelectAll.onclick = (e) => { e.stopPropagation(); for (const opt of msRuntime.project.options || []) if (optionMatches(opt, msRuntime.project.search)) state.projects.add(opt.value); if (typeof msRuntime.project.onChange === "function") msRuntime.project.onChange(); };
    if (el.periodMsSelectAll) el.periodMsSelectAll.onclick = (e) => { e.stopPropagation(); for (const opt of msRuntime.period.options || []) if (optionMatches(opt, msRuntime.period.search)) state.periods.add(opt.value); if (typeof msRuntime.period.onChange === "function") msRuntime.period.onChange(); };
    if (el.calcRefMsSelectAll) el.calcRefMsSelectAll.onclick = (e) => { e.stopPropagation(); for (const opt of calcRuntime.options || []) if (optionMatches(opt, calcRuntime.search)) state.calcRefProjectPeriods.add(opt.value); if (typeof calcRuntime.onChange === "function") calcRuntime.onChange(); };

    if (el.yearMsClear) el.yearMsClear.onclick = (e) => { e.stopPropagation(); state.years = new Set(); if (typeof msRuntime.year.onChange === "function") msRuntime.year.onChange(); };
    if (el.monthMsClear) el.monthMsClear.onclick = (e) => { e.stopPropagation(); state.months = new Set(); if (typeof msRuntime.month.onChange === "function") msRuntime.month.onChange(); };
    if (el.projectMsClear) el.projectMsClear.onclick = (e) => { e.stopPropagation(); state.projects = new Set(); if (typeof msRuntime.project.onChange === "function") msRuntime.project.onChange(); };
    if (el.periodMsClear) el.periodMsClear.onclick = (e) => {
      e.stopPropagation();
      state.periods = new Set();
      msRuntime.period.cleared = true;
      if (typeof msRuntime.period.onChange === "function") msRuntime.period.onChange();
    };
    if (el.calcRefMsClear) el.calcRefMsClear.onclick = (e) => { e.stopPropagation(); state.calcRefProjectPeriods = new Set(); if (typeof calcRuntime.onChange === "function") calcRuntime.onChange(); };

    if (el.searchInput) {
      el.searchInput.oninput = () => {
        state.search = el.searchInput.value || "";
        renderPlatformList(applyFiltersBase(), applyFiltersAllChannels());
      };
    }

    const rerenderTrend = () => {
      state.mainTab = "trend";
      refreshTopTabs();
      renderTrend(applyFiltersAllChannels());
    };
    if (el.trendBucketAll) el.trendBucketAll.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.trendBucket = "__ALL__"; rerenderTrend(); };
    if (el.trendBucketStd) el.trendBucketStd.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.trendBucket = "standard"; rerenderTrend(); };
    if (el.trendBucketNon) el.trendBucketNon.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.trendBucket = "nonstandard"; rerenderTrend(); };
    if (el.trendRecentYes) el.trendRecentYes.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.trendRecent5 = "__YES__"; rerenderTrend(); };
    if (el.trendRecentAll) el.trendRecentAll.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.trendRecent5 = "__ALL__"; rerenderTrend(); };
    if (el.trendRecentNo) el.trendRecentNo.onclick = (e) => { e.preventDefault(); e.stopPropagation(); state.trendRecent5 = "__NO__"; rerenderTrend(); };

    const shieldPanels = [el.yearMsPanel, el.monthMsPanel, el.projectMsPanel, el.periodMsPanel, el.calcRefMsPanel];
    for (const panel of shieldPanels) {
      if (!panel) continue;
      panel.addEventListener("click", (e) => e.stopPropagation());
      panel.addEventListener("mousedown", (e) => e.stopPropagation());
    }

    document.addEventListener("click", () => closeAllPanels());
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAllPanels(); });
  }

  function bootstrap() {
    bindOnce();
    setControlsEnabled(false);
    refreshTopTabs();
  }

  bootstrap();
})();
