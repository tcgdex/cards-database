import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [830],
	set: Set,

	name: {
		en: "Eldegoss",
		fr: "Blancoton",
		es: "Eldegoss",
		it: "Eldegoss",
		pt: "Eldegoss",
		de: "Cottomi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sunny Wind",
			fr: "Vent Ensoleillé",
			de: "Sonnige Brise",
			es: "Viento Soleado",
			pt: "Vento Ensolarado",
			it: "Vento Solare"
		},

		damage: 50,

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 20 danni."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582092,
		tcgplayer: 253118
	}
}

export default card