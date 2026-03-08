import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti",
		de: "Kussilla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		238,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Kiss",
				fr: "Bisou d'énergie",
				de: "Energy Kiss"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards on the Defending Pokémon. This attack does 10 damage times the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon Défenseur. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip a number of coins equal to the number of Energy cards attached to the Defending Pokémon. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	thirdParty: {
		cardmarket: 275134,
		tcgplayer: 89360
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
