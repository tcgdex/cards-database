import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Sabelette d'Alola",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Mizue",

	set: Set,
	dexId: [27],
	hp: 60,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	attacks: [
		{
			name: {
				fr: "Boul'Armure"
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire."
			}
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				fr: "Ball'Glace"
			},
			damage: 30,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362779,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362779,
			}
		}
	]
}

export default card

