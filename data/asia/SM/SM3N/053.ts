import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネクロズマGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひかりのおわり" },
			effect: {
				'ja-jp': "このポケモンは[無]ポケモンから、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "プリズムバースト" },
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[超]エネルギーをすべてトラッシュし、その枚数x60ダメージ追加。",
			},
		},
		{
			name: { ja: "ブラックレイGX" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の「ポケモンGX・EX」全員に、それぞれ100ダメージ。このワザのダメージは弱点・抵抗力を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561053,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [800],

	suffix: "GX",
};

export default card;
