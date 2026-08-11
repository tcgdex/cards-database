import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Thievul",
		'fr-fr': "Roublenard",
		'es-es': "Thievul",
		'it-it': "Thievul",
		'pt-br': "Thievul",
		'de-de': "Gaunux"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	illustrator: "Kyoko Umemoto",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fumbling Hands",
			'fr-fr': "Mains Curieuses",
			'es-es': "Manos Titubeantes",
			'it-it': "Frugone",
			'pt-br': "Fumbling Hands",
			'de-de': "Tollpatschige Hände"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have each player shuffle their hand and put it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, each player draws 4 cards.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à chaque joueur de mélanger sa main, puis de la placer en dessous de son deck. Si l'un des joueurs place ainsi au moins une carte en dessous de son deck, chaque joueur pioche 4 cartes.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes hacer que cada jugador baraje las cartas de su mano y las ponga en la parte inferior de su baraja. Si cualquiera de los jugadores pone alguna carta en la parte inferior de su baraja de esta manera, cada jugador roba 4 cartas.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far rimischiare a ciascun giocatore le carte che ha in mano e metterle in fondo al proprio mazzo. Se almeno un giocatore ha messo delle carte in fondo al proprio mazzo in questo modo, ciascun giocatore pesca quattro carte.",
			'pt-br': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have each player shuffle their hand and put it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, each player draws 4 cards.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du beide Spieler veranlassen, ihre Handkarten zu mischen und sie unter ihr Deck zu legen. Wenn ein oder beide Spieler auf diese Weise mindestens 1 Karte unter ihr Deck gelegt haben, zieht jeder Spieler 4 Karten."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Tail Smack",
			'fr-fr': "Coup de Queue",
			'es-es': "Bofetón Cola",
			'it-it': "Codasberla",
			'pt-br': "Tail Smack",
			'de-de': "Schweifschlag"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	dexId: [828],

	evolveFrom: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'it-it': "Nickit",
		'pt-br': "Nickit",
		'de-de': "Kleptifux"
	},

	description: {
		'en-us': "With a lithe body and sharp claws, it goes around stealing food and eggs. Boltund is its natural enemy."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574153,
				tcgplayer: 246904
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574153,
				tcgplayer: 246904
			}
		},
	],
}

export default card
