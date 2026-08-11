import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi",
		'es-es': "Jirachi",
		'it-it': "Jirachi",
		'pt-br': "Jirachi",
		'de-de': "Jirachi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Diminutive Desire",
				'fr-fr': "Infimreket",
				'es-es': "Deseo Diminuto",
				'it-it': "Miniderio",
				'pt-br': "Desejo Diminutivo",
				'de-de': "Winziger Wunsch"
			},
			effect: {
				'en-us': "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				'fr-fr': "Regardez les 7 cartes du dessus de votre deck et ajoutez 1 d'entre elles à votre main. Mélangez les autres cartes avec votre deck.",
				'es-es': "Mira las 7 primeras cartas de tu baraja y pon 1 de ellas en tu mano. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
				'it-it': "Guarda le prime sette carte del tuo mazzo e aggiungi una di esse alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo.",
				'pt-br': "Olhe os 7 cards de cima do seu baralho e coloque 1 deles em sua mão. Embaralhe os demais cards de volta.",
				'de-de': "Schau dir die obersten 7 Karten deines Decks an und nimm 1 auf deine Hand. Mische die anderen Karten anschließend in dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Doom Desire",
				'fr-fr': "Carnareket",
				'es-es': "Deseo Oculto",
				'it-it': "Obbliderio",
				'pt-br': "Desejo Cruel",
				'de-de': "Kismetwunsch"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Défenseur est mis K.O. à la fin du prochain tour de votre adversaire.",
				'es-es': "Descarta todas las Energías unidas a este Pokémon. El Pokémon Defensor queda Fuera de Combate al final del próximo turno de tu rival.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon. Il Pokémon difensore viene messo KO alla fine del prossimo turno del tuo avversario.",
				'pt-br': "Descarte toda a Energia ligada a este Pokémon. O Pokémon Defensor será Nocauteado no final da próxima vez de jogar do seu oponente.",
				'de-de': "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel. Das Verteidigende Pokémon wird am Ende des nächsten Zuges deines Gegners kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "It is said to have the ability to grant any wish for just one week every thousand years.",
	},

	thirdParty: {
		cardmarket: 282710,
		tcgplayer: 98078
	}
}

export default card
