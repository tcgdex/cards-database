import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'de-de': "Blitza"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Attract Current",
				'fr-fr': "Courant électrique",
				'de-de': "Attract Current"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie  et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Flip a coin. If heads, search your deck for a  Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Multi Pulse",
				'fr-fr': "Multi-vibrations",
				'de-de': "Multi Pulse"
			},
			effect: {
				'en-us': "If Jolteon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				'fr-fr': "Si Voltali possède au moins 3 types de cartes Énergie de base différents, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If Jolteon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Confused."
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

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86341,
				cardmarket: 276654
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86341,
				cardmarket: 276654
			},
		}
	],
}

export default card
