import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		'es-mx': "Haunter",
		de: "Alpollo",
		it: "Haunter",
		pt: "Haunter"
	},

	illustrator: "Rianti Hidayat",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [93],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869735,
			tcgplayer: 675936
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869735,
			tcgplayer: 675936
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870331,
			tcgplayer: 676950
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870332,
			tcgplayer: 677090
		}
	},
],
}

export default card