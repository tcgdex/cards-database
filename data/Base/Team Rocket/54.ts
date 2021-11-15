import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Long Distance Hypnosis",
				fr: "Hypnose longue distance"
			},
			effect: {
				en: "Distance Hypnosis - Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep; if tails, your Active Pokémon is now Asleep. The power can't be used if Drowzee is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi ; si c'est pile, votre Pokémon Actif est maintenant Endormi. Ce pouvoir ne peut être utilisé si Soporifik est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
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
		fr: "Il n'a pas vraiment la cote auprès des filles en raison de son mauvais caractère. On le surprend souvent maugréant tout seul à voix basse."
	}
}

export default card
