import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [842],
	set: Set,

	name: {
		en: "Appletun V",
		fr: "Dratatin V",
		es: "Appletun V",
		it: "Appletun V",
		pt: "Appletun V",
		de: "Schlapfel V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	retreat: 3,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Sweet Impact",
			fr: "Impact Douceur",
			de: "Süßer Einschlag",
			es: "Dulce Impacto",
			pt: "Impacto Doce",
			it: "Impatto Dolce"
		},

		damage: 100,

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582095,
		tcgplayer: 253120
	}
}

export default card
