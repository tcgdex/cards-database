import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Vengeance",
				fr: "Grosse vengeance",
				de: "Rock Vengeance"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on all of your Active Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur vos Pokémon Actifs.",
				de: "Does 20 damage plus 10 more damage for each each damage counter on all of your Active Pokémon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				fr: "Éboulement",
				de: "Rock Slide"
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à deux des Pokémon du banc de votre adversaire (ou un s'il n'y en a qu'un). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Does 20 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 4,

	thirdParty: {
		tcgplayer: 85826,
		cardmarket: 275882
	}
}

export default card
