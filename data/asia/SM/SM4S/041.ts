import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レジギガス",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		'ja-jp': "特殊な 氷山や 岩石 マグマから 自分の 姿に 似た ポケモンを つくったと 言われる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いにしえのふういん" },
			effect: {
				'ja-jp': "自分のベンチに「レジロック」「レジアイス」「レジスチル」がいないなら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ジャイアントスタンプ" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560353,
			},
		},
	],

	retreat: 4,
	rarity: "Rare",
	dexId: [486],
};

export default card;
