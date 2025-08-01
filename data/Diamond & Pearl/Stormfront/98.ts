import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		fr: "Mackogneur LV.X",
	},

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "No Guard",
				fr: "Annule garde",
				de: "Schildlos"
			},
			effect: {
				en: "As long as Machamp is your Active Pokémon, each of Machamp's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance) and any damage done to Machamp by your opponent's Pokémon is increased by 60 (after applying Weakness and Resistance).",
				fr: "Tant que Mackogneur est votre Pokémon Actif, chacune des attaques de Mackogneur inflige 60 dégåts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance) et tous dégâts infligés à Mackogneur par des Pokémon de votre adversaire sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
				de: "Solange Machomei dein Aktives Pokémon ist, fügt jeder Angriff von Machomei den Aktiven Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden) und Schaden, der Machomei durch gegnerische Angriffe zugefügt wird, wird um 60 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong-Willed",
				fr: "Têtu",
				de: "Willensstärke"
			},
			effect: {
				en: "During your opponent's next turn, if Machamp would be Knocked Out by damage from an attack, flip a coin. If heads, Machamp is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lors du prochain tour de votre adversaire, si Mackogneur est mis K.O par des dégâts d'une attaque, lancez une pièce. Si c'est face, Mackogneur n'est pas mis K.O et il lui reste 10 PV.",
				de: "Wenn im nächsten Zug deines Gegners Machomei durch Schaden eines Angriffs kampfunfähig würde, wirf 1 Münze. Bei \"Kopf\" wird Machomei nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+40"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278318,
		tcgplayer: 86973
	}
}

export default card
