import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Aerodactyl δ",
		fr: "Ptera δ",
		de: "Aerodactyl"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Primal Light",
				fr: "Lumière primale",
				de: "Urlicht"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Aerodactyl is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck une carte Énergie de base, la montrer à votre adversaire et la placer dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Ptera est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer Basis-Energiekarte durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Aerodactyl von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Fire",
			],
			name: {
				en: "Granite Head",
				fr: "Tête de granit",
				de: "Granitkopf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Aerodactyl by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Ptera par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Im nächsten Zug deines Gegners wird der Schaden, der Aerodactyl durch gegnerische Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277005
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
