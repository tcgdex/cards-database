import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enekoro"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Call",
				fr: "Énergie supplémentaire",
				de: "Energieruf"
			},
			effect: {
				en: "Attach 1 Energy card from your discard pile to your Active Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à votre Pokémon Actif.",
				de: "Nimm eine Energiekarte von deinem Ablagestapel und lege sie an das Aktive Pokémon an."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cannonball",
				fr: "Boulet de canon",
				de: "Kanonenkugel"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to Delcatty but not used to pay for this attack's Energy cost.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée à Delcatty qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Enekoro angelegte Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275653,
		tcgplayer: 84735
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		}
	]
}

export default card
