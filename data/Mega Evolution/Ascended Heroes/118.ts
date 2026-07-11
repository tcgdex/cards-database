import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Rolycoly",
		fr: "Charbi",
		es: "Rolycoly",
		'es-mx': "Rolycoly",
		de: "Klonkett",
		it: "Rolycoly",
		pt: "Rolycoly"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [837],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			'es-mx': "Bofetón Lodo",
			de: "Lehmschelle",
			it: "Fangosberla",
			pt: "Tapa de Lama"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		en: "Chunks of the surface of this Pokémon’s body that have grown old and flaked off have long been used for fuel as an alternative to coal.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869729,
			tcgplayer: 675930
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870321,
			tcgplayer: 676945
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870322,
			tcgplayer: 677085
		}
	},
],
}

export default card
