/* Settings for office.html. Keep this file next to office.html. You edit it once.
   API_URL: the Web app URL you copy after deploying the Google Apps Script (see Code.gs).
   Leave API_URL empty and the page still works for printing and sharing, but it will not save. */
/*
window.OFFICE_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzuyyRXD6CCX33IEb95-FkSyEEXH5LAnW0dsMnZ9VZpoydLN0x0CLz5jvCml87oORKBGA/exec',
  VAT_RATE: 5,
  CURRENCY: 'OMR',
  COMPANY: {
    name: 'AL-ATRAJ TRADING EST.',
    lines: [
      'P.O. Box: 2368, PC, 112 Ruwi, Sultanate of Oman',
      'C.R. No: 1/15915/1',
      'VATIN: OM1100238626',
      'Tel/Fax: +968 24836556/92150208',
      'Email: alatrajtrading@yahoo.com'
    ],
    logo: 'images/logo.png'
  }
};
*/
/* Settings for office.html. Keep this file next to office.html. You edit it once.
   API_URL: the Web app URL you copy after deploying the Google Apps Script (see Code.gs).
   Leave API_URL empty and the page still works for printing and sharing, but it will not save. */
window.OFFICE_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzuyyRXD6CCX33IEb95-FkSyEEXH5LAnW0dsMnZ9VZpoydLN0x0CLz5jvCml87oORKBGA/exec',
  VAT_RATE: 5,
  CURRENCY: 'OMR',
  COMPANY: {
    name: 'AL-ATRAJ TRADING EST.',
    lines: [
      'P.O. Box: 2368, PC, 112 Ruwi, Sultanate of Oman',
      'C.R. No: 1/15915/1',
      'VATIN: OM1100238626',
      'Tel/Fax: +968 24836556/92150208',
      'Email: alatrajtrading@yahoo.com'
    ],
    logo: 'images/logo.png'
  },
  /* Printed under the totals of the document types listed in "types".
     A bank line with an empty value is left out, so fill IBAN and Account Number below.
     Delete the "types" entry (or make it []) to switch this block off. */
  INVOICE_EXTRAS: {
    types: ['Tax Invoice'],
    bank: [
      ['Beneficiary Name', 'AL ATRAJ TRADING EST'],
      ['Bank Name', 'BANK MUSCAT'],
      ['Branch Name', 'HATTAT HOUSE (0335)'],
      ['Swift Code', 'BMUSOMRXXX'],
      ['IBAN', 'OM750270335001856460011'],
      ['Account Number', '0335001856460011'],
      ['Payment Currency', 'OMR']
    ],
    terms: [
      'All ownership and rights of possession of all goods supplied shall remain and, in all respect, belong to AL ATRAJ TRADING EST. Until full settlement has been received and Cheques cleared.',
      'Cheques should be made payable to AL ATRAJ TRADING EST only.',
      'For all payment an official receipt should be issued at the time of payment.'
    ]
  }
};
