import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [450],
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
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		pt: "Hippopotas",
		it: "Hippopotas",
		de: "Hippopotas"
	},
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805442,
				tcgplayer: 610408
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805442,
				tcgplayer: 610408
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806482,
				tcgplayer: 610574
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806483,
				tcgplayer: 610675
			}
		},
	],
}

export default card
