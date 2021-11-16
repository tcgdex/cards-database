import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Gligar δ",
		fr: "Scorplane δ ESPÈCES DELTA"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		207,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sting Turn",
				fr: "Tour piquant"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and switch Gligar with 1 of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Échangez Scorplane avec 1 Pokémon de votre Banc."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Sting",
				fr: "Queue-dard"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 10 more damage and the Defending Pokémon is now Poisoned.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: "10+",

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
