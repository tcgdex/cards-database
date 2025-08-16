import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tool Drop",
				fr: "Chute d’Outils",
			},
			effect: {
				en: "Does 20 damage for each Pokémon Tool card attached to Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 20 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280803,
		tcgplayer: 90069
	}
}

export default card
