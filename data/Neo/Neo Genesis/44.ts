import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		de: "Keifel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Freeze",
				fr: "Plus un geste !",
				de: "Frost"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack. (Benching or evolving the Defending Pokémon ends this effect.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer. (Envoyer le Pokémon Défenseur sur son Banc ou le faire évoluer met fin à cet effet.)",
				de: "Wirf eine Münze. Bei 'Kopf' kann das verteidigende Pokémon nicht angreifen. (Wenn das verteidigende Pokémon auf die Bank kommt oder sich entwickelt, wird dadurch dieser Effekt beendet."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
				de: "Blizzard"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. Si c'est pile, cette attaque inflige 10 dégâts à chacun des Pokémon de votre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. Bei 'Zahl' fügt dieser Angriff jedem eigenen Pokémon auf der Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Comme il ne voit rien à cause des longs poils qui recouvrent son corps, il passe son temps à charger tout ce qui bouge."
	},

	thirdParty: {
		cardmarket: 274444,
		tcgplayer: 88116
	}
}

export default card
