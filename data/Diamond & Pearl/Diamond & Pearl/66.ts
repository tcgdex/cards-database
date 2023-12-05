import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Unown B",
		fr: "Zarbi B",
		de: "Icognito B"
	},

	illustrator: "Nakaoka",
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
				en: "Bounce",
				fr: "BOND-BOING",
				de: "BOUNCE"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown B is on your Bench, you may flip a coin. If heads, discard all cards attached to any 1 of your Unown and shuffle that Pokémon back into your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi B est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, défaussez toutes les cartes attachées à 1 de vos Zarbis et mélanger ce Pokémon à votre deck.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Icognito B auf deiner Bank liegt, kannst du 1 Münze werfen. Bei \"Kopf\" lege alle Karten, die an 1 deiner Icognito angelegt sind, auf deinen Ablagestapel und mische danach dieses Pokémon in dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	}
}

export default card
