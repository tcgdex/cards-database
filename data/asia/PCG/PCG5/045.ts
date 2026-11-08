import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルナトン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [337],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ソルシェード",
			},
			effect: {
				'ja-jp': "Solrockがプレイしている限り、各プレイヤーのFirePokã©Mon（Pokã©Mon-Exを除く）はPokã©Powersを使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "月の指導",
			},
			effect: {
				'ja-jp': "デッキを検索して、トレーナーカード（サポーターカードを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "PsyShock",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
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
