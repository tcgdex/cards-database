import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'fr-fr': "Léviator",
		'en-us': "Gyarados",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Magicarpe",
		'en-us': "Magikarp",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "L'Indomptable",
			'en-us': "Untamed One",
			'es-es': "Indomable",
			'it-it': "Fuori Controllo",
			'pt-br': "O Indomável",
			'de-de': "Unzähmbar"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous devez défausser les 5 cartes du dessus de votre deck.",
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you must discard the top 5 cards of your deck.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, debes descartar las 5 primeras cartas de tu baraja.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, devi scartare le prime cinque carte del tuo mazzo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você deverá descartar as 5 cartas de cima do seu baralho.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, musst du die obersten 5 Karten deines Decks auf deinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Ultralaser",
			'en-us': "Hyper Beam",
			'es-es': "Hiperrayo",
			'it-it': "Iper Raggio",
			'pt-br': "Hiper-raio",
			'de-de': "Hyperstrahl"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733725,
				tcgplayer: 516693,
				cardtrader: 261232
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733725,
				tcgplayer: 516693,
				cardtrader: 261232
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
