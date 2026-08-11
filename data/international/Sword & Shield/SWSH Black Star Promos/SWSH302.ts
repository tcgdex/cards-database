import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Sophora",
		'en-us': "Klara",
		'es-es': "Sófora",
		'it-it': "Sofora",
		'pt-br': "Klara",
		'de-de': "Sophora"
	},

	illustrator: "Yuu Nishida",
	rarity: "Promo",
	category: "Trainer",

	effect: {
		'fr-fr': "Choisissez l'une de ces options ou les deux :\n• Ajoutez jusqu'à 2 Pokémon de votre pile de défausse à votre main.\n• Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
		'en-us': "Choose 1 or both:\n• Put up to 2 Pokémon from your discard pile into your hand.\n• Put up to 2 basic Energy cards from your discard pile into your hand.",
		'es-es': "Elige 1 o ambas opciones:\n• Pon hasta 2 Pokémon de tu pila de descartes en tu mano.\n• Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Scegli uno o entrambi gli effetti:\n• Prendi fino a due Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.\n• Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Escolha 1 ou ambas:\n• Coloque até 2 Pokémon da sua pilha de descarte na sua mão.\n• Coloque até 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
		'de-de': "Wähle 1 oder beide aus:\n• Nimm bis zu 2 Pokémon aus deinem Ablagestapel auf deine Hand.\n• Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "E"
}

export default card
