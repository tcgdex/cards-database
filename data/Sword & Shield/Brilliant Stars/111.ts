import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [611],
	set: Set,

	name: {
		en: "Fraxure",
		fr: "Incisache",
		es: "Fraxure",
		it: "Fraxure",
		pt: "Fraxure",
		de: "Sharfax"
	},

	illustrator: "Hataya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			pt: "Garra de Dragão",
			de: "Drachenklaue"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",


	description: {
		en: "After battle, this Pokémon carefully sharpens its tusks on river rocks. It needs to take care of its tusks—if one breaks, it will never grow back.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608657,
				tcgplayer: 263832
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608657,
				tcgplayer: 263832
			}
		},
	],
}

export default card
