import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Coinçage",
				'es-es': "Arrinconar",
				'it-it': "Trappola",
				'pt-br': "Quina",
				'de-de': "Bedrängen"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Night Claw",
				'fr-fr': "Griffe Nocturne",
				'es-es': "Garra Nocturna",
				'it-it': "Artiglio Notte",
				'pt-br': "Garra Noturna",
				'de-de': "Nachtklaue"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez 2 Énergies attachées à ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cruz, descarta 2 Energías unidas a este Pokémon.",
				'it-it': "Lancia una moneta. Se esce croce, scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Jogue uma moeda. Se sair coroa, descarte 2 Energias ligadas a este Pokémon.",
				'de-de': "Wirf 1 Münze. Lege bei \"Zahl\" 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
	},

	thirdParty: {
		cardmarket: 281410,
		tcgplayer: 90756
	}
}

export default card
