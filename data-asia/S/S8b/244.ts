import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキーV",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くろいまなざし" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "げっこうのやいば" },
			damage: "80+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587042,
				tcgplayer: 571496,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [197],
};

export default card;
