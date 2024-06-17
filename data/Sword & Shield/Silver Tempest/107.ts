import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
		es: "Murkrow",
		it: "Murkrow",
		pt: "Murkrow",
		de: "Kramurx"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Triple Draw",
			fr: "Triple Pioche",
			es: "Triple Robo",
			it: "Pescata Tripla",
			pt: "Compra Tripla",
			de: "Dreifachzug"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Compre 3 cartas.",
			de: "Ziehe 3 Karten."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Callous Wings",
			fr: "Ailes Cruelles",
			es: "Alas Despiadadas",
			it: "Ali Spietate",
			pt: "Asas Impiedosas",
			de: "Kompromisslose Flügel"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Murkrow.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Cornèbre de Banc.",
			es: "Puedes cambiar este Pokémon por 1 de tus Murkrow en Banca.",
			it: "Puoi scambiare questo Pokémon con un Murkrow della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Murkrow no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Kramurx auf deiner Bank austauschen."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card