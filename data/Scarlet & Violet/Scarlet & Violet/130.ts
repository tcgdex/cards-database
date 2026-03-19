import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [453],
	set: Set,

	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		es: "Croagunk",
		it: "Croagunk",
		pt: "Croagunk",
		de: "Glibunkel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Whap Down",
			fr: "Assommer",
			es: "Zurrar",
			it: "Bastonata",
			pt: "Golpe Ligeiro",
			de: "Verdreschen"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Shiburingaru",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: {
		holo: false
	},

	thirdParty: {
        cardmarket: 702425,
        tcgplayer: 487056
    }
}

export default card