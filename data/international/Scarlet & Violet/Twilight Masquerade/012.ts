import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [708],
	set: Set,

	name: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	rarity: "Common",
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
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon came to be when the spirit of a deceased child possessed a tree stump. It now wanders the forest searching for friends.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769186,
				tcgplayer: 550056
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769186,
				tcgplayer: 550056
			}
		},
	],

	illustrator: "Katsunori Sato",

}

export default card