import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ バスラオ",
		'zh-tw': "洗翠 野蠻鱸魚",
		th: "ฮิซุย บาสราโอ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "温厚な 気質など 相違点 あれども バスラオの 特徴を 多く 有すゆえ そのリージョンフォームと 定義す。",
		'zh-tw': "此寶可夢具有多項野蠻鱸魚的特徵， 雖然有性情溫馴等不同點存在， 吾人仍將其定義為野蠻鱸魚的地區形態。",
		th: "แม้จะมีจุดที่แตกต่างกันอยู่ อย่างเช่น มีนิสัยสุภาพอ่อนโยน แต่ก็มีลักษณะเฉพาะของบาสราโออยู่หลายอย่าง จึงให้คำจำกัดความว่าเป็นบาสราโอร่างของภูมิภาค",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれをあつめる",
				'zh-tw': "群集",
				th: "รวบรวมฝูง",
			},
			cost: [],
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
				th: "พุ่งเข้าชน",
			},
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687510,
				tcgplayer: 571568,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577450,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [550],
};

export default card;
