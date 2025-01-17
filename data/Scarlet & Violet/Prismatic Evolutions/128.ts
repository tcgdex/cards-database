import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Scoop Up Cyclone",
		fr: "Rappel Cyclone",
		es: "Ciclón Levante",
		pt: "Recolhida Ciclone",
		it: "Mega Recupero",
		de: "Aufwischwirbel"
	},

	rarity: "ACE SPEC Rare",
	category: "Trainer",

	effect: {
		en: "Put 1 of your Pokémon and all attached cards into your hand.",
		fr: "Ajoutez à votre main l'un de vos Pokémon et toutes les cartes qui lui sont attachées.",
		es: "Pon 1 de tus Pokémon y todas las cartas unidas a él en tu mano.",
		pt: "Coloque 1 dos seus Pokémon e todas as cartas ligadas a ele na sua mão.",
		it: "Riprendi in mano uno dei tuoi Pokémon e tutte le carte a esso assegnate.",
		de: "Nimm 1 deiner Pokémon und alle angelegten Karten auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card