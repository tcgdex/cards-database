import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		725,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Caturday",
				'fr-fr': "Chamedi",
				'es-es': "Sábado Gatuno",
				'it-it': "Giornogatto",
				'pt-br': "Dia de Gato",
				'de-de': "Schnurrtag"
			},
			effect: {
				'en-us': "Draw a card. If you do, this Pokémon is now Asleep.",
				'fr-fr': "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
				'es-es': "Roba 1 carta. Si lo haces, este Pokémon pasa a estar Dormido.",
				'it-it': "Pesca una carta. Se lo fai, questo Pokémon viene addormentato.",
				'pt-br': "Compre 1 carta. Se fizer isto, este Pokémon será Adormecido.",
				'de-de': "Ziehe 1 Karte. Wenn du das machst, schläft dieses Pokémon jetzt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Bite",
				'fr-fr': "Grosse Morsure",
				'es-es': "Gran Mordisco",
				'it-it': "Grande Morso",
				'pt-br': "Mordidona",
				'de-de': "Mächtiger Biss"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If you try too hard to get close to it, it won't open up to you. Even if you do grow close, giving it too much affection is still a no-no.",
	},

	thirdParty: {
		cardmarket: 372318,
		tcgplayer: 189073
	}
}

export default card
