import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "A legend says that its body glows in seven colors. A rainbow is said to form behind it when it flies."
	},

	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		de: "Ho-Oh",
		es: "Ho-Oh",
		it: "Ho-Oh",
		'es-mx': "Ho-Oh"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Sacred Breath",
			fr: "Souffle Sacré",
			de: "Sancto-Odem",
			es: "Aliento Sagrado",
			it: "Soffio Magico",
			'es-mx': "Aliento Sagrado"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. Heal all damage from 1 of your Benched Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Heile allen Schaden bei 1 Pokémon auf deiner Bank.",
			es: "Descarta todas las Energías de este Pokémon. Cura todos los puntos de daño a uno de tus Pokémon en Banca.",
			it: "Scarta tutte le Energie da questo Pokémon. Cura uno dei Pokémon nella tua panchina da tutti i danni.",
			'es-mx': "Descarta todas las Energías de este Pokémon. Cura todos los puntos de daño a 1 de tus Pokémon en Banca."
		},

		cost: ["Fire", "Fire"]
	}, {
		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			de: "Feuerflügel",
			es: "Ala Ígnea",
			it: "Alafiamma",
			'es-mx': "Ala Ígnea"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907618,
				tcgplayer: 716446
			}
		}
	],
}

export default card
