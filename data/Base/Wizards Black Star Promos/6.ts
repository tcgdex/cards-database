import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flames of Rage",
				fr: "Flammes de rage",
				de: "Wutflammen"
			},
			effect: {
				en: "Discard 2 Energy cards attached to Arcanine in order to use this attack. This attack does 40 damage plus 10 more damage for each damage counter on Arcanine.",
				fr: "Défaussez 2 cartes Énergie  attachées à Arcanin pour pouvoir utiliser cette attaque. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Arcanin.",
				de: "Lege 2 {R} Energiekarten auf Arkani zum Einsetzen dieses Angriffs ab. Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Arkani zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "A legendary Pokémon famous for its beauty. It looks almost as if it flies when it runs.",
		fr: "Un Pokémon légendaire réputé pour sa beauté. Il galope si vite qu'il semble voler.",
		de: "Ein für seine Schönheit berühmtes Pokémon. Wenn es rennt, sieht es beinahe so aus, als ob es fliegen würde."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83578
			},
		},
	]
}

export default card
