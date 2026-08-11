import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソロック",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [338],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ルナシェード",
			},
			effect: {
				'ja-jp': "Lunatoneがプレイしている限り、各プレイヤーの無色のPokã©Mon（Pokã©Mon-Exを除く）はPokã©Powersを使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "家族を呼びます",
			},
			effect: {
				'ja-jp': "デッキを検索してルナトンを探して、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "ハイパービーム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
