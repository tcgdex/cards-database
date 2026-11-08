import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang",
		'de-de': "Noctuh"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		164,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Glaring Gaze",
				'fr-fr': "Regard perçant",
				'de-de': "Glaring Gaze"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Noctowl is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la main de votre adversaire. Si votre adversaire possède une ou plusieurs cartes Dresseur, choisissez l'une d'elles. Votre adversaire mélange cette carte dans son deck. Ce pouvoir ne peut être utilisé si Noarfang est Endormi, Confus ou Paralysé.",
				'de-de': "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Noctowl is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-aile",
				'de-de': "Wing Attack"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "Its eyes are specially adapted. They concentrate even faint light and enable it to see in the dark.",
		'fr-fr': "Ses yeux sont spécialement adaptés. Ils concentrent la plus petite parcelle de lumière pour lui permettre de voir dans l'obscurité."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274442,
				tcgplayer: 87791
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274442,
				tcgplayer: 87791
			}
		}
	]
}

export default card
