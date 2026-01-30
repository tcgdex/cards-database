import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		de: "Altaria"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
				fr: "Rune protectrice",
				de: "Safeguard"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Altaria by your opponent's Pokémon-ex.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Altaria par le Pokémon-ex de votre adversaire.",
				de: "Prevent all effects of attacks, including damage done to Altaria by your opponent's Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Double Wing Attack",
				fr: "Double cru-aile",
				de: "Double Wing Attack"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				de: "Does 20 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
				de: "Dive"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 83514,
		cardmarket: 276404
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
