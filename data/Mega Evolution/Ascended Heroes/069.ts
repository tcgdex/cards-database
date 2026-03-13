import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Iono's Tadbulb",
		fr: "Têtampoule de Mashynn",
		es: "Tadbulb de e-Nigma",
		'es-mx': "Tadbulb de e-Nigma",
		de: "Enigmaras Blipp",
		it: "Tadbulb di Kissara",
		pt: "Tadbulb da Kissera"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			es: "Carga Diminuta",
			'es-mx': "Minicarga",
			de: "Mini-Stromstoß",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869680,
			tcgplayer: 675881
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869680,
			tcgplayer: 675881
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870245,
			tcgplayer: 676907
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870246,
			tcgplayer: 677047
		}
	},
],
}

export default card
