import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		'en-us': "Toedscruel",
		'fr-fr': "Terracruel",
		'es-es': "Toedscruel",
		'it-it': "Toedscruel",
		'pt-br': "Toedscruel",
		'de-de': "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'es-es': "Megaagotar",
			'it-it': "Megassorbimento",
			'pt-br': "Megadreno",
			'de-de': "Megasauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Whip Smash",
			'fr-fr': "Frappe Fouet",
			'es-es': "Golpe Látigo",
			'it-it': "Frustata Devastante",
			'pt-br': "Chicote Esmagador",
			'de-de': "Peitschenschlag"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785871,
				tcgplayer: 567244
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785871,
				tcgplayer: 567244
			}
		},
	],

	illustrator: "DOM",

}

export default card
