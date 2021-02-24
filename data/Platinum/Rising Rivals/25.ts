import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus Niv. 48",
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Cover",
				fr: "Couverture de sable",
			},
			effect: {
				en: "As long as Hippowdon is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon LV.X between turns.",
				fr: "Tant qu'Hippodocus est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon LV.X de votre adversaire entre deux tours.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Save Sand",
				fr: "Sauve-sable",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Hippowdon. Before doing damage, you may search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Hippodocus. Avant d'infliger des dégâts, vous pouvez chercher une carte Énergie Fighting dans votre pile de défausse et l'attacher à Hippodocus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Groundquake",
				fr: "Tremblement de sol",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon that isn't an Evolved Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc n'étant pas un Pokémon Évolué (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
