import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown !",
		fr: "Zarbi !",
		de: "Icognito !"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
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
				en: "!",
				fr: "!",
				de: "!"
			},
			effect: {
				en: "Once during your turn, when you put Unown ! from your hand onto your Bench, you may flip a coin. If heads, put 2 damage counters on 1 of your opponent's Pokémon. If tails, put 2 damage counters on 1 of your Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Zarbi ! de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, placez 2 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si c'est pile, placez 2 marqueurs de dégât sur 1 de vos Pokémon.",
				de: "Einmal während deines Zuges kannst du, wenn du Icognito ! von deiner Hand auf deine Bank legst, 1 Münze werfen. Bei \"Kopf\" lege 2 Schadensmarken auf 1 Pokémon deines Gegners. Bei \"Zahl\" lege 2 Schadensmarken auf 1 deiner Pokémon."
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
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, Unown ! does 10 damage to itself, and this attack's damage isn't affected by Weakness or Resistance.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, Zarbi ! s'inflige 10 dégâts et les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich Icognito ! selbst 10 Schadenspunkte zu und der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: "10+",

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
