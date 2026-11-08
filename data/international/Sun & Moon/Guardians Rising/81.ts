import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'es-es': "Premonición",
				'it-it': "Divinazione",
				'pt-br': "Visão do Futuro",
				'de-de': "Seher"
			},
			effect: {
				'en-us': "Look at the top 4 cards of either player’s deck and put them back in any order.",
				'fr-fr': "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
				'es-es': "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
				'it-it': "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell’ordine che preferisci.",
				'pt-br': "Olhe as 4 primeiras cartas do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
				'de-de': "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Doom News",
				'fr-fr': "Nouvelles Sinistres",
				'es-es': "Noticias Trágicas",
				'it-it': "Notizie Avverse",
				'pt-br': "Notícia Sinistra",
				'de-de': "Verhängnisvolle Neuigkeiten"
			},
			effect: {
				'en-us': "Put all Energy attached to this Pokémon into your hand. At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out.",
				'fr-fr': "Placez toutes les Énergies attachées à ce Pokémon dans votre main. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
				'es-es': "Pon todas las Energías unidas a este Pokémon en tu mano. Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
				'it-it': "Riprendi in mano tutte le Energie assegnate a questo Pokémon. Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
				'pt-br': "Coloque todas as Energias ligadas a este Pokémon na sua mão. O Pokémon Defensor será Nocauteado no final da próxima vez de jogar do seu oponente.",
				'de-de': "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand. Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
			},

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
		'en-us': "Long ago, superstitions were spread about it, saying it brought disaster. This fed a hatred of it, and it was driven deep into the mountains.",
	},

	thirdParty: {
		cardmarket: 297693,
		tcgplayer: 130993
	}
}

export default card
