import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラックキュレムex",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アイスエイジ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが[N]ポケモンなら、そのポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ブラックフロスト" },
			damage: 250,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863500,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [646],

	suffix: "EX",
};

export default card;
