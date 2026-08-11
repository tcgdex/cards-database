import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 80,

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
				'en-us': "Your Dragon Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
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
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
	},

	thirdParty: {
		cardmarket: 363511,
		tcgplayer: 175459
	}
}

export default card
