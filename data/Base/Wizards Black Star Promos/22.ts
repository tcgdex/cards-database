import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		de: "Arktos"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Diamond Dust",
				fr: "Poussière de diamant",
				de: "Diamantenstaub"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed, and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt und dieser Angriff fügt jedem Pokémon auf der Bank des Gegners 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "This legendary Pokémon is said to freeze the water in the air during winter, causing snow.",
		fr: "On prétend que ce Pokémon légendaire refroidit l'eau contenue dans l'air en hiver, au point de provoquer des chutes de neige.",
		de: "Diesem legendären Pokémon wird nachgesagt, dass es das Wasser im Winter in der Luft zu Schnee gefrieren lässt."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83647
			},
		},
		{
			type: "normal",
			subtype: "aoki-error"
		}
	]
}

export default card
