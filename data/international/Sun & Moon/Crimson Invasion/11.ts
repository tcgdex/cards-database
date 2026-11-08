import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
		'es-es': "Gogoat",
		'it-it': "Gogoat",
		'pt-br': "Gogoat",
		'de-de': "Chevrumm"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sap Sipper",
				'fr-fr': "Herbivore",
				'es-es': "Herbívoro",
				'it-it': "Mangiaerba",
				'pt-br': "Engolidor de Seiva",
				'de-de': "Vegetarier"
			},
			effect: {
				'en-us': "This Pokémon’s attacks do 80 more damage to your opponent’s Grass Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de ce Pokémon infligent 80 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de este Pokémon hacen 80 puntos de daño más a los Pokémon Grass de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi di questo Pokémon infliggono 80 danni in più ai Pokémon Grass del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques deste Pokémon causam 80 pontos de dano a mais aos Pokémon Grass do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Die Attacken dieses Pokémon fügen den Grass-Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Leech",
				'fr-fr': "Encornebois",
				'es-es': "Asta Drenaje",
				'it-it': "Legnicorno",
				'pt-br': "Chifre Sugador",
				'de-de': "Holzgeweih"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can tell how its trainer is feeling by subtle shifts in the grip on its horns. This empathetic sense lets them run as if one being.",
	},

	thirdParty: {
		cardmarket: 311861,
		tcgplayer: 149032
	}
}

export default card
