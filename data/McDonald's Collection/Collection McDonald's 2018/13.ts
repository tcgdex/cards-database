import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Goélise",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Aya Kusube",

	set: Set,
	dexId: [278],
	hp: 60,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Atterrissage"
			},
			effect: {
				fr: "Soignez 30 dégâts à ce Pokémon. Il ne peut pas battre en retraite pendant votre prochain tour."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362784,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362784,
			}
		}
	]
}

export default card

