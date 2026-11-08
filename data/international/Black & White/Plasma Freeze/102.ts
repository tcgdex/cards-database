import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Shadow Triad",
		'fr-fr': "Trio des Ombres",
		'es-es': "Trío Sombrío",
		'it-it': "Trio Oscuro",
		'pt-br': "Tríade das Sombras",
		'de-de': "Finstrio"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez une carte de la Team Plasma de votre pile de défausse à votre main.",
		'en-us': "Put a Team Plasma card from your discard pile into your hand.",
		'es-es': "Pon una carta del Equipo Plasma de tu pila de descartes en tu mano.",
		'it-it': "Prendi una carta Team Plasma dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
		'pt-br': "Coloque um card da Equipe Plasma da sua pilha de descarte em sua mão.",
		'de-de': "Nimm 1 Team-Plasma-Karte von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280980,
		tcgplayer: 89096
	}
}

export default card
