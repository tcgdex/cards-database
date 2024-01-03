import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
		de: "Elektek"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Punch",
				de: "Boxhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoir Pokémon ou tout autre effet sur le Pokémon Défenseur.",
				de: "Die Schadenspunkte aus diesem Angriff werden von der Schwäche, Resistenz, Pokémon-Power oder allen anderen Effekten auf das verteidigende Pokémon nicht beeinflusst."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "De l'électricité parcourt son corps sous sa peau. Dans le noir, il brille d'un éclat bleu."
	}
}

export default card
