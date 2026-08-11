import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cheren's Care",
		'fr-fr': "Attention de Tcheren",
		'es-es': "Cuidados de Cheren",
		'it-it': "Premura di Komor",
		'pt-br': "Cuidado do Cheren",
		'de-de': "Cherens Obhut"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 of your Colorless Pokémon that has any damage counters on it and all attached cards into your hand.",
		'fr-fr': "Ajoutez à votre main l'un de vos Pokémon Colorless ayant au moins un marqueur de dégâts et toutes les cartes attachées.",
		'es-es': "Pon 1 de tus Pokémon Colorless que tenga algún contador de daño y todas las cartas unidas a él en tu mano.",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon Colorless che ha dei segnalini danno e tutte le carte a esso assegnate.",
		'pt-br': "Coloque 1 dos seus Pokémon Colorless que tiver algum contador de dano nele e todas as cartas ligadas a ele na sua mão.",
		'de-de': "Nimm 1 deiner Colorless-Pokémon, auf dem mindestens 1 Schadensmarke liegt, und alle angelegten Karten auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 608723,
				tcgplayer: 263897
			}
		},
	],
}

export default card
