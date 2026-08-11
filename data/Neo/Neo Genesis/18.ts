import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
		de: "Tornupto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Fire Boost",
				fr: "Attise feu",
				de: "Feuerverstärkung"
			},
			effect: {
				en: "When you play Typhlosion from your hand, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to Typhlosion. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez Typhlosion depuis votre main, vous pouvez lancer une pièce. Si c'est face, cherchez jusqu'à 4 cartes Énergie  et attachez-les à Typhlosion. Mélangez ensuite votre deck.",
				de: "Wenn du Tornupto aus deiner Hand spielst, kannst du eine Münze werfen. Suche bei „Kopf“ in deinem Deck nach bis zu 4 {R}-Energiekarten und lege sie an Tornupto an. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Wheel",
				fr: "Roue de flammes",
				de: "Flammenrad"
			},
			effect: {
				en: "Discard 3 Energy cards attached to Typhlosion in order to use this attack. Do 20 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 3 cartes Énergie  attachées à Typhlosion afin de pouvoir utiliser cette attaque. Inflige 20 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Lege 3 an Tornupto angelelgte {R}-Energiekarten auf deinen Ablagestapel, um diesen Angriff zu verwenden. Füge allen Pokémon auf der Bank 20 Schadenspunkte zu (deinen und den gegnerischen). (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions.",
		fr: "Il possède une botte secrète dévastatrice. Il frotte sa fourrure de flamme pour provoquer de gigantesques explosions.",
		de: "Es beherrscht einen geheimen, verheerenden Trick. Es reibt sein brennendes Fell aneinander, um so riesige Explosionen auszulösen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274417,
				tcgplayer: 90099
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274417,
				tcgplayer: 90099
			}
		}
	]
}

export default card
