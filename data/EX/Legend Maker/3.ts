import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
		de: "Wielie"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Lileep",
		fr: "Lilia"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Devolution Wave",
				fr: "Vague dés-évoluante",
				de: "Devolutionswelle"
			},
			effect: {
				en: "Count the number of React Energy cards attached to Cradily and choose up to that number of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from each of those Pokémon, then have your opponent shuffle those cards into his or her deck.",
				fr: "Comptabilisez le nombre de cartes Énergie réaction attachées à Vacilys et choisissez autant de Pokémon Évolués de votre adversaire. Retirez à chacun de ces Pokémon la carte au niveau d'Évolution le plus élevé. Ensuite, demandez à votre adversaire de mélanger ces cartes à son deck.",
				de: "Zähle die Anzahl an Wielie angelegten Reaktions-Energiekarten und wähle danach entwickelte Pokémon deines Gegners bis zu dieser Anzahl aus. Entferne die höchste Evolutionskarte von jedem der gewählten Pokémon. Danach mischt dein Gegner diese in sein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque linéaire",
				de: "Linearer Angriff"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de boue",
				de: "Lehmschuss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276880,
		tcgplayer: 84452
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
