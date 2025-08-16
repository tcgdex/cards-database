import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		de: "Tropius"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Fresh-Picked Fruit",
			fr: "Fruit Frais",
			es: "Fruta Fresca",
			it: "Frutto Appena Colto",
			pt: "Fruta Fresca",
			de: "Frisches Obst"
		},

		effect: {
			en: "Heal 60 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 60 dégâts de l'un de vos Pokémon de Banc.",
			es: "Cura 60 puntos de daño a uno de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da 60 danni.",
			pt: "Cure 60 pontos de dano de 1 dos seus Pokémon no Banco.",
			de: "Heile 60 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			es: "Hoja Afilada",
			it: "Foglielama",
			pt: "Folha Navalha",
			de: "Rasierblatt"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "aoki",

	thirdParty: {
		cardmarket: 702304
	}
}

export default card
