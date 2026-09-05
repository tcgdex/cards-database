import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camérupt",
		de: "Camerupt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [323],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Lava Burn",
				fr: "Brûlure de lave",
				de: "Brennende Lava"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez un Pokémon du Banc de votre adversaire: cette attaque inflige 10 dégâts à ce Pokémon (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Wähle 1 gegnerisches Pokémon auf der Bank. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 basic Energy cards attached to Camerupt or this attack does nothing.",
				fr: "Défaussez deux cartes Énergie de base attachées à Camerupt ou cette attaque est sans effet.",
				de: "Entferne 2 Basis-Energiekarten von Camerupt und lege sie auf den Ablagestapel, sonst hat dieser Angriff keine Auswirkungen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275652,
				tcgplayer: 84087
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275652,
				tcgplayer: 84087
			}
		},
	],

}

export default card
