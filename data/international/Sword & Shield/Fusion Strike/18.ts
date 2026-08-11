import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [736],
	set: Set,

	name: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Asako Ito",

	description: {
		'en-us': "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Energize",
			'fr-fr': "Énergisant",
			'de-de': "Energiezufuhr",
			'es-es': "Vigorizar",
			'pt-br': "Energizar",
			'it-it': "Energizza"
		},

		effect: {
			'en-us': "Attach a {L} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {L} de votre pile de défausse à ce Pokémon.",
			'de-de': "Lege 1 {L}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía {L} de tu pila de descartes a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia {L} da sua pilha de descarte a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia {L} dalla tua pila degli scarti."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'de-de': "Überraschungsangriff",
			'es-es': "Ataque Sorpresa",
			'pt-br': "Ataque Surpresa",
			'it-it': "Attacco a Sorpresa"
		},

		damage: 50,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582064,
				tcgplayer: 253098
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582064,
				tcgplayer: 253098
			}
		},
	],
}

export default card
