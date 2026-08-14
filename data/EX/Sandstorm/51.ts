import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [156],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
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
				en: "Burning Claw",
				fr: "Griffe brûlante",
				de: "Feuerklaue"
			},
			effect: {
				en: "You may discard a Fire Energy card attached to Quilava. If you do, the Defending Pokémon is now Burned.",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Feurisson. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Du kannst eine {R}-Energiekarte, die an Igelavar angelegt ist, auf den Ablagestapel legen. Wenn du das machst, ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275828,
				tcgplayer: 88482
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275828,
				tcgplayer: 88482
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125131
			}
		},
	],

}

export default card
