import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		pt: "Pupitar",
		it: "Pupitar",
		de: "Pupitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		pt: "Larvitar",
		it: "Larvitar",
		de: "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
			es: "Rociado de Arena",
			pt: "Spray de Areia",
			it: "Silicospruzzo",
			de: "Sandspray"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello",
			de: "Einhämmern"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shigenori Negishi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805437,
				tcgplayer: 610403
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805437,
				tcgplayer: 610403
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806474,
				tcgplayer: 610570
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806475,
				tcgplayer: 610671
			}
		},
	],
}

export default card
