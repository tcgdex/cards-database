import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
		de: "Draschel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bagon",
		fr: "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Granite Head",
				fr: "Tête de granit",
				de: "Granite Head"
			},
			effect: {
				en: "Damage done to Shelgon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance) during your opponent's next turn.",
				fr: "Les dégâts infligés à Drackhaus par une attaque de votre adversaire sont réduits de 10 lors du prochain tour de votre adversaire (après application de la Faiblesse et de la Résistance).",
				de: "Damage done to Shelgon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance) during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Enflammer",
				de: "Flare"
			},

			damage: 40,

		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 89124,
		cardmarket: 275897
	}
}

export default card
