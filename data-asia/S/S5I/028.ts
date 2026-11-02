import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
		'zh-tw': "猴怪",
		th: "แมนคี",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "１匹が 怒りだすと まわりも 怒りだすので マンキーの 群れに 静寂が 訪れることは ない。",
		'zh-tw': "只要有１隻發怒，周圍的猴怪也會跟著開始發起怒來，所以猴怪群從沒有一刻是安靜的。",
		th: "ถ้าโกรธขึ้นมาตัวนึงแล้ว ตัวอื่นรอบ ๆ จะโกรธตามไปด้วย ฝูงแมนคีจึงไม่เคยมีความสงบเงียบ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きあいづき",
				'zh-tw': "真氣突刺",
				th: "ฮึดสู้",
			},
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย การโจมตีนี้ล้มเหลว",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533362,
				tcgplayer: 568977,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [56],
};

export default card;
