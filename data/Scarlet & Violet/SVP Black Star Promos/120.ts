import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		en: "Pupitar",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	evolveFrom: {
		en: "Larvitar",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Throw",
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Blasting Tackle",
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Shiburingaru",
	description: {
		en: "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 769420,
				tcgplayer: 554189
			},
		}
	],
}

export default card
