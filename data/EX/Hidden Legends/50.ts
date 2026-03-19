import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
		de: "Schlukwech"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesia"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutir",
				de: "Swallow Up"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 50 damage plus 30 more damage.",
				fr: "Avant d'infliger des dégâts, comptabilisez le nombre de Points de Vie restant au Pokémon Défenseur et à Avaltout. Si le Pokémon Défenseur possède moins de Points de Vie qu'Avaltout, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 50 damage plus 30 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276124,
		tcgplayer: 89670
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "energy",
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		}
	]
}

export default card
