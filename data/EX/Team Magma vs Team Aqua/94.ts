import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Suicune ex",
		fr: "Suicune ex",
		de: "Suicune-ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [245],

	hp: 100,

	stage: "Basic",
	types: [
		"Water"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Energy Flip",
				fr: "Échange d'énergie",
				de: "Energieruck"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. You may move an Energy card attached to that Pokémon to another of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. Vous pouvez déplacer une carte Énergie attachée à ce Pokémon sur un autre des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 gegnerisches Pokémon auf der Bank. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. Lege eine an dem gewählten Pokémon angelegte Energiekarte an ein anderes gegnerisches Pokémon an. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Reverse Stream",
				fr: "Courant inverse",
				de: "Gegenströmung"
			},
			effect: {
				en: "You may return all basic Energy cards attached to Suicune ex to your hand. If you do, this attack does 50 damage plus 10 more damage for each basic Energy card you returned.",
				fr: "Vous pouvez reprendre dans votre main toutes les cartes Énergie de base attachées à Suicune ex. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie de base reprise.",
				de: "Du kannst alle an Suicune ex angelegten Basis-Energiekarten zurück auf deine Hand nehmen. Wenn du das machst, fügt dieser Angriff 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise zurück genommene Basis-Energiekarte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275871,
				tcgplayer: 89611
			}
		},
		{
			type: "holo",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871825,
				tcgplayer: 477437
			}
		}
	],

}

export default card
