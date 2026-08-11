import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'es-es': "Tyranitar",
		'de-de': "Despotar",
		'it-it': "Tyranitar",
		'pt-br': "Tyranitar",
		'es-mx': "Tyranitar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'de-de': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'es-mx': "Pupitar"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Daunting Gaze",
			'fr-fr': "Regard Patibulaire",
			'es-es': "Mirada Opresiva",
			'de-de': "Einschüchternder Blick",
			'it-it': "Sguardo Minaccioso",
			'pt-br': "Olhar Opressor",
			'es-mx': "Mirada Opresiva"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Item cards from their hand.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto de su mano.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Itemkarten aus seiner Hand spielen.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Item da mão dele.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto de su mano."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Cracking Stomp",
			'fr-fr': "Piétinement Écrasant",
			'es-es': "Pisotón Quebrantador",
			'de-de': "Demolierender Stampfer",
			'it-it': "Spaccapestone",
			'pt-br': "Pisoteada Demolidora",
			'es-mx': "Pisotón Quebrantador"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "AKIRA EGAWA",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817247,
				tcgplayer: 623522
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817247,
				tcgplayer: 623522
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851019,
			}
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
