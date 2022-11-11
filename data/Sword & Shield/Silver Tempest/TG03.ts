import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dynamotor",
			fr: "Dynamoteur",
			es: "Dinamotor",
			it: "Dinamotore",
			pt: "Dinamotor",
			de: "Dynamotor"
		},

		effect: {
			en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre pile de défausse à 1 de vos Pokémon de Banc.",
			es: "Una vez durante tu turno (antes de tu ataque), puedes unir una carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
			it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
			pt: "Uma vez na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Lightning da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Lightning-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card