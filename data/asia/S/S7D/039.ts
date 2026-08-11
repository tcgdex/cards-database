import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウ",
		'zh-tw': "大王銅象",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		ja: "群れを つくって 暮らしている。 鼻の 握力は 大岩も 粉々に 砕くほど 強い。",
		'zh-tw': "群居的寶可夢。鼻子的握力十分強勁，甚至能把大石頭弄得粉碎。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かいりき",
				'zh-tw': "怪力",
			},
			damage: 90,
			cost: ["Metal", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "10まんばりき",
				'zh-tw': "十萬馬力",
			},
			damage: 160,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571622,
				tcgplayer: 569362,
			},
		},
	],

	evolveFrom: {
		ja: "ゾウドウ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [879],
};

export default card;
