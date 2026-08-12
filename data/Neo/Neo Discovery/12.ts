import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		de: "Despotar"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Slam",
				fr: "Souplesse",
				de: "Slam"
			},

			effect: {
				en: "Flip 2 coins. This attack does 30 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},

			damage: "30x"
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trample",
				fr: "Bousculade",
				de: "Niederschlagen"
			},
			effect: {
				en: "For each Benched Pokémon in play (yours and your opponent's), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Pour chaque Pokémon sur le Banc (celui de votre adversaire et le vôtre), lancez une pièce. Si c'est face, cette attaque fait 30 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wirf für jedes Pokémon im Spiel (deine und die deines Gegners) eine Münze. Bei „Kopf“ fügt dieser Angriff jenem Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		en: "Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies.",
		fr: "Son corps est invulnérable à toutes les attaques, alors il s'empresse de défier ses ennemis.",
		de: "Es gibt keine Angriffe, die ihm richtig weh tun können. Daher ist es immer eifrig, seine Feinde sofort anzugreifen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274523,
				tcgplayer: 90113
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274523,
				tcgplayer: 90113
			}
		}
	]
}

export default card
