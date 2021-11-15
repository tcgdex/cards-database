import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		314,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Glowing Screen",
				fr: "Écran flamboyant"
			},
			effect: {
				en: "As long as Volbeat is in play, any damage done to Illumise by attacks from Fire Pokémon and Dark Pokémon is reduced by 30. You can't reduce more than 30 damage even if there is more than 1 Volbeat in play.",
				fr: "Tant que Muciole est en jeu, tous dégâts infligés à Lumivole par des attaques de Pokémon  et  sont réduits de 30, même s'il y a plus d'un Muciole en jeu."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chaotic Noise",
				fr: "Bruit chaotique"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Abattre"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
