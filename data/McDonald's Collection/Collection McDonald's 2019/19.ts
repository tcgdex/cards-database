import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Artikodin",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Hitoshi Ariga",

	set: Set,
	dexId: [144],
	hp: 120,
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
			cost: ["Colorless", "Colorless"],
			name: {
				fr: "Tornade"
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				fr: "Glaciation"
			},
			damage: 100,
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479764,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581862,
			}
		}
	]
}

export default card

