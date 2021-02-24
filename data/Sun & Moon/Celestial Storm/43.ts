import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		368,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deflecting Splash",
				fr: "Déviation Éclaboussante",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
