import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power of Nature",
				fr: "Puissance de la Nature",
			},
			effect: {
				en: "Prevent all damage done to your Pokémon that have any Grass Energy attached to them by attacks from your opponent's Ultra Beasts.",
				fr: "Évitez tous les dégâts infligés par les attaques des Ultra-Chimères de votre adversaire à vos Pokémon auxquels de l’Énergie Grass est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Powerful Storm",
				fr: "Tempête Puissante",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous vos Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
