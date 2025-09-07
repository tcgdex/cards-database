import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Koffing",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [109],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ノックアウトガス",
			},
			effect: {
				ja: "Koffingがあなたのアクティブなポカモンであり、相手の攻撃によってノックアウトされている場合、攻撃するポケモンは混乱し、毒されます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "gnaw",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
