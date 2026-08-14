import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant",
		de: "Fasasnob"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
		de: "Navitaub"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tailwind",
				fr: "Vent Arrière",
				de: "Rückenwind"
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de votre main à 1 de vos Pokémon.",
				de: "Lege 1 Energiekarte von deiner Hand an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Strike",
				fr: "Tir de Plumes",
				de: "Federschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage. If tails, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 40 weitere Schadenspunkte zu. Lege bei „Zahl“ 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 40,

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
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Males have plumage on their heads. They will never let themselves fell close to anyone other than their Trainers.",
		de: "Männliche Exemplare tragen eine Verzierung am Kopf. Lässt sich von Natur aus nur auf seinen Trainer ein."
	},

	thirdParty: {
		cardmarket: 280047,
		tcgplayer: 90160
	}
}

export default card
