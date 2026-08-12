import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
		de: "Felilou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Finte"
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon.",
				fr: "Inflige 30 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon ciblé.",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem gewählten Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Rend",
				fr: "Déchirure",
				de: "Reißer"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
				fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wenn auf dem Verteidigenden Pokémon bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 50,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "These Pokémon vanish and appear unexpectedly. Many Trainers are drawn to their beautiful form and fur.",
		de: "Kommt und geht, wann es will. Sein reizendes Aussehen und Fell ziehen Trainer in Scharen an."
	},

	thirdParty: {
		cardmarket: 280030,
		tcgplayer: 86726
	}
}

export default card
