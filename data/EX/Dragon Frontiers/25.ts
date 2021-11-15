import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Xatu δ",
		fr: "Xatu δ ESPÈCES DELTA"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Natu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Extra Feather",
				fr: "Plume supplémentaire"
			},
			effect: {
				en: "Each of your Stage 2 Pokémon-ex does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Chacun de vos Pokémon-ex de Niveau 2 inflige 10 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
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
