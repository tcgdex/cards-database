import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		'es-mx': "Dratini",
		de: "Dratini",
		it: "Dratini",
		pt: "Dratini"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869761,
			tcgplayer: 675962
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870369,
			tcgplayer: 676969
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870370,
			tcgplayer: 677109
		}
	},
],
}

export default card
