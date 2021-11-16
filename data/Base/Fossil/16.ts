import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptera"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Prehistoric Power",
				fr: "Arcane"
			},
			effect: {
				en: "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
				fr: "Aucune carte Évolution ne peut être jouée. Ce pouvoir cesse si Ptera est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile"
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon préhistorique qui attaque son ennemi à la gorge avec ses crocs acérés."
	}
}

export default card
