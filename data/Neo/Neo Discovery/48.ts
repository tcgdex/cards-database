import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [F]",
		fr: "Zarbi F"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Find]",
				fr: "[Find]"
			},
			effect: {
				en: "Once during your turn (before you attack), if you have Unown F, Unown I, Unown N, and Unown D on your Bench, you may search your deck for a Trainer card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
				fr: "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [F], Zarbi [I], Zarbi [N], et Zarbi [D] sur votre Banc, vous pouvez chercher dans votre deck une carte Dresseur. Montrez cette carte à votre adversaire, puis placez-la dans votre main. Mélangez ensuite votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	}
}

export default card
