import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Gastrodon",
		'fr-fr': "Tritosor",
		'es-es': "Gastrodon",
		'it-it': "Gastrodon",
		'pt-br': "Gastrodon",
		'de-de': "Gastrodon"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
		'es-es': "Shellos",
		'it-it': "Shellos",
		'pt-br': "Shellos",
		'de-de': "Schalellos"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sticky Shot",
				'fr-fr': "Coup Gluant",
				'es-es': "Disparo Pegajoso",
				'it-it': "Viscocolpo",
				'pt-br': "Tiro Grudento",
				'de-de': "Klebriger Schuss"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus, et son Coût de Retraite est augmenté de Colorless.",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore costano Colorless in più e il suo costo di ritirata aumenta di Colorless.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, o custo dos ataques do Pokémon Defensor será Colorless maior e o seu Custo para Recuar será Colorless maior.",
				'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Angriffskosten und die Rückzugskosten des Verteidigenden Pokémon um Colorless."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d'Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It apparently had a huge shell for protection in ancient times. It lives in shallow tidal pools.",
	},

	thirdParty: {
		cardmarket: 291565,
		tcgplayer: 121016
	}
}

export default card
