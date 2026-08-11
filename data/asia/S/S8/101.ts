import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "アマージョV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クイーンオーダー" },
			damage: "20+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンを好きなだけトラッシュし、トラッシュしたベンチポケモンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576179,
				tcgplayer: 569602,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [763],
};

export default card;
