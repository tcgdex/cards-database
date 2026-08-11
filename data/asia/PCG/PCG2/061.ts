import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アルタリア",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [334],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "保護",
			},
			effect: {
				'ja-jp': "対戦相手のポカン©Mon-Exによってaltariaに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "ダブルウィング攻撃",
			},
			effect: {
				'ja-jp': "防御する各ポケモンに20のダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ダイビング",
			},
			damage: 50,
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
