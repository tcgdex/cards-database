import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Gigaspark",
				fr: "Gigatincelle",
				de: "Gigafunkensprung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez un pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt und dieser Angriff fügt jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
	retreat: 2,


	description: {
		en: "The tail's tip shines brightly and can be seen from far away. It acts as a beacon for lost people.",
		fr: "La pointe de sa queue luit intensément et on l'aperçoit de très loin. Il sert de balise aux gens perdus.",
		de: "Die Spitze des Schweifs scheint hell und ist von weither sichtbar. Sie dient als Leuchtturmlicht für verlorene Wanderer."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274401,
				tcgplayer: 83534
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274401,
				tcgplayer: 83534
			}
		}
	]
}

export default card
