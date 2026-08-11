import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドンex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リジェクトボルト" },
			damage: "60+",
			cost: ["Lightning", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "サイバードライブ" },
			damage: 220,
			cost: ["Lightning", "Psychic", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「サイバードライブ」が使えない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863855,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1008],

	suffix: "EX",
};

export default card;
