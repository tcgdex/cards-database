import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Applin",
		fr: "Verpom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Withdraw",
				fr: "Repli"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
				fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 40,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
