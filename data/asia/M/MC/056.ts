import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森に 棲む ポケモンには とても 優しい。 頭の しげみを 棲み処にされても 気にしない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "フォレストダンプ" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863347,
			},
		},
	],

	evolveFrom: {
		ja: "ボクレー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [709],
};

export default card;
