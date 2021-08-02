import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Blancoton",
		en: "Eldegoss",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Tournicoton",
		en: "Gossifleur"
	},

	attacks: [{
		name: {
			fr: "Graines Fortifiantes",
			en: "Enriching Seeds",
			es: "Semillas Nutritivas",
			it: "Semi Nutrienti",
			pt: "Sementes Terapêuticas",
			de: "Anreichernde Saat"
		},

		effect: {
			fr: "Soignez tous les dégâts de l’un de vos Pokémon de Banc.",
			en: "Heal all damage from 1 of your Benched Pokémon.",
			es: "Cura todos los puntos de daño a 1 de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			pt: "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			de: "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Attaque Surprise",
			en: "Surprise Attack",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			de: "Überraschungsangriff"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
