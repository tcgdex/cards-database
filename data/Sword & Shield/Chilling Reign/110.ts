import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [305],
	set: Set,

	name: {
		en: "Lairon",
		fr: "Galegon",
		es: "Lairon",
		it: "Lairon",
		pt: "Lairon",
		de: "Stollrak"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
		es: "Aron",
		it: "Aron",
		pt: "Aron",
		de: "Stollunior"
	},

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			de: "Metallklaue"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It habitually shows off its strength with the size of sparks it creates by ramming its steel body into boulders."
	},

	thirdParty: {
		cardmarket: 567218
	}
}

export default card