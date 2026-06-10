import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		fr: "Ponchien",
		en: "Herdier",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		fr: "Ponchiot",
		en: "Lillipup",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ruade",
			en: "Rear Kick",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "The black fur that covers this Pokémon's body is dense and springy. Even sharp fangs bounce right off.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725251,
				tcgplayer: 509711,
				cardtrader: 256067
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725251,
				tcgplayer: 509711,
				cardtrader: 256067
			}
		},
	],

	illustrator: "Kariya",

	
}

export default card
