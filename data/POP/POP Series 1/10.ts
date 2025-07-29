import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				fr: "Choisissez une des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277424
	}
}

export default card
