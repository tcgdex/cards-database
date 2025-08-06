import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Shadow Triad",
		fr: "Trio des Ombres",
		es: "Trío Sombrío",
		it: "Trio Oscuro",
		pt: "Tríade das Sombras",
		de: "Finstrio"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Ajoutez une carte de la Team Plasma de votre pile de défausse à votre main.",
		en: "Put a Team Plasma card from your discard pile into your hand.",
		es: "Pon una carta del Equipo Plasma de tu pila de descartes en tu mano.",
		it: "Prendi una carta Team Plasma dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
		pt: "Coloque um card da Equipe Plasma da sua pilha de descarte em sua mão.",
		de: "Nimm 1 Team-Plasma-Karte von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280980,
		tcgplayer: 89096
	}
}

export default card
