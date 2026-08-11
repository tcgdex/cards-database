import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ペロリーム",
		'zh-tw': "胖甜妮",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "体臭から 心と 体の 調子を 嗅ぎとる。 医療への 応用が 期待されている。",
		'zh-tw': "能從人們身上的氣味裡嗅出他們的身心狀態。 在醫療領域的實際應用備受矚目。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ドレインキッス",
				'zh-tw': "吸取之吻",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "マジカルショット",
				'zh-tw': "魔法射擊",
			},
			damage: 100,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667923,
				tcgplayer: 569979,
			},
		},
	],

	evolveFrom: {
		ja: "ペロッパフ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [685],
};

export default card;
