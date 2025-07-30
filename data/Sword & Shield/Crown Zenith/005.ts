import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [465],
	set: Set,

	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Suctioning Vines",
			fr: "Lianes Sangsues",
			es: "Lianas Succionadoras",
			it: "Liane Aspiranti",
			pt: "Vinhas de Sucção",
			de: "Saugranken"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691722
	}
}

export default card