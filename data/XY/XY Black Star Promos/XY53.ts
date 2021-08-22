import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Sceptile EX",
		fr: "Jungko EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Strong Slash",
				fr: "Tranch’Intense",
			},
			effect: {
				en: "This Pokémon can’t use Strong Slash during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Tranch’Intense pendant votre prochain tour.",
			},
			damage: 130,

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
