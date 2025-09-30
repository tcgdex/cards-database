import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown J",
		fr: "Zarbi J",
		de: "Icognito J"
	},

	illustrator: "Kent Kanetsuna",
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
				en: "JUNK",
				fr: "JUNK",
				de: "JUNK"
			},
			effect: {
				en: "Once during your turn, when you put Unown J from your hand onto your Bench, you may flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Zarbi J de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Einmal während deines Zuges kannst du, wenn du Icognito J von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" durchsuche deinen Ablagestapel nach 1 Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Remove the Special Condition Asleep from the Defending Pokémon.",
				fr: "Retirez au Pokémon Défenseur l'État Spécial Endormi.",
				de: "Entferne den Speziellen Zustand \"schlafend\" vom Verteidigenden Pokémon."
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
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de ZARBI est apparu en premier."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
