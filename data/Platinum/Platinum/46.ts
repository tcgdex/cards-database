import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cranidos",
		fr: "Kranidos",
		de: "Koknodon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [408],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Skull Fossil",
		fr: "Fossile Crâne",
		de: "Kopffossil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-roc",
				de: "Zertrümmerer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
				de: "Umwerfen"
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				de: "Du kannst eine beliebige Stadion-Karte aus dem Spiel auf den Ablagestapel legen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "A lifelong jungle dweller from 100 million years ago, it would snap obstructing trees with head butts.",
		de: "Es lebt seit Urzeiten im Dschungel. Kann im Weg befindliche Bäume mit Kopfstößen aus dem Weg räumen."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84460,
				cardmarket: 278467
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278467,
				tcgplayer: 84460
			}
		}
	],

}

export default card
