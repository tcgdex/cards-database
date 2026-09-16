import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Comfey",
		fr: "Guérilande",
		de: "Curelei",
		es: "Comfey",
		it: "Comfey",
		'es-mx': "Comfey"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Comforting Aroma",
			fr: "Arôme Réconfortant",
			de: "Kurierendes Aroma",
			es: "Aroma Reconfortante",
			it: "Aroma Confortante",
			'es-mx': "Aroma Reconfortante"
		},

		effect: {
			en: "Heal 80 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 80 dégâts de l'un de vos Pokémon de Banc.",
			de: "Heile 80 Schadenspunkte bei 1 Pokémon auf deiner Bank.",
			es: "Cura 80 puntos de daño a uno de tus Pokémon en Banca.",
			it: "Cura uno dei Pokémon nella tua panchina da 80 danni.",
			'es-mx': "Cura 80 puntos de daño a 1 de tus Pokémon en Banca."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			de: "Magischer Schuss",
			es: "Disparo Mágico",
			it: "Magicolpo",
			'es-mx': "Disparo Mágico"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card