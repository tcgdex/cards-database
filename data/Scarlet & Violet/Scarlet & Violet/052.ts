import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [912],
	set: Set,

	name: {
		en: "Quaxly",
		fr: "Coiffeton",
		es: "Quaxly",
		it: "Quaxly",
		pt: "Quaxly",
		de: "Kwaks"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Kick",
			fr: "Koud'Pied",
			es: "Patada",
			it: "Calcio",
			pt: "Chute",
			de: "Tritt"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
    {
      type: "normal",
      size: "standard"
    },
    {
      type: "reverse",
      size: "standard"
    }
  ],

	illustrator: "Mizue",

	description: {
		en: "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime.",
	},

	thirdParty: {
        cardmarket: 689765,
        tcgplayer: 475419
    }
}

export default card