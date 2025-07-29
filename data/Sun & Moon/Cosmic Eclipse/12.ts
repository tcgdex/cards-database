import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		de: "Tropius"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 120,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
				es: "Síntesis",
				it: "Sintesi",
				pt: "Síntese",
				de: "Synthese"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Grass dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Grass y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Grass e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Grass no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Grass-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Drain",
				fr: "Feuille Sangsue",
				es: "Hoja Drenante",
				it: "Assorbifoglia",
				pt: "Dreno Folha",
				de: "Blattsauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 50,

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
		cardmarket: 407714
	}
}

export default card
