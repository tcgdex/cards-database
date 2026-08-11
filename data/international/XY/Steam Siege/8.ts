import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Yanmega BREAK",
		'fr-fr': "Yanmega TURBO",
		'es-es': "Yanmega TURBO",
		'it-it': "Yanmega TURBO",
		'pt-br': "Yanmega TURBO",
		'de-de': "Yanmega-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Barrier Break",
				'fr-fr': "Brise Barrière",
				'es-es': "Rotura Barrera",
				'it-it': "Infrangibarriera",
				'pt-br': "Quebra-barreira",
				'de-de': "Barrierebrecher"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Os danos deste ataque não são afetados por Fraqueza, Resistência ou qualquer outro efeito no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieses Angriffs wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 100,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291515,
		tcgplayer: 120997
	}
}

export default card
