import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Cheren's Care",
		fr: "Attention de Tcheren",
		es: "Cuidados de Cheren",
		it: "Premura di Komor",
		pt: "Cuidado do Cheren",
		de: "Cherens Obhut"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Put 1 of your Colorless Pokémon that has any damage counters on it and all attached cards into your hand.",
		fr: "Ajoutez à votre main l'un de vos Pokémon Colorless ayant au moins un marqueur de dégâts et toutes les cartes attachées.",
		es: "Pon 1 de tus Pokémon Colorless que tenga algún contador de daño y todas las cartas unidas a él en tu mano.",
		it: "Riprendi in mano uno dei tuoi Pokémon Colorless che ha dei segnalini danno e tutte le carte a esso assegnate.",
		pt: "Coloque 1 dos seus Pokémon Colorless que tiver algum contador de dano nele e todas as cartas ligadas a ele na sua mão.",
		de: "Nimm 1 deiner Colorless-Pokémon, auf dem mindestens 1 Schadensmarke liegt, und alle angelegten Karten auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608680
	}
}

export default card