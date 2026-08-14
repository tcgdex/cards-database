import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Elecsprint",
		de: "Voltenso"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigashock",
				fr: "Electrochok",
				de: "Gigaschock"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à deux des Pokémon du Banc de votre adversaire (ou un s'il n'y en a qu'un). (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Dieser Angriff fügt 2 gegnerischen Pokémon auf der Bank (1 wenn nur 1 vorhanden ist) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275687,
				tcgplayer: 87154
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275687,
				tcgplayer: 87154
			}
		},
	],

}

export default card
