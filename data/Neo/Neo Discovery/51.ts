import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [U]",
		fr: "Zarbi U",
		de: "Icognito U"
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
				en: "Undo",
				fr: "[Undo]",
				de: "Undo"
			},
			effect: {
				en: "Once during your turn (before you attack), if you have Unown U, Unown N, Unown D, and Unown O on your Bench, you may return your Active Pokémon and all cards attached to it to your hand.",
				fr: "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [U], Zarbi [N], Zarbi [D], et Zarbi [O] sur votre Banc, vous pouvez remettre votre Pokémon Actif et toutes les cartes attachées à lui dans votre main.",
				de: "Du kannst einmel während deines Zuges (vor deinem Angriff) dein aktives Pokémon und alle daran angelegten Karten auf deine Hand zurücknehmen, wenn Icognito U, Icognito N, Icognito D und Icognito O auf deiner Bank sind."
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
				fr: "Puissance cachée",
				de: "Kraftreserve"
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
	},

	thirdParty: {
		cardmarket: 274562
	}
}

export default card
