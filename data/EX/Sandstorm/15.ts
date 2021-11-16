import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Veil",
				fr: "Voile feu"
			},
			effect: {
				en: "If Arcanine is your Active Pokémon and is damaged by an opponent's attack (even if Arcanine is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si Arcanin est votre Pokémon Actif et que l'attaque de votre adversaire lui inflige des dégâts (même si Arcanin est mis K.O), le Pokémon Attaquant est maintenant Brûlé."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burn Up",
				fr: "Brûlure"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Fire Energy cards attached to Arcanine.",
				fr: "Lancez une pièce. Si c'est pile, défaussez toutes les cartes Énergie  attachées à Arcanin."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
