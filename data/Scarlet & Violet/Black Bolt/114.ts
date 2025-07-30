import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		de: "Zapplalek",
		it: "Eelektrik",
		pt: "Eelektrik",
		es: "Eelektrik",
		'es-mx': "Eelektrik"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dynamotor",
			fr: "Dynamoteur",
			de: "Dynamotor",
			it: "Dinamotore",
			pt: "Dinamotor",
			es: "Dinamotor",
			'es-mx': "Dinamotor"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			de: "Einmal während deines Zuges kannst du 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia base {L} dalla tua pila degli scarti.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu pila de descartes a 1 de tus Pokémon en Banca."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			de: "Stromball",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			es: "Bola Eléctrica",
			'es-mx': "Bola Eléctrica"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card