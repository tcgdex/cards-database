import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",
	illustrator: "OKACHEKE",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dynamotor",
			fr: "Dynamoteur",
			es: "Dinamotor",
			it: "Dinamotore",
			pt: "Dynamotor",
			de: "Dynamotor"
		},

		effect: {
			en: "Once during your turn, you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Lightning de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
			pt: "Once during your turn, you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Lightning-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Electro Ball",
			de: "Elektroball"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	description: {
		en: "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	dexId: [180],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574079
	}
}

export default card
