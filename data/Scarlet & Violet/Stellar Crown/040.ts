import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante",
			de: "Wellenplatscher"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785894,
				tcgplayer: 567266
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785894,
				tcgplayer: 567266
			}
		},
	],

	illustrator: "Ryuta Fuse",

}

export default card
