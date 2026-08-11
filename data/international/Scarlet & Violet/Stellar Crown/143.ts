import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leech Seed",
			'fr-fr': "Vampigraine",
			'es-es': "Drenadoras",
			'it-it': "Parassiseme",
			'pt-br': "Semente Sanguessuga",
			'de-de': "Egelsamen"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785997,
				tcgplayer: 567418
			}
		},
	],

	illustrator: "Orca",

}

export default card
