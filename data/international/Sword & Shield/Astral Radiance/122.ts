import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [216],
	set: Set,

	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'es-es': "Teddiursa",
		'it-it': "Teddiursa",
		'pt-br': "Teddiursa",
		'de-de': "Teddiursa"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gather Food",
			'fr-fr': "Approvisionnement",
			'es-es': "Avituallamiento",
			'it-it': "Raccolta di Cibo",
			'pt-br': "Catar Comida",
			'de-de': "Futter sammeln"
		},

		effect: {
			'en-us': "Flip a coin. If heads, put an Item card from your discard pile into your hand.",
			'fr-fr': "Lancez une pièce. Si c'est face, ajoutez une carte Objet de votre pile de défausse à votre main.",
			'es-es': "Lanza 1 moneda. Si sale cara, pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Lancia una moneta. Se esce testa, prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Jogue 1 moeda. Se sair cara, coloque 1 carta de Item da sua pilha de descarte na sua mão.",
			'de-de': "Wirf 1 Münze. Nimm bei Kopf 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'es-es': "Hundir Garras",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'de-de': "Schaufelkrallen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It licks its paws because of the sweet honey that has soaked into them. It is cunning, stealing into the nests of Combee and taking for itself the honey that the Combee have amassed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658783,
				tcgplayer: 272359
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658783,
				tcgplayer: 272359
			}
		},
	],
}

export default card
