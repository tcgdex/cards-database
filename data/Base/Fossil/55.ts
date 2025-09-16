import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spacing Out",
				fr: "Trou d'Memoire",
				de: "Dahindöser"
			},
			effect: {
				en: "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
				fr: "Lancez une pièce. Si c'est face, retirez un marqueur de dégâts de Ramoloss. Cette attaque ne peut pas être utilisée si Ramoloss n'a pas de marqueur de dégâts sur lui.",
				de: "Wirf eine Münze. Bei 'Kopf' entferne eine Schadensmarke von Flegmon. Dieser Angriff kann nicht eingesetzt werden, falls auf Flegmon keine Schadensmarken liegen."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Scavenge",
				fr: "Farfouille",
				de: "Aasfresser"
			},
			effect: {
				en: "Discard 1 Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
				fr: "Défaussez 1 carte Énergie  attachée à Ramoloss afin de pouvoir utiliser cette attaque. Déplacez une carte Dresseur depuis votre pile de défausse vers votre main.",
				de: "Entferne eine auf Flegmon abgelegte  Energiekarte, um diesen Angriff auszuführen. Nimm eine Trainerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Très lent et endormi, il lui faut 5 secondes pour ressentir la douleur d'une attaque."
	},

	thirdParty: {
		cardmarket: 273916,
		tcgplayer: 44457
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
