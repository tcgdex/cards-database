import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor Laventon",
		'fr-fr': "Professeur Lavande",
		'es-es': "Profesor Lavender",
		'it-it': "Professor Laven",
		'pt-br': "Professor Alfazema",
		'de-de': "Prof. Laven"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 3 Pokémon that have \"Hisuian\" in their names from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 3 Pokémon ayant \" de Hisui \" dans leur nom, de votre pile de défausse à votre main.",
		'es-es': "Pon hasta 3 Pokémon que tengan \"de Hisui\" en su nombre de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a tre Pokémon che hanno \"di Hisui\" nel nome dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		'pt-br': "Coloque até 3 Pokémon que tenham \"de Hisui\" no seu nome da sua pilha de descarte na sua mão.",
		'de-de': "Nimm bis zu 3 Pokémon, bei denen \"Hisui\" zum Namen gehört, aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682209,
				tcgplayer: 451810
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682209,
				tcgplayer: 451810
			}
		},
	],
}

export default card
