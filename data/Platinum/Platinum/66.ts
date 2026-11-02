import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
		de: "Sengo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Skin",
				fr: "Dur à cuir",
				de: "Dicke Haut"
			},
			effect: {
				en: "Zangoose can't be affected by any Special Conditions.",
				fr: "Mangriff ne peut pas être affecté par des États Spéciaux.",
				de: "Sengo kann nicht von Speziellen Zuständen betroffen werden."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Invite and Strike",
				fr: "Inviter et frapper",
				de: "Einladen und Zuschlagen"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 20 damage to the new Defending Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige 20 dégâts au nouveau Pokémon Défenseur.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Dieser Angriff fügt dem neuen Verteidigenden Pokémon 20 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chop Up",
				fr: "Découper",
				de: "Zerstückeln"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90707,
				cardmarket: 278487
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278487,
				tcgplayer: 90707
			}
		},
		{
			type:"normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479986
			}
		}
	],

}

export default card
