import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [450],
	set: Set,

	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'pt-br': "Hippowdon",
		'it-it': "Hippowdon",
		'de-de': "Hippoterus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'pt-br': "Hippopotas",
		'it-it': "Hippopotas",
		'de-de': "Hippopotas"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Sand Spray",
			'fr-fr': "Jet Sableux",
			'es-es': "Rociado de Arena",
			'pt-br': "Spray de Areia",
			'it-it': "Silicospruzzo",
			'de-de': "Sandspray"
		},

		damage: 90
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'pt-br': "Aperto de Terra",
			'it-it': "Schiacciaterra",
			'de-de': "Schollenbrecher"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
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
