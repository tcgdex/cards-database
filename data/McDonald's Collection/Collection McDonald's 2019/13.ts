import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Goupix d'Alola",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Tomokazu Komiya",

	set: Set,
	dexId: [37],
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
				fr: "Hurlement"
			},
			effect: {
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc."
			}
		},
		{
			cost: ["Water"],
			name: {
				fr: "Verglas"
			},
			damage: 10,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479734,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581856,
			}
		}
	]
}

export default card

