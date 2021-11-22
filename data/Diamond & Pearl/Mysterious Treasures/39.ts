import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Sealeo",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Freeze-up",
				fr: "Geler"
			},
			effect: {
				en: "Once during your turn, when you play Walrein from your hand to evolve 1 of your Pokémon, you may flip 2 coins. If both are heads, discard 1 of the Defending Pokémon and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.)",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Kaimorse de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez lancer 2 pièces. Si ce sont deux fois faces, défaussez 1 des Pokémon Défenseurs ainsi que toutes les cartes qui lui sont attachées. (Le Pokémon n'est pas mis K.O.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Bind",
				fr: "Liens de glace"
			},
			effect: {
				en: "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed.",
				fr: "Si votre adversaire ne défausse pas de cartes de sa main, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+30"
		},
	],

	description: {
		fr: "Il brise la glace avec ses grosses défenses. Sa graisse le protège du froid, mais aussi des attaques."
	}
}

export default card
