import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Miracle Headset",
		'fr-fr': "Casque Miracle",
		'es-es': "Auriculares Milagrosos",
		'it-it': "Cuffie Prodigiose",
		'pt-br': "Fone de Ouvido Milagroso",
		'de-de': "Wunder-Headset"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 2 Supporter cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 2 cartes Supporter de votre pile de défausse à votre main.",
		'es-es': "Pon hasta 2 cartas de Partidario de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a due carte Aiuto dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque até 2 cartas de Apoiador da sua pilha de descarte na sua mão.",
		'de-de': "Nimm bis zu 2 Unterstützerkarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794556,
				tcgplayer: 590007
			}
		},
	],

	illustrator: "inose yukie",

}

export default card
