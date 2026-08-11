import { Card } from "models/database/card"
import Set from "../Crown Zenith"

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

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Energize",
			'fr-fr': "Énergisant",
			'es-es': "Vigorizar",
			'it-it': "Energizza",
			'pt-br': "Energizar",
			'de-de': "Energiezufuhr"
		},

		effect: {
			'en-us': "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia Lightning da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	description: {
		'en-us': "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691732,
				tcgplayer: 478082
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691732,
				tcgplayer: 478082
			}
		},
	],
}

export default card
