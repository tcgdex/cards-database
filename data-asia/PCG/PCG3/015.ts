import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いweezing",
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
				ja: "メタン漏れ",
			},
			effect: {
				ja: "暗いweezingがアクティブなポカモンである限り、ターンの間に毒されたままである各ポカモンに1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スモッグ",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "闇の充電",
			},
			effect: {
				ja: "暗いweezingに2つのダメージカウンターを置きます。",
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
