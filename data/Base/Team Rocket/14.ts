import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Weezing",
		fr: "Smogogo obscur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Koffing",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mass Explosion",
				fr: "Explosion de masse"
			},
			effect: {
				en: "Does 20 damage times the total number of Koffings, Weezings, and Dark Weezings in play (Apply Weakness and Resistance.). Then, this attack does 20 damage to each Koffing, Weezing, and Dark Weezing (even your own). Don't apply Weakness and Resistance.",
				fr: "Inflige 20 dégâts multipliés par le nombre de Smogo, Smogogo et Smogogo obscur en jeu, (appliquez la Faiblesse et la Résistance). Ensuite, cette attaque inflige 20 dégâts à chaque Smogo, Smogogo et Smogogo obscur (y compris les vôtres). N'appliquez pas la Faiblesse et la Résistance."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],

			name: {
				en: "Stun Gas",
				fr: "Gaz étourdissant"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné ; si c'est pile, le Pokémon Défenseur est maintenant Paralysé."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Des chercheurs ont observé ces Pokémon se reproduisant dans des sites de traitement des déchets industriels."
	}
}

export default card
