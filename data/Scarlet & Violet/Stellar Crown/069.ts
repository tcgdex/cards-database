import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		en: "Espathra",
		fr: "Cléopsytra",
		es: "Espathra",
		it: "Espathra",
		pt: "Espathra",
		de: "Psiopatra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		en: "Flittle",
		fr: "Flotillon",
		es: "Flittle",
		it: "Flittle",
		pt: "Flittle",
		de: "Flattutu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psychic Flash",
			fr: "Flash Psy",
			es: "Destello Psíquico",
			it: "Psicoflash",
			pt: "Clarão Psíquico",
			de: "Psycho-Blitz"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785923,
				tcgplayer: 567295
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785923,
				tcgplayer: 567295
			}
		},
	],

	illustrator: "Ryota Murayama",

}

export default card
