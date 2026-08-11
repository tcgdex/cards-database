import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "スイクンV",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しゅんそく" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブリザードロンド" },
			damage: "20+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572050,
				tcgplayer: 569391,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [245],
};

export default card;
