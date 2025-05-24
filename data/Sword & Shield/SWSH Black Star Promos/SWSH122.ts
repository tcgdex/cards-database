import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Pani Kobayashi",
	category: "Pokemon",

	description: {
		en: "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	stage: "Stage1",

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty",
		es: "Flaaffy",
		pt: "Flaaffy",
		it: "Flaaffy"
	},

	rarity: "None",
	dexId: [180],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm",
		es: "Mareep",
		pt: "Mareep",
		it: "Mareep"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dynamotor",
			fr: "Dynamoteur",
			de: "Dynamotor",
			es: "Dinamotor",
			pt: "Dinamotor",
			it: "Dinamotore"
		},

		effect: {
			en: "Once during your turn (before your attack), you may attach a {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie {L} de votre pile de défausse à 1 de vos Pokémon de Banc.",
			de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 {L}-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen.",
			es: "Una vez durante tu turno (antes de tu ataque), puedes unir una carta de Energía {L} de tu pila de descartes a 1 de tus Pokémon en Banca.",
			pt: "Uma vez na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia {L} da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia {L} dalla tua pila degli scarti."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			de: "Elektroball",
			es: "Bola Voltio",
			pt: "Bola Elétrica",
			it: "Energisfera"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card