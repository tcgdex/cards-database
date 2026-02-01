import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロムex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ボルテージバースト" },
			damage: "130+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [644],

	suffix: "EX",

	thirdParty: {
		cardmarket: 829420,
		tcgplayer: 636515,
	},
};

export default card;
