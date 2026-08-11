import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
		'zh-tw': "投羽梟",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "陽の光 浴び 力 溜めしこと 多し。 寒冷な気候 原因と 察するも 両翼に 仕込みし 刃羽根の切れ味 変化なし。",
		'zh-tw': "經常為了積蓄力量而沐浴陽光。吾人推測 這是因為當地氣候較為寒冷，然而藏於 雙翅中的刃羽鋒利程度並無不同。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はばたく",
				'zh-tw': "羽擊",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "するどいはね",
				'zh-tw': "銳利羽",
			},
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651066,
				tcgplayer: 569850,
			},
		},
	],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [723],
};

export default card;
