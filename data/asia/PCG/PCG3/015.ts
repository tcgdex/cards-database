import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いweezing",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "メタン漏れ",
			},
			effect: {
				'ja-jp': "暗いweezingがアクティブなポカモンである限り、ターンの間に毒されたままである各ポカモンに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スモッグ",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "闇の充電",
			},
			effect: {
				'ja-jp': "暗いweezingに2つのダメージカウンターを置きます。",
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
