import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		fr: "Suicune",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Aqua Recovery",
				fr: "Guérison aquatique",
				de: "Aqua-Wiederherstellung"
			},
			effect: {
				en: "Once during your turn, when you put Suicune from your hand onto your Bench, you may search your discard pile for up to 3 Water Pokémon, show them to your opponent, and put them into your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Suicune de votre main sur votre Banc, vous pouvez choisir dans votre pile de défausse jusqu'à 3 Pokémon Water. Montrez-les à votre adversaire et placez-les dans votre main.",
				de: "Einmal während deines Zuges kannst du, wenn du Suicune von deiner Hand auf deine Bank legst, deinen Ablagestapel nach bis zu 3 -Pokémon-Karten durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Cure Stream",
				fr: "Ruisseau guérisseur",
				de: "Heilfluss"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés au Pokémon Défenseur par des attaques sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277772,
		tcgplayer: 89604
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			foil: "cracked-ice"
		},
	]
}

export default card
