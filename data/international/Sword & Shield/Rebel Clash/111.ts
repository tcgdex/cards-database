import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [874],

	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Kick",
				'fr-fr': "Ultimawashi",
				'es-es': "Megapatada",
				'it-it': "Megacalcio",
				'pt-br': "Megachute",
				'de-de': "Megakick"
			},

			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Press",
				'fr-fr': "Étau Puissant",
				'es-es': "Constricción Poderosa",
				'it-it': "Vigorstretta",
				'pt-br': "Compressão Poderosa",
				'de-de': "Powerdruck"
			},
			effect: {
				'en-us': "If this Pokémon has at least 1 extra Energy attached (in addition to this attack's cost), this attack does 60 more damage.",
				'fr-fr': "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha almeno un'Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 140,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stands in grasslands, watching the sun's descent from zenith to horizon. This Pokémon has a talent for delivering dynamic kicks."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457963,
				tcgplayer: 213203
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457963,
				tcgplayer: 213203
			}
		},
	],
}

export default card
