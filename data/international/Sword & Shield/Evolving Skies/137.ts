import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Braviary",
		'fr-fr': "Gueriaigle",
		'es-es': "Braviary",
		'it-it': "Braviary",
		'pt-br': "Braviary",
		'de-de': "Washakwil"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "SATOSHI NAKAI",

	attacks: [{
		name: {
			'en-us': "Valiant Talons",
			'fr-fr': "Serres Vaillantes",
			'es-es': "Garras Aguerridas",
			'it-it': "Artigli della Baldanza",
			'pt-br': "Valiant Talons",
			'de-de': "Kühne Krallen"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
			'pt-br': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Brave Bird",
			'fr-fr': "Rapace",
			'es-es': "Pájaro Osado",
			'it-it': "Baldeali",
			'pt-br': "Brave Bird",
			'de-de': "Sturzflug"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "This Pokémon also does 50 damage to itself.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [628],

	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	description: {
		'en-us': "Because this Pokémon is hotheaded and belligerent, it's Corviknight that's taken the role of transportation in Galar."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574195,
				tcgplayer: 246877
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574195,
				tcgplayer: 246877
			}
		},
	],
}

export default card
