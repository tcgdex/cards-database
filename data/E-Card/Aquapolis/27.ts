import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
	},

	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [47],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
		de: "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo",
				de: "Schlafeinflößer"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep.",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				de: "Wähle 1 der Pokémon auf der Bank deines Gegners und tausche es mit dem Verteidigenden Pokémon. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapture Pollen",
				fr: "Pollen d'extase",
				de: "Taumelpollen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, retirez 2 marqueurs de dégâts de Parasect.",
				de: "Wirf eine Münze. Bei „Kopf“ schläft das Verteidigende Pokémon jetzt. Entferne bei „Zahl“ 2 Schadensmarken von Parasek."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87954,
				cardmarket: 275099
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87954,
				cardmarket: 275099
			}
		},
	]
}

export default card
