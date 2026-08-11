import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'es-es': "Mudsdale",
		'it-it': "Mudsdale",
		'pt-br': "Mudsdale",
		'de-de': "Pampross"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		750,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Enhanced Stomp",
				'fr-fr': "Piétinement Amélioré",
				'es-es': "Pisotón Mejorado",
				'it-it': "Superpasso",
				'pt-br': "Pisão Acentuado",
				'de-de': "Spezial-Stampfer"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "High Horsepower",
				'fr-fr': "Cavalerie Lourde",
				'es-es': "Fuerza Equina",
				'it-it': "Forza Equina",
				'pt-br': "Potência Equina",
				'de-de': "Pferdestärke"
			},
			effect: {
				'en-us': "This Pokémon does 40 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 40 dégâts.",
				'es-es': "Este Pokémon se hace 40 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 40 danni a se stesso.",
				'pt-br': "Este Pokémon causa 40 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 40 Schadenspunkte zu."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It spits a mud that provides resistance to both wind and rain, so the walls of old houses were often coated with it.",
	},

	thirdParty: {
		cardmarket: 297691,
		tcgplayer: 130988
	}
}

export default card
