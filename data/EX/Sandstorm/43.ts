import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
		de: "Liliep"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		345,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Root Fossil",
		fr: "Fossile racine"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez une des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Wähle einen der Angriffe des verteidigenden Pokémon. Dieses Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht anwenden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275819,
		tcgplayer: 86786
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
