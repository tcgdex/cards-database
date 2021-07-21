import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
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
				en: "Future Sight",
				fr: "Prescience",
				es: "Premonición",
				it: "Divinazione",
				pt: "Visão do Futuro",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 4 cards of either player’s deck and put them back in any order.",
				fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
				es: "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
				it: "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell’ordine che preferisci.",
				pt: "Olhe as 4 primeiras cartas do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
				de: "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Doom News",
				fr: "Nouvelles Sinistres",
				es: "Noticias Trágicas",
				it: "Notizie Avverse",
				pt: "Notícia Sinistra",
				de: "Verhängnisvolle Neuigkeiten"
			},
			effect: {
				en: "Put all Energy attached to this Pokémon into your hand. At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out.",
				fr: "Placez toutes les Énergies attachées à ce Pokémon dans votre main. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
				es: "Pon todas las Energías unidas a este Pokémon en tu mano. Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
				it: "Riprendi in mano tutte le Energie assegnate a questo Pokémon. Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
				pt: "Coloque todas as Energias ligadas a este Pokémon na sua mão. O Pokémon Defensor será Nocauteado no final da próxima vez de jogar do seu oponente.",
				de: "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand. Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
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



}

export default card
