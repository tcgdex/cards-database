import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [103],

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Head Crack",
				'fr-fr': "Fracture Crânienne",
				'es-es': "Cabeza Quebrada",
				'it-it': "Rompitesta",
				'pt-br': "Quebra-coco",
				'de-de': "Kopfknacker"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
				'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Each of its three heads has its own thoughts. When they want to go in different directions, Exeggutor becomes unable to move."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511445,
				tcgplayer: 226365
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511445,
				tcgplayer: 226365
			}
		},
	],
}

export default card
