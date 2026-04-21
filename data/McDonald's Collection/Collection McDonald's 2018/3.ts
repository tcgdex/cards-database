import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Sovkipou",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",

	set: Set,
	dexId: [767],
	hp: 70,
	types: ["Grass"],

	stage: "Basic",
	retreat: 3,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Escampette"
			},
			effect: {
				fr: "Pendant votre premier tour, ce Pokémon n'a pas de Coût de Retraite."
			}
		}
	],

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				fr: "Ronge"
			},
			damage: 30
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362774,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362774,
			}
		}
	]
}

export default card

