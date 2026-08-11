import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デルビル",
		'zh-tw': "戴魯比",
		'th-th': "เดลวิล",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "夜明け前に 不気味な 遠吠えを 繰り返し 自分たちの 群れの 存在を アピール している。",
		'zh-tw': "會在天亮前反覆發出令人不寒而慄的長嚎，藉此強調自己群體的存在。",
		'th-th': "จะส่งเสียงหอนอันชวนขนลุกในช่วงเช้ามืด เพื่อบ่งบอกตัวตนของฝูง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "かみつく",
				'zh-tw': "咬住",
				'th-th': "กัดติด",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533442,
				tcgplayer: 568993,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [228],
};

export default card;
