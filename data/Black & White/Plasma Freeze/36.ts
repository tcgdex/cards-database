import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
		de: "Lampi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Special Tackle",
				fr: "Charge Spéciale",
				de: "Spezial-Tackle"
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wenn an dieses Pokémon bereits Spezial-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extreme Current",
				fr: "Courant Extrême",
				de: "Extreme Strömung"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Lanturn's light can shine up from great depths. It is nicknamed \"The Deep-Sea Star.\"",
		de: "Lanturns Licht kann aus großen Tiefen heraufscheinen. Man nennt es auch „Tiefseestern“."
	},

	thirdParty: {
		cardmarket: 280914,
		tcgplayer: 86612
	}
}

export default card
