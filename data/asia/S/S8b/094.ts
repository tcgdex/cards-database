import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "れんげきウーラオスV",
		'zh-tw': "連擊武道熊師V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひるがえす",
				'zh-tw': "狡兔三窟",
			},
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "ひゃくれつラッシュ",
				'zh-tw': "百裂猛攻",
			},
			damage: 150,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586610,
				tcgplayer: 571347,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [892],
};

export default card;
