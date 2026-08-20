import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Houndoom G",
		fr: "Demolosse G",
		de: "Hundemon G"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 90,

	types: [
		"Fire"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Black Cry",
				fr: "Cri noir",
				de: "Schwarzer Schrei"
			},
			effect: {
				en: "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite ou utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen und keine Poké-Power benutzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Slash",
				fr: "Entaille",
				de: "Dunkler Hieb"
			},
			effect: {
				en: "You may discard a Darkness Energy attached to Houndoom G. If you do, this attack does 40 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une Énergie Darkness attachée à Demolosse . Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Du kannst 1{D}-Energie von Hundemon G entfernen und auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86215,
				cardmarket: 278471
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278471,
				tcgplayer: 86215
			}
		}
	],

}

export default card
