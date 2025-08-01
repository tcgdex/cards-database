import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Volo",
		fr: "Percupio",
		es: "Volus",
		it: "Ethelo",
		pt: "Volo",
		de: "Volo"
	},

	rarity: "Holo Rare",
	category: "Trainer",

	effect: {
		en: "Discard 1 of your Benched Pokémon V and all attached cards.",
		fr: "Défaussez l'un de vos Pokémon-V de Banc et toutes les cartes attachées.",
		es: "Descarta 1 de tus Pokémon V en Banca y todas las cartas unidas a él.",
		it: "Scarta uno dei tuoi Pokémon-V in panchina e tutte le carte a esso assegnate.",
		pt: "Descarte 1 dos seus Pokémon V no Banco e todas as cartas ligadas a ele.",
		de: "Lege 1 Pokémon-V auf deiner Bank und alle angelegten Karten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 670825
	}
}

export default card
