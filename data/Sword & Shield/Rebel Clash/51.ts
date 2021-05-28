import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Cramorant",
		fr: "Nigosier"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dive",
				fr: "Plongée"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon.",
				fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon"
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Water"],
	regulationMark: "D"
}

export default card
