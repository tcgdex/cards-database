import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		190,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stretch Tail",
				fr: "Tire-queue"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire ; cette attaque lui inflige 10 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skedaddle",
				fr: "Décampe"
			},
			effect: {
				en: "Return Aipom and all basic Energy cards attached to it to your hand. If you have no Benched Pokémon, this attack does nothing.",
				fr: "Renvoyez Capumain et toutes les cartes Énergie de base qui y sont attachées dans votre main. (Si vous n'avez pas de Pokémon sur le Banc, cette attaque ne fait rien.)"
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
