import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
		de: "Noctuh"
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
		en: "Hoothoot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Glaring Gaze",
				fr: "Regard perçant",
				de: "Glaring Gaze"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Noctowl is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, regardez la main de votre adversaire. Si votre adversaire possède une ou plusieurs cartes Dresseur, choisissez l'une d'elles. Votre adversaire mélange cette carte dans son deck. Ce pouvoir ne peut être utilisé si Noarfang est Endormi, Confus ou Paralysé.",
				de: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Noctowl is Asleep, Confused, or Paralyzed."
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
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Wing Attack"
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
		fr: "Ses yeux sont spécialement adaptés. Ils concentrent la plus petite parcelle de lumière pour lui permettre de voir dans l'obscurité."
	}
}

export default card
