import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キュレムVMAX",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はくぎんせかい" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の山札を上から1枚トラッシュし、そのカードが[W]エネルギーなら、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダイフロスト" },
			damage: "120+",
			cost: ["Water", "Water", "Water"],
			effect: {
				'ja-jp': "このポケモンについている[W]エネルギーを好きなだけトラッシュし、その枚数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668235,
				tcgplayer: 570049,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キュレムV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [646],
};

export default card;
