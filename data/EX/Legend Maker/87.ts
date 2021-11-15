import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Flygon ex",
		fr: "Libegon ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge Charge",
				fr: "Recharge émergeante"
			},
			effect: {
				en: "Once during your turn, when you play Flygon ex from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Energy cards and attach them to Flygon ex.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Libegon ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Énergie et les attacher à Libegon ex."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Reactive Blast",
				fr: "Explosion réactive"
			},
			effect: {
				en: "You may discard any number of React Energy cards attached to Flygon ex. If you do, this attack does 40 damage plus 30 more damage for each React Energy card you discarded.",
				fr: "Vous pouvez défausser autant de cartes Énergie réaction attachées à Libegon ex que vous voulez. Cette attaque inflige alors 40 dégâts plus 30 dégâts supplémentaires pour chaque carte Énergie réaction défaussée."
			},
			damage: "40+",

		},
		{
			cost: [ 'Grass', 'Lightning', 'Colorless', 'Colorless', 'Colorless' ],
			name: { fr: 'Griffe de dragon' },
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
