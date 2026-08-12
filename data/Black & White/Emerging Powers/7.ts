import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
		de: "Folikon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nurturing",
				fr: "Affection",
				de: "Großziehen"
			},
			effect: {
				en: "Choose 1 of your Pokémon. Search your deck for a card that evolves from that Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				fr: "Choisissez 1 de vos Pokémon. Cherchez dans votre deck une carte Évolution du Pokémon choisi et placez-la sur celui-ci. (Cela équivaut à faire évoluer le Pokémon choisi.) Mélangez ensuite votre deck.",
				de: "Wähle 1 deiner Pokémon im Spiel. Durchsuche dein Deck nach einer Karte, zu der sich das Pokémon entwickelt, und lege diese auf das gewählte Pokémon (dies zählt als Entwicklung des Pokémon). Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 50 weitere Schadenspunkte zu."
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

	retreat: 1,

	description: {
		en: "Upon finding a small Pokémon, it weaves clothing for it from leaves, using the cutters on its arms and sticky silk.",
		de: "Findet es ein junges Pokémon, kann es nicht anders, als ihm mit seinen Scheren und Klebefäden ein Kleidchen zu nähen."
	},

	thirdParty: {
		cardmarket: 279972,
		tcgplayer: 86685
	}
}

export default card
