import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		en: "Morgrem",
		fr: "Fourbelin",
		es: "Morgrem",
		de: "Pelzebub",
		it: "Morgrem",
		pt: "Morgrem",
		'es-mx': "Morgrem"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		de: "Bähmon",
		it: "Impidimp",
		pt: "Impidimp",
		'es-mx': "Impidimp"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			de: "Leichter Hieb",
			it: "Pugnetto",
			pt: "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			'es-mx': "Patada Devastadora"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Lee HyunJung",

	thirdParty: {
		cardmarket: 817224
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
