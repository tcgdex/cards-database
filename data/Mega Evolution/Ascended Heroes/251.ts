import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito ex",
		fr: "Poussacha-ex",
		es: "Sprigatito ex",
		'es-mx': "Sprigatito ex",
		de: "Felori-ex",
		it: "Sprigatito-ex",
		pt: "Sprigatito ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
			'es-mx': "Arañazo",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Magical Leaf",
			fr: "Feuille Magik",
			es: "Hoja Mágica",
			'es-mx': "Hojas Mágicas",
			de: "Zauberblatt",
			it: "Fogliamagica",
			pt: "Folha Mágica"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 676063,
		cardmarket: 869862
	}
}

export default card