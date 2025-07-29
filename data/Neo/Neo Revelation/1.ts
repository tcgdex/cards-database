import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Attract Current",
				fr: "Courant d'attraction",
				de: "Attract Current"
			},
			effect: {
				en: "Flip 3 coins. For each heads, you may search your deck for a L Energy card and attach it to 1 of your L Pokémon. Shuffle your deck afterward.",
				fr: "Lancez 3 pièces. Pour chaque face, vous pouvez chercher une carte Énergie  dans votre deck et l'attacher à l'un de vos Pokémon . Mélangez ensuite votre deck.",
				de: "Flip 3 coins. For each heads, you may search your deck for a  Energy card and attach it to 1 of your  Pokémon. Shuffle your deck afterward."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
				fr: "Gigavolt",
				de: "Gigavolt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 40 dégâts et le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "L'extrémité lumineuse de sa queue est visible de très loin. Depuis l'antiquité, elle sert de balise aux gens perdus."
	},

	thirdParty: {
		cardmarket: 274587
	}
}

export default card
