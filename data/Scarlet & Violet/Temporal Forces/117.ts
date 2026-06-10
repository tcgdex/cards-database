import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 120
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Iron Bash",
			fr: "Coup de Fer",
			es: "Ferropuño",
			it: "Pugni Ferrei",
			pt: "Pancada de Ferro",
			de: "Eisenwumme"
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		en: "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760747,
				tcgplayer: 542861
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760747,
				tcgplayer: 542861
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card
