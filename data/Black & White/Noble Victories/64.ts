import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		534,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Craftsmanship",
				fr: "Maître d'Œuvre",
			},
			effect: {
				en: "This Pokémon gets +20 HP for each Fighting Energy attached to it.",
				fr: "Chaque Énergie Fighting attachée à ce Pokémon lui ajoute 20 PV.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Top Down",
				fr: "Écras'Montagne",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
