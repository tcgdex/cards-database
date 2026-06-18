import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		en: "Crocalor",
		fr: "Crocogril",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		en: "Fuecoco",
		fr: "Chochodile",
		es: "Fuecoco",
		it: "Fuecoco",
		pt: "Fuecoco",
		de: "Krokel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante",
			de: "Stetiger Feuerhauch"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
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
	illustrator: "Hideki Ishikawa",
	description: {
		en: "The combination of Crocalor's fire energy and overflowing vitality has caused an egg-shaped fireball to appear on the Pokémon's head.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751805,
				tcgplayer: 537981
			},
		}
	],
}

export default card
