import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Faux-chage",
				de: "Finte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur ce Pokémon.",
				de: "Wähle 1 der Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Die Schadenspunkte dieses Angriffs werden nicht durch Schwäche, Resistenz, Poké-Powers, Poké-Bodies oder andere dieses Pokémon betreffende Effekte beeinflusst."
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275160
	}
}

export default card
