import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Vaporeon",
		fr: "Aquali lumineux",
		de: "Helles Aquana"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wash Away",
				fr: "Lavage",
				de: "Wegwaschen"
			},
			effect: {
				en: "If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it.",
				fr: "Si vous avez des Pokémon sur votre Banc, lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts d'un des Pokémon de votre Banc et défaussez-vous de toutes les cartes Énergie qui y sont attachées.",
				de: "Wirf eine Münze, wenn du mindestens ein Pokémon auf deiner Bank hast. Entferne bei „Kopf“ alle Schadensmarken von einem Pokémon auf deiner Bank und lege alle an es angelegten Energiekarten auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hypno Shower",
				fr: "Hypnodouche",
				de: "Hypnodusche"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent's) with any damage counters on it.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Retirez un marqueur de dégâts de chaque Pokémon du Banc (le vôtre et celui de votre adversaire) ayant des marqueurs de dégâts sur lui.",
				de: "Das verteidigende Pokémon schläft jetzt. Entferne eine Schadensmarke von allen Pokémon auf der Bank (deinen und denen deines Gegners), auf denen Schadensmarken liegen."
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
	retreat: 1,


	description: {
		en: "If its fins being to vibrate, it is a sign that it will begin raining soon.",
		fr: "Si sa nageoire commence à vibrer, c'est signe qu'il va bientôt pleuvoir.",
		de: "Wenn seine Flossen anfangen zu vibrieren, wird es bald Regen geben."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274704,
				tcgplayer: 86751
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274704,
				tcgplayer: 86751
			}
		}
	]
}

export default card
