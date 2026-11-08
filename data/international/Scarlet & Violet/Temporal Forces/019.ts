import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [781],
	set: Set,

	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
		'de-de': "Moruda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Steel Anchor",
			'fr-fr': "Ancre d'Acier",
			'es-es': "Ancla de Acero",
			'it-it': "Ancora d'Acciaio",
			'pt-br': "Âncora de Aço",
			'de-de': "Stahlanker"
		},

		effect: {
			'en-us': "If you have any {M} Pokémon on your Bench, this attack does 80 more damage.",
			'fr-fr': "Si vous avez au moins un Pokémon {M} sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes algún Pokémon {M} en tu Banca, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai dei Pokémon {M} in panchina, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver algum Pokémon {M} no seu Banco, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du mindestens 1 {M}-Pokémon auf deiner Bank hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760649,
				tcgplayer: 542764
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760649,
				tcgplayer: 542764
			}
		},
	],

	illustrator: "Saya Tsuruta",

}

export default card