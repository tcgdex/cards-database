import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
	},
	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		211,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Balloon Sting",
				fr: "Piqûre ballon",
			},
			effect: {
				en: "Once during your opponent's turn, if Qwilfish is your Active Pokémon and is damaged by an attack (even if Qwilfish is Knocked Out), you may flip a coin. If heads, the Attacking Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Une seule fois lors du tour de votre adversaire, si Qwilfish est votre Pokémon Actif et qu'une attaque lui inflige des dégâts (même si Qwilfish est mis K.O), vous pouvez lancer une pièce. Si c'est face, le Pokémon Attaquant est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur ce Pokémon entre deux tours.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Nerve Shot",
				fr: "Coup nerveux",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
