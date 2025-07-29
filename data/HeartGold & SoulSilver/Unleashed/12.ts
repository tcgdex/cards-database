import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		de: "Bibor"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Twineedle",
				fr: "Double-dard",
				de: "Duonadel"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Paralyze Poison",
				fr: "Poison paralysant",
				de: "Lähmendes Gift"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c’est face, le Pokémon Défenseur est aussi Paralysé.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon zusätzlich gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It can take down any opponent with its powerful poison stingers. It sometimes attacks in swarms."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279168
	}
}

export default card
