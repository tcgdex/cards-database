import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
		de: "Austos"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				de: "Exoskelett"
			},
			effect: {
				en: "Any damage done to Cloyster by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Crustabri par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der Austos durch Angriffe zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Bubble",
				fr: "Double bulle",
				de: "Doppel Seifenblase"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads. If either of the coins is heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces. Si l'un des deux lancers est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Wenn mindestens einer der Münzen \"Kopf\" zeigt, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shell Attack",
				fr: "Carap'attaque",
				de: "Muschelangriff"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276196,
		tcgplayer: 84373
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
