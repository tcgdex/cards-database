import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラV",
		'zh-tw': "捷拉奧拉V",
		th: "เซราโอราV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "利爪劈擊",
				th: "กรงเล็บฉีกร่าง",
			},
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
		{
			name: {
				ja: "サンダーボルト",
				'zh-tw': "閃電伏特",
				th: "ธันเดอร์โบลท์",
			},
			damage: 190,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687520,
				tcgplayer: 571578,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [807],
};

export default card;
