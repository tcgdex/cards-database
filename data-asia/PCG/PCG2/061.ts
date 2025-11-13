import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "アルタリア",
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
				ja: "保護",
			},
			effect: {
				ja: "対戦相手のポカン©Mon-Exによってaltariaに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "ダブルウィング攻撃",
			},
			effect: {
				ja: "防御する各ポケモンに20のダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "ダイビング",
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
