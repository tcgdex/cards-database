import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Carapuce",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [7],
	hp: 60,
	types: ["Water"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Duo",
			},
			effect: {
				fr: "Cherchez jusqu'à 2 Insécateur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Hâte",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
		},
	],
}

export default card
