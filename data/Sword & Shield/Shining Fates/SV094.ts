import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		fr: "Pashmilla",
		en: "Cinccino",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},

	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Chinchidou",
		en: "Minccino"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Faire Avec",
			en: "Make Do",
			es: "Apañárselas",
			it: "Fare a Meno",
			pt: "Quebrar o Galho",
			de: "Notbehelf"
		},

		effect: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			pt: "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
		}
	}],

	attacks: [{
		name: {
			fr: "Assistance Énergétique",
			en: "Energy Assist",
			es: "Asistencia de Energía",
			it: "Assistienergia",
			pt: "Socorro de Energia",
			de: "Energieförderung"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff."
	}
}

export default card
