import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		'fr-fr': "Dolman",
		'en-us': "Stonjourner",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	attacks: [{
		name: {
			'fr-fr': "Ultimawashi",
			'en-us': "Mega Kick",
			'es-es': "Megapatada",
			'it-it': "Megacalcio",
			'pt-br': "Megachute",
			'de-de': "Megakick"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Étau Puissant",
			'en-us': "Power Press",
			'es-es': "Constricción Poderosa",
			'it-it': "Vigorstretta",
			'pt-br': "Compressão Poderosa",
			'de-de': "Powerdruck"
		},

		effect: {
			'fr-fr': "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires.",
			'en-us': "If this Pokémon has at least 1 extra Energy attached (in addition to this attack's cost), this attack does 60 more damage.",
			'es-es': "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon ha almeno un'Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 60 danni in più.",
			'pt-br': "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It stands in grasslands, watching the sun's descent from zenith to horizon. This Pokémon has a talent for delivering dynamic kicks."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539763,
				tcgplayer: 232449
			}
		},
	],
}

export default card
