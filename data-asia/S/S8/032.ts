import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "デンヂムシ",
		'zh-tw': "蟲電寶",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "食べた 落ち葉を 消化するとき 発電する 仕組み。 お腹の 電気袋に 充電される。",
		'zh-tw': "蟲電寶消化吃掉的落葉時會產生電能。牠會把這些電能儲存在自己肚子上的電囊中。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はさむ",
				'zh-tw': "夾住",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ヘッドボルト",
				'zh-tw': "伏特頭擊",
			},
			damage: 60,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575587,
				tcgplayer: 569533,
			},
		},
	],

	evolveFrom: {
		ja: "アゴジムシ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [737],
};

export default card;
