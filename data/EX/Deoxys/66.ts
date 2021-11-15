import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		177,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mirror Coat",
				fr: "Voile miroir"
			},
			effect: {
				en: "If Natu is Burned or Poisoned by an opponent's attack (even if Natu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
				fr: "Si Natu est Brûlé ou Empoisonné par une attaque de votre adversaire (même si Natu est mis K.O.), le Pokémon Attaquant est maintenant affecté par les mêmes États Spéciaux (ou 1 s'il n'y en a qu'1)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-vent"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
