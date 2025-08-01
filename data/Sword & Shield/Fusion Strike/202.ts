import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [113],
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		en: "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Drain Slap",
			fr: "Baffe Sangsue",
			de: "Watschensauger",
			es: "Absorbebofetón",
			pt: "Bofetada Drenagem",
			it: "Sberlassorbimento"
		},

		damage: 30,

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			es: "Bofetada Gentil",
			pt: "Tapinha",
			it: "Schiaffetto"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582877
	}
}

export default card