import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		13,
	],
	set: Set,
	illustrator: 'Akira Komayama',
	description: {
		en: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head."
	},
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: [
		"Grass",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110406,
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "String Shot",
				fr: "Sécrétion",
			},
			damage: "10",
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
	],
	weaknesses	: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		
	],
	retreat: 1,
}

export default card
