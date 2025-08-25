import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		fr: "Mewtwo V",
		de: "Mewtu V",
		es: "Mewtwo V",
		pt: "Mewtwo V",
		it: "Mewtwo V",
		en: "Mewtwo V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Super Psy",
			de: "Super-Psischlag",
			es: "Superrayo Psi",
			pt: "Super-raio Psíquico",
			it: "Superpsico",
			en: "Super Psy Bolt"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Rupture Transfert",
			de: "Transferbruch",
			es: "Golpe Traspaso",
			pt: "Transferência Intensa",
			it: "Sfondatransfer",
			en: "Transfer Break"
		},

		effect: {
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 572159
	}
}

export default card