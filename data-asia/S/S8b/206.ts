import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "不気味な 遠吠えが 特徴。 昔の 人は 地獄 からの 使いと 考え 恐れていた。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いちげきのほうこう" },
			effect: {
				ja: "自分の番に1回使える。自分の山札から「いちげきエネルギー」を1枚選び、自分の「いちげき」のポケモンにつける。そして山札を切る。その後、つけたポケモンにダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やみのキバ" },
			damage: 50,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586944,
				tcgplayer: 571458,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [229],
};

export default card;
