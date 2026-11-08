import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fight Song",
				'fr-fr': "Hymne au Combat",
				'es-es': "Canción Bélica",
				'it-it': "Fanfara",
				'pt-br': "Canção de Combate",
				'de-de': "Angriffsarie"
			},
			effect: {
				'en-us': "Your Dragon Pokémon’s attacks do 20 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tus Pokémon Dragon hacen 20 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi dei tuoi Pokémon Dragon infliggono 20 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques do seu Pokémon Dragon causam 20 de danos adicionais ao Pokémon Ativo (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Die Angriffe deiner Dragon-Pokémon fügen den Aktiven Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissement",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280739,
		tcgplayer: 83521
	}
}

export default card
