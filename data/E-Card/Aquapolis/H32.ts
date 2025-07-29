import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Electhor",
		de: "Zapdos"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Anti",
				fr: "Anti-éclair",
				de: "Anti-Blitz"
			},
			effect: {
				en: "Lightning - You can't attach Lightning Energy cards to Zapdos from your hand to Zapdos.",
				fr: "Vous ne pouvez pas attacher de cartes Énergie  depuis votre main à Electhor.",
				de: "Du kannst keine  - Energiekarte aus deiner Hand an Zapdos anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plasma",
				fr: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads attach 1 of them to Zapdos.",
				fr: "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Electhor.",
				de: "Wenn mindestens eine  - Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei \"Kopf\" 1 davon an Zapdos an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
				fr: "Orage d'éclairs",
				de: "Blitzsturm"
			},
			effect: {
				en: "Flip a coin. If tails, put 2 damage counters on Zapdos.",
				fr: "Lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur Electhor.",
				de: "Wirf eine Münze. Lege bei \"Zahl\" 2 Schadensmarken auf Zapdos."
			},
			damage: 60,

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

	thirdParty: {
		cardmarket: 275067
	}
}

export default card
