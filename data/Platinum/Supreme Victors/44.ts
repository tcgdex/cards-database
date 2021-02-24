import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Marvel Shell",
				fr: "Coquille merveilleuse",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Pokémon that has any Poké-Powers or Poké-Bodies.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Munja par les Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spike Wound",
				fr: "Blessure pointue",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
