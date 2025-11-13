import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		de: "Owei"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Direct-hit Bomb",
				fr: "Bombe directe",
				de: "Volltrefferbombe"
			},
			effect: {
				en: "Flip a coin for each Energy attached to Exeggcute. Choose 1 of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce pour chaque Énergie attachée à Noeunoeuf. Choisissez un des Pokémon de votre adversaire. Pour chaque face, cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wirf 1 Münze für jede an Owei angelegte Energie. Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte mal der Anzahl \"Kopf\" zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	description: {
		fr: "Ces six œufs communiquent par télépathie. Ils peuvent se réunir rapidement si on les sépare."
	},

	thirdParty: {
		cardmarket: 277711,
		tcgplayer: 85347
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
