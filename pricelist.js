/* Built-in price list (used when the sheet tab "PriceList" is missing or empty).
   Shared by index.html (public price list) and office.html (pick items when writing a quotation).
   To change prices without touching code, fill the "PriceList" tab in your Google Sheet. The sheet wins over this file. */
(function () {
  var U = { m: ['Per Mtr', 'للمتر الطولي'], p: ['Per Pcs', 'للقطعة'], s: ['Per Sqmtr', 'للمتر المربع'] };
  var C = {
    rail: ['Curtain rails', 'سكك الستائر'],
    fab: ['Curtain fabric', 'أقمشة الستائر'],
    sheer: ['Sheer', 'الشيفون'],
    leather: ['Leather', 'الجلد'],
    blind: ['Blinds', 'الستائر الرول والبلايند'],
    carpet: ['Carpet', 'السجاد'],
    floor: ['Flooring and wallpaper', 'الأرضيات وورق الجدران'],
    msq: ['Mosque carpet', 'سجاد المساجد'],
    tile: ['Carpet tiles', 'بلاط السجاد'],
    grass: ['Underlay and artificial grass', 'الفرشة والعشب الصناعي']
  };
  var rows = [
    ['rail', 'm', 'Flexible Rail', 'سكة مرنة', '2.000'],
    ['rail', 'm', 'Wave Rail', 'سكة موجة', '3.500'],
    ['rail', 'p', 'Metal Rail: 2 mtr / 3 mtr / 4 mtr', 'سكة معدن: 2 م / 3 م / 4 م', '2.800 / 3.800 / 4.500'],
    ['rail', 'p', 'White Rail: 1.5 mtr / 2 mtr / 3 mtr / 4 mtr', 'سكة بيضاء: 1.5 م / 2 م / 3 م / 4 م', '2.200 / 2.800 / 3.800 / 4.500'],
    ['fab', 'm', 'Normal Fabric (140 Width)', 'قماش عادي (عرض 140)', '2.500'],
    ['fab', 'm', 'Normal Blackout Fabric (140 Width)', 'قماش معتم عادي (عرض 140)', '3.000'],
    ['fab', 'm', 'Normal Fabric (280 Width)', 'قماش عادي (عرض 280)', '4.500'],
    ['fab', 'm', 'Normal Blackout Fabric (280 Width)', 'قماش معتم عادي (عرض 280)', '6.000'],
    ['fab', 'm', 'Best Quality Normal Fabric (140 Width)', 'قماش عادي أفضل جودة (عرض 140)', '4.000'],
    ['fab', 'm', 'Best Quality Blackout Fabric (140 Width)', 'قماش معتم أفضل جودة (عرض 140)', '5.000'],
    ['fab', 'm', 'Best Quality Normal Fabric (280 Width)', 'قماش عادي أفضل جودة (عرض 280)', '6.500'],
    ['fab', 'm', 'Best Quality Blackout Fabric (280 Width)', 'قماش معتم أفضل جودة (عرض 280)', '7.500'],
    ['sheer', 'm', 'Normal Quality Sheer', 'شيفون جودة عادية', '2.000'],
    ['sheer', 'm', 'Medium Quality Sheer', 'شيفون جودة متوسطة', '4.500'],
    ['sheer', 'm', 'Best Quality Sheer', 'شيفون أفضل جودة', '6.000'],
    ['leather', 'm', 'Normal Quality Leather (Artificial)', 'جلد صناعي جودة عادية', '2.500'],
    ['leather', 'm', 'Medium Quality Leather (Artificial)', 'جلد صناعي جودة متوسطة', '4.000'],
    ['leather', 'm', 'Best Quality Leather (Artificial)', 'جلد صناعي أفضل جودة', '6.000'],
    ['leather', 'm', 'Best Quality Leather (Original)', 'جلد طبيعي أفضل جودة', '24.000'],
    ['blind', 's', 'Venetian Blind', 'ستائر فينيسية', '7.000'],
    ['blind', 's', 'Vertical Blind', 'ستائر عمودية', '8.000'],
    ['blind', 's', 'Roller Blind', 'ستائر رول', '9.500'],
    ['blind', 's', 'Zebra Blind', 'ستائر زيبرا', '15.000'],
    ['carpet', 's', 'Plain Normal Carpet', 'سجاد سادة عادي', '1.500'],
    ['carpet', 's', 'Normal Printed Carpet', 'سجاد مطبوع عادي', '2.500'],
    ['carpet', 's', 'Normal Quality Carpet', 'سجاد جودة عادية', '4.500'],
    ['carpet', 's', 'Medium Quality Carpet', 'سجاد جودة متوسطة', '7.500'],
    ['carpet', 's', 'Best Quality Carpet', 'سجاد أفضل جودة', '14.500'],
    ['floor', 's', 'Vinyl Flooring', 'أرضية فينيل', '4.500 / 6.500'],
    ['floor', 's', 'PVC Flooring', 'أرضية PVC', '10.000'],
    ['floor', 's', 'Wooden Flooring', 'أرضية خشبية', '9.500'],
    ['floor', 's', 'Normal Quality Wallpaper', 'ورق جدران جودة عادية', '2.500'],
    ['floor', 's', 'Best Quality Wallpaper', 'ورق جدران أفضل جودة', '4.500'],
    ['msq', 's', 'Normal Quality Msq Carpet', 'سجاد مساجد جودة عادية', '8.500'],
    ['msq', 's', 'Medium Quality Msq Carpet', 'سجاد مساجد جودة متوسطة', '10.500'],
    ['msq', 's', 'Best Quality Msq Carpet', 'سجاد مساجد أفضل جودة', '14.500'],
    ['tile', 's', 'Normal Quality Carpet Tiles', 'بلاط سجاد جودة عادية', '8.000'],
    ['tile', 's', 'Medium Quality Carpet Tiles', 'بلاط سجاد جودة متوسطة', '10.000'],
    ['tile', 's', 'Best Quality Carpet Tiles', 'بلاط سجاد أفضل جودة', '12.500'],
    ['grass', 's', '10 mm Underlay', 'فرشة 10 ملم', '1.000'],
    ['grass', 's', '7 mm Grass Carpet (Artificial)', 'عشب صناعي 7 ملم', '1.800'],
    ['grass', 's', '10 mm Grass Carpet (Artificial)', 'عشب صناعي 10 ملم', '2.200'],
    ['grass', 's', '15 mm Grass Carpet (Artificial)', 'عشب صناعي 15 ملم', '2.800'],
    ['grass', 's', '45/46 mm Grass Carpet (Artificial)', 'عشب صناعي 45/46 ملم', '3.500']
  ];
  window.PRICE_LIST_DEFAULT = rows.map(function (r, i) {
    return { sr: String(i + 1), category: C[r[0]][0], category_ar: C[r[0]][1], unit: U[r[1]][0], unit_ar: U[r[1]][1],
             item: r[2], item_ar: r[3], price: r[4] };
  });
})();
