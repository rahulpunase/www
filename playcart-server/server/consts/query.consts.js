const db = "`playcart`.";
export const SELECT_COUNTRY_CODE = "SELECT `id`, `name`, `phonecode` from " + db + "`country_with_code`";
export const INSERT_INTO_PARTY = "INSERT INTO " + db + "`party`(`party_type_id`,`description`,`status_id`,`created_stamp`,`rowstate`) VALUES (?, ?, ?, now(), 1)";