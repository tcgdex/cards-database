import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},
	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		37,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Snowed In",
				fr: "Enneigé",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
				fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
