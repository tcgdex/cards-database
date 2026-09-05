import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		de: "Psiaugon"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
		de: "Psiau"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ear Influence",
				fr: "Influence Otique",
				de: "Ohrenspiel"
			},
			effect: {
				en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
				fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
				de: "Verschiebe beliebig viele Schadensmarken auf den Pokémon deines Gegners in beliebiger Weise auf seine anderen Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Intense silence. Two lamplights. Keep waiting for night to end.",
		de: "Konzentrierte Stille. Zwei Lichter. Warten, dass die Nacht zu Ende geht."
	},

	thirdParty: {
		cardmarket: 288475
	}
}

export default card
