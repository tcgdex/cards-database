import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Scarabrute",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Suwama Chiaki",

	set: Set,
	dexId: [127],
	hp: 110,
	types: ["Grass"],

	stage: "Basic",
	retreat: 2,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				fr: "Empoigne Puissante"
			},
			damage: 20,
			effect: {
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
			}
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				fr: "Enfoncement"
			},
			damage: 70,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479709,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581851,
			}
		}
	]
}

export default card

