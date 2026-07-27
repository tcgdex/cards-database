import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "宇宙ウイルスが 突然変異を 起こして ポケモンに なった。 オーロラの 近くに 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "テレポートブレイク" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "スピアダイブ" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559005,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
