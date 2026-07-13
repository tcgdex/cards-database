import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [396],
	set: Set,

	name: {
		en: "Starly",
		fr: "Étourmi",
		es: "Starly",
		it: "Starly",
		pt: "Starly",
		de: "Staralili"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
    {
      type: "holo",
      size: "standard"
    }
  ],

	illustrator: "saino misaki",

	description: {
		en: "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
	},

	thirdParty: {
        cardmarket: 702517,
        tcgplayer: 490079
    }
}

export default card