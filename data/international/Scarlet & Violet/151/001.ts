import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		'fr-fr': "Bulbizarre",
		'en-us': "Bulbasaur",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Vampigraine",
			'en-us': "Leech Seed",
			'es-es': "Drenadoras",
			'it-it': "Parassiseme",
			'pt-br': "Semente Sanguessuga",
			'de-de': "Egelsamen"
		},

		effect: {
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'en-us': "Heal 20 damage from this Pokémon.",
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

	description: {
		'en-us': "While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733596,
				tcgplayer: 502552,
				cardtrader: 261065
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733596,
				tcgplayer: 502552,
				cardtrader: 261065
			}
		},
		{
			type: 'normal',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 720365
			}
		},
		{
			type: 'reverse',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 794908
			}
		},
	],

	illustrator: "Yuu Nishida",

	
}

export default card
