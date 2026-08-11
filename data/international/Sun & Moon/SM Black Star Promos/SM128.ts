import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Alolan Ninetales",
		'fr-fr': "Feunard d’Alola",
		'es-es': "Ninetales de Alola",
		'it-it': "Ninetales di Alola",
		'pt-br': "Ninetales de Alola",
		'de-de': "Alola Vulnona"
	},
	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud’Pattes",
				'es-es': "Patada Destrucción",
				'it-it': "Calcio Esplosivo",
				'pt-br': "Chute Poderoso",
				'de-de': "Schmetterkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale Épuisante",
				'es-es': "Drenaje Espiral",
				'it-it': "Assorbimento Spirale",
				'pt-br': "Dreno Espiral",
				'de-de': "Spiralsauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "Possessing a calm demeanor, this Pokémon was revered as a deity incarnate before it was identified as a regional variant of Ninetales.",
	},
}

export default card
