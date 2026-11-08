import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Penny",
		'fr-fr': "Pania",
		'es-es': "Noa",
		'it-it': "Penny",
		'de-de': "Cosima",
		'pt-br': "Penélope"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 of your Basic Pokémon and all attached cards into your hand.",
		'fr-fr': "Ajoutez à votre main l'un de vos Pokémon de base et toutes les cartes qui lui sont attachées.",
		'es-es': "Pon 1 de tus Pokémon Básicos y todas las cartas unidas a él en tu mano.",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon Base e tutte le carte a esso assegnate.",
		'de-de': "Nimm 1 deiner Basis-Pokémon und alle angelegten Karten auf deine Hand.",
		'pt-br': "Coloque 1 dos seus Pokémon Básicos e todas as cartas ligadas a ele na sua mão."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751786,
				tcgplayer: 535108,
				cardtrader: 274423
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
