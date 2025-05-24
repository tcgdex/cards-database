import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito ex",
		fr: "Poussacha-ex",
		es: "Sprigatito ex",
		it: "Sprigatito-ex",
		pt: "Sprigatito ex",
		de: "Felori-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
			es: "Hoja Mágica",
			it: "Fogliamagica",
			pt: "Folha Mágica",
			de: "Zauberblatt"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "takuyoa"
}

export default card