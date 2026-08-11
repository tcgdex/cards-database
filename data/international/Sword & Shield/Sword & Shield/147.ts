import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Make Do",
				'fr-fr': "Faire Avec",
				'es-es': "Apañárselas",
				'it-it': "Fare a Meno",
				'pt-br': "Quebrar o Galho",
				'de-de': "Notbehelf"
			},
			effect: {
				'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
				'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
				'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
				'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
				'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
				'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assistance Énergétique",
				'es-es': "Asistencia de Energía",
				'it-it': "Assistienergia",
				'pt-br': "Socorro de Energia",
				'de-de': "Energieförderung"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff."
	},

	dexId: [573],

	thirdParty: {
		cardmarket: 436829,
		tcgplayer: 208467
	}
}

export default card
