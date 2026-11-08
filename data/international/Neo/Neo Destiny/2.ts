import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Crobat",
		'fr-fr': "Nostenfer obscur",
		'de-de': "Dunkles Iksbat"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferalto obscur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Surprise Bite",
				'fr-fr': "Morsure surprise",
				'de-de': "Surprise Bite"
			},
			effect: {
				'en-us': "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage do that Pokémon. (Don't apply Weakness and Resistance.)",
				'fr-fr': "Quand vous jouez Nostenfer obscur depuis votre main, vous pouvez choisir un des Pokémon de votre adversaire. Ce pouvoir inflige 20 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse, ni la Résistance.)",
				'de-de': "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage to that Pokémon. (Don't apply Weakness and Resistance.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Dark Drain",
				'fr-fr': "Sombre saignée",
				'de-de': "Dark Drain"
			},
			effect: {
				'en-us': "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.",
				'fr-fr': "Lancez une pièce pour chaque Pokémon de votre adversaire. Pour chaque face, cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance. Retirez un nombre de marqueurs de dégâts sur Nostenfer obscur égal aux dégâts infligés. Si Nostenfer obscur a moins de marqueurs de dégâts, retirez-les tous.",
				'de-de': "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Although the wings it has evolved on its feet allow it to fly at high speeds, they unfortunately make it difficult to perch.",
		'fr-fr': "Les ailes supplémentaires qui ornent ses pattes lui permettent de voler très vite, mais elles lui compliquent la vie quand il veut se percher."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274654,
				tcgplayer: 84576
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274654,
				tcgplayer: 84576
			}
		}
	]
}

export default card
