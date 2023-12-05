import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown E",
		fr: "Zarbi",
		de: "Icognito E"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "EQUIP",
				fr: "ÉQUIPER",
				de: "EQUIP"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown E is on your Bench, you may discard all cards attached to Unown E and attach Unown E to 1 of your Pokémon as a Pokémon Tool card. As long as Unown E is attached to a Pokémon, that Pokémon gets +10 HP.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi E est sur votre Banc, vous pouvez défausser toutes les cartes qui lui sont attachées et attacher Zarbi E à 1 de vos Pokémon comme Carte Outil Pokémon. Tant que Zarbi E est attachée à 1 Pokémon, celui-ci obtient + 10 PV.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito E auf deiner Bank ist, alle Karten, die an Icognito E angelegt sind, auf deinen Ablagestapel legen und Icognito E an 1 deiner Pokémon als Pokémon-Ausrüstung anlegen. Solange Icognito E an ein Pokémon angelegt ist, hat dieses Pokémon +10 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "During your opponent's next turn, whenever your opponent flips a coin, treat it as tails.",
				fr: "Lors du prochain tour de votre adversaire, lorsque votre adversaire lance une pièce, considérez que c'est pile.",
				de: "Im nächsten Zug deines Gegners zählen alle Ergebnisse von Münzwürfen deines Gegners als \"Zahl\"."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou du Zarbi est apparu en premier."
	}
}

export default card
