import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Lucario GL",
		fr: "Lucario  Niv. 32",
		de: "Lucario GL"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Boundary Aura",
				fr: "Barrage aura",
				de: "Abgrenz-Aura"
			},
			effect: {
				en: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×2 instead.",
				fr: "Multipliez la Faiblesse par 2 pour chaque Pokémon (les vôtres et ceux de votre adversaire).",
				de: "Wenn Pokémon (deine und die deines Gegners) eine Schwäche haben, dann wird der entsprechende Schaden nicht um den Schwäche-Wert dieses Pokémon erhöht, sondern verdoppelt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combo Throw",
				fr: "Combo de lancers",
				de: "Kombowurf"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 86888
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "holo",
			stamp: ["yuta-komatsuda"]
		},
	]
}

export default card
