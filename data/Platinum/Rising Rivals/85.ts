import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Turtwig GL",
		fr: "Tortipouss  Niv. 20",
		de: "Chelast GL"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overgrow",
				fr: "Engrais",
				de: "Notdünger"
			},
			effect: {
				en: "As long as Turtwig 's remaining HP is 60 or less, each of Turtwig 's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant qu'il ne reste à Tortipouss  qu'un maximum de 60 PV, chacune de ses attaques inflige 30 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Chelast GL 60 oder weniger verbliebene KP hat, fügen alle Angriffe von Chelast GL den Aktiven Pokémon 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-sangsue",
				de: "Gigasauger"
			},
			effect: {
				en: "After your attack, remove from Turtwig the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à Tortipouss  autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				de: "Entferne nach deinem Angriff Schadensmarken von Chelast GL entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		tcgplayer: 90082
	}
}

export default card
