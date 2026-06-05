import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		fr: "Crocogril",
		en: "Crocalor",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		fr: "Chochodile",
		en: "Fuecoco",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Crachage de Feu Régulier",
			en: "Steady Firebreathing",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante",
			de: "Stetiger Feuerhauch"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Mégaphone",
			en: "Hyper Voice",
			es: "Vozarrón",
			it: "Granvoce",
			pt: "Hipervoz",
			de: "Schallwelle"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Hitoshi Ariga",

	description: {
		en: "The combination of Crocalor's fire energy and overflowing vitality has caused an egg-shaped fireball to appear on the Pokémon's head.",
	},

	thirdParty: {
		cardmarket: 715510
	}
}

export default card