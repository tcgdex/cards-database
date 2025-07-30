import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Scyther.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Insécateur.",
				de: "Wirf eine Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Sichlor zugefügt werden."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Sharp Sickle",
				fr: "Lame-aiguisée",
				de: "Scharfe Sichel"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il se déplace si vite qu'il est invisible à l'oeil nu. Même quand il est immobile, son camouflage lui permet de ne pas être vu."
	},

	thirdParty: {
		cardmarket: 274707,
		tcgplayer: 88995
	}
}

export default card
