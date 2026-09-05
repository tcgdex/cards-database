import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Diancie",
		fr: "Diancie",
		de: "Diancie"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [670],

	dexId: [
		719,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sparkle",
				fr: "Éclat",
				de: "Glitzern"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Storm",
				fr: "Orage Adamantin",
				de: "Diamantsturm"
			},
			effect: {
				en: "Heal 30 damage from each of your Fairy Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
				de: "Heile 30 Schadenspunkte bei jedem deiner {FAIRY}-Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Open the magic door and a dream-colored party will start again today. I'll teach you the secret password.",
		de: "Öffne die magische Tür, sodass heute wieder eine Party voller bunter Träume beginnt. Ich bringe dir das geheime Passwort bei."
	},

	thirdParty: {
		cardmarket: 288531
	}
}

export default card
