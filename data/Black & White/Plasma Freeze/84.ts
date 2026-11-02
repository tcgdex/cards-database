import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		es: "Kingdra",
		it: "Kingdra",
		pt: "Kingdra",
		de: "Seedraking"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		de: "Seemon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Vortex",
				fr: "Vortex Draconique",
				de: "Drachenwirbel"
			},
			effect: {
				en: "Does 20 damage times the number of Water Energy cards and Lightning Energy cards in your discard pile. Then, shuffle all of those cards back into your deck.",
				fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie Water et de cartes Énergie Lightning dans votre pile de défausse. Ensuite, mélangez toutes ces cartes avec votre deck.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der {W}- und {L}-Energiekarten in deinem Ablagestapel zu. Mische diese Karten anschließend zurück in dein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tri Bullet",
				fr: "Triple Décharge",
				de: "Kugeltrio"
			},
			effect: {
				en: "This attack does 30 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 3 Pokémon deines Gegners jeweils 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It lives in caves on the seafloor and creates giant whirlpools every time it moves.",
		de: "Es lebt in Höhlen auf dem Meeresgrund. Jedes Mal, wenn es sich bewegt, entsteht ein Strudel."
	},

	thirdParty: {
		cardmarket: 280962,
		tcgplayer: 86449
	}
}

export default card
