const db = "`playcart`.";
export const SELECT_COUNTRY_CODE = "SELECT `id`, `name`, `phonecode` from " + db + "`country_with_code`";
export const INSERT_INTO_PARTY = "INSERT INTO " + db + "`party`(`party_type_id`,`description`,`status_id`,`created_stamp`,`rowstate`) VALUES (?, ?, ?, now(), 1)";
export const INSERT_INTO_USER_LOGIN = "INSERT INTO " + db + "`user_login`(`PARTY_ID`,`PHONE_NUMBER`,`EMAIL`,`CURRENT_PASSWORD`,`IS_SYSTEM`,`ENABLED`,`REQUIRE_PASSWORD_CHANGE`,`SUCCESSIVE_FAILED_LOGINS`,`LAST_UPDATED_STAMP`,`CREATED_STAMP`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, now(), now())";