import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius",
		it: "Tropius",
		es: "Tropius",
		pt: "Tropius"
	},

	illustrator: "aoki",
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
			de: "Frisches Obst",
			it: "Frutto Appena Colto",
			es: "Fruta Fresca",
			pt: "Fruta Fresca"
		},

		effect: {
			en: "Heal 60 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 60 dégâts de l'un de vos Pokémon de Banc.",
			de: "Heile 60 Schadenspunkte bei 1 Pokémon auf deiner Bank.",
			it: "Cura uno dei tuoi Pokémon in panchina da 60 danni.",
			es: "Cura 60 puntos de daño a uno de tus Pokémon en Banca.",
			pt: "Cure 60 pontos de dano de 1 dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			de: "Rasierblatt",
			it: "Foglielama",
			es: "Hoja Afilada",
			pt: "Folha Navalha"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card