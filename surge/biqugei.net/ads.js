const { body } = $response;
const ctx = body
  .replace(/(\<script\s?(type\=\"text\/javascript\")?\s?\>\s?\(function\(.*?\)\s?\{.*?\}\)\(.*?\)\;\s?\<\/script\>)/gims, '')
  .replace(/(\<script\>if\(.*test\(.*\)\)\{.*\}\;\<\/script\>)/gims, '')
  .replace(/\<script\>\!function\(\)\{.*new\sFunction\(\w\)\(\)\}\(\)\;\<\/script\>/gims, '');
$done({ body: ctx });
