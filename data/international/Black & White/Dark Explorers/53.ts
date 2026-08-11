import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptéra",
		'es-es': "Aerodactyl",
		'it-it': "Aerodactyl",
		'pt-br': "Aerodactyl",
		'de-de': "Aerodactyl"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ancient Scream",
				'fr-fr': "Cri Préhistorique",
				'es-es': "Grito Prehistórico",
				'it-it': "Urloantico",
				'pt-br': "Grito Ancestral",
				'de-de': "Urzeitschrei"
			},
			effect: {
				'en-us': "Your Pokémon’s attacks do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tus Pokémon hacen 10 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi dei tuoi Pokémon infliggono 10 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques do seu Pokémon causam 10 de danos extras ao Pokémon Ativo (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Die Angriffe deiner Pokémon fügen den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades.",
	},

	thirdParty: {
		cardmarket: 280381,
		tcgplayer: 83471
	}
}

export default card
