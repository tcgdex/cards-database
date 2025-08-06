import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		pt: "Hippowdon",
		it: "Hippowdon",
		de: "Hippoterus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
			es: "Rociado de Arena",
			pt: "Spray de Areia",
			it: "Silicospruzzo",
			de: "Sandspray"
		},

		damage: 90
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			pt: "Aperto de Terra",
			it: "Schiacciaterra",
			de: "Schollenbrecher"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "Kurata So",

	thirdParty: {
		cardmarket: 805442
	}
}

export default card