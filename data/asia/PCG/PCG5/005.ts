import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Muk",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [89],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "悪臭",
			},
			effect: {
				'ja-jp': "MUKがあなたのアクティブなポカモンである限り、各プレイヤーのPokã©MonはPokã©Powersを使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "毒リング",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラッジトス",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
