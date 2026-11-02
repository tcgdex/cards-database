import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ピジョットV",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きえさるつばさ" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フライトサーフ" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "場に自分のスタジアムが出ているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668230,
				tcgplayer: 570043,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [18],
};

export default card;
