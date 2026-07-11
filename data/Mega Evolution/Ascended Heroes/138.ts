import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		'es-mx': "Vullaby",
		de: "Skallyk",
		it: "Vullaby",
		pt: "Vullaby"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [629],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			'es-mx': "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		en: "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869749,
			tcgplayer: 675950
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870353,
			tcgplayer: 676961
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870354,
			tcgplayer: 677101
		}
	},
],
}

export default card
