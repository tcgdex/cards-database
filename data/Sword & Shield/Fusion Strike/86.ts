import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu V",
		fr: "Pikachu V",
		es: "Pikachu V",
		it: "Pikachu V",
		pt: "Pikachu V",
		de: "Pikachu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			de: "Schweifvertrimmer",
			es: "Coletón",
			pt: "Surra de Cauda",
			it: "Codabotta"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			de: "Donnerblitz",
			es: "Rayo",
			pt: "Relâmpago",
			it: "Fulmine"
		},

		damage: 100
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582411,
		tcgplayer: 253241
	}
}

export default card
