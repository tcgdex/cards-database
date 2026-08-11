import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [190],
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hang Down",
			fr: "Suspension",
			es: "Prender",
			it: "Tirar Giù",
			pt: "Dependurar",
			de: "Herunterhängen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			es: "Patada Juguetona",
			it: "Calcio Briccone",
			pt: "Chute Brincalhão",
			de: "Verspielter Kick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "Its tail moves with greater dexterity than its hands. Making deft use of this tail, Aipom lives high among the treetops.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769311,
				tcgplayer: 550181
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769311,
				tcgplayer: 550181
			}
		},
	],

	illustrator: "Mugi Hamada",

}

export default card