import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Gigashock",
				fr: "Éléctrochok",
				de: "Gigaschock"
			},
			effect: {
				en: "Choose 3 of your opponent's Benched Pokémon and this attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) If your opponent has fewer than 3 Benched Pokémon, do the damage to each of them.",
				fr: "Choisissez 3 Pokémon du Banc de votre adversaire et cette attaque inflige 10 dégâts à chacun d'eux. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Si votre adversaire a moins de 3 Pokémon, infligez les dégâts à chacun d'eux.",
				de: "Wähle 3 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt jedem von ihnen 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.) Falls dein Gegner weniger als 3 Pokémon auf seiner Bank hat, teile die Schadenspunkte an jedes von ihnen aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il doit garder sa queue en contact avec le sol pour éviter toute électrocution."
	},

	thirdParty: {
		cardmarket: 273875,
		tcgplayer: 106531
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
