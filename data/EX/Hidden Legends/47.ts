import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur",
		de: "Seejong"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Super Icy Wind",
				fr: "Vent super glacial",
				de: "Super Icy Wind"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Reistance"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud'krane",
				de: "Skull Bash"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276121,
		tcgplayer: 89029
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
