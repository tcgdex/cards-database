import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [2],
	set: Set,

	name: {
		fr: "Herbizarre",
		en: "Ivysaur",
		es: "Ivysaur",
		it: "Ivysaur",
		pt: "Ivysaur",
		de: "Bisaknosp"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Vampigraine",
			en: "Leech Seed",
			es: "Drenadoras",
			it: "Parassiseme",
			pt: "Semente Sanguessuga",
			de: "Egelsamen"
		},

		effect: {
			fr: "Soignez 20 dégâts de ce Pokémon.",
			en: "Heal 20 damage from this Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Fouet Lianes",
			en: "Vine Whip",
			es: "Látigo Cepa",
			it: "Frustata",
			pt: "Chicote de Vinha",
			de: "Rankenhieb"
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yuu Nishida",

	thirdParty: {
		cardmarket: 733597
	}
}

export default card