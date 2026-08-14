import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Aggron ex",
		fr: "Galeking ex",
		de: "Stollos ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [306],

	hp: 150,

	stage: "Stage2",
	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
		de: "Stollrak"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer",
				de: "Reißer"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque inflige 60 dégâts.",
				de: "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Surge",
				fr: "Vague métallique",
				de: "Metallwoge"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon du Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Fügt allen gegnerischen Pokémon auf der Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 4,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83483,
				cardmarket: 275872
			}
		},
	]
}

export default card
