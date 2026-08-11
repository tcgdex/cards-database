import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Welder",
		'fr-fr': "Soudeuse",
		'es-es': "Soldadora",
		'it-it': "Saldatrice",
		'pt-br': "Soldadora",
		'de-de': "Schweißer"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Attachez jusqu’à 2 cartes Énergie Fire de votre main à l’un de vos Pokémon. Dans ce cas, piochez 3 cartes.",
		'en-us': "Attach up to 2 Fire Energy cards from your hand to 1 of your Pokémon. If you do, draw 3 cards.",
		'es-es': "Une hasta 2 cartas de Energía Fire de tu mano a 1 de tus Pokémon. Si lo haces, roba 3 cartas.",
		'it-it': "Assegna fino a due carte Energia Fire dalla tua mano a uno dei tuoi Pokémon. Se lo fai, pesca tre carte.",
		'pt-br': "Ligue até 2 cartas de Energia Fire da sua mão a 1 dos seus Pokémon. Se fizer isto, compre 3 cartas.",
		'de-de': "Lege bis zu 2 Fire-Energiekarten aus deiner Hand an 1 deiner Pokémon an. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 372495,
		tcgplayer: 189299
	}
}

export default card
