import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		en: "Crocalor",
		fr: "Crocogril",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Fuecoco",
		fr: "Chochodile"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kantaro",

	thirdParty: {
        cardmarket: 702332,
        tcgplayer: 487877
    }
}

export default card