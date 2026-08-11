import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アンノーンV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいこくいん" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ビクトリーシンボル" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザを使ったとき、自分のサイドの残り枚数が1枚なら、この対戦は自分の勝ちになる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 681790,
				tcgplayer: 597493,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [201],
};

export default card;
