import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		'en-us': "Espathra",
		'fr-fr': "Cléopsytra",
		'es-es': "Espathra",
		'it-it': "Espathra",
		'pt-br': "Espathra",
		'de-de': "Psiopatra"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Aurora Gain",
			'fr-fr': "Puissance Boréale",
			'es-es': "Ganar Aurora",
			'it-it': "Prendiaurora",
			'pt-br': "Aurora",
			'de-de': "Aurora-Verstärkung"
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
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",
	illustrator: "Sanosuke Sakuma",
	description: {
		'en-us': "It immobilizes opponents by bathing them in psychic power from its large eyes. Despite its appearance, it has a vicious temperament.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 703185,
				tcgplayer: 491185
			},
		}
	],
}

export default card
