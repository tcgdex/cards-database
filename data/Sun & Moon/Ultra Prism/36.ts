import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		419,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Blast",
				fr: "Explosion Aquatique",
			},
			effect: {
				en: "Discard a Water Energy from this Pokémon.",
				fr: "Défaussez une Énergie Water de ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
