import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
		de: "Kapoera"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Detect",
				fr: "Détection",
				de: "Scanner"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Hitmontop.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, tous les effets des attaques contre Kapoera, y compris les dégâts, sont annulés.",
				de: "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten gegenerischen Zugs alle Aus-wirkungen von Angriffen auf kapoera (einschließlich der Schadenspunkte)."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Triple Kick",
				fr: "Triple pied",
				de: "Dreifachkick"
			},

			effect: {
				en: "Flip 3 coins. This attack does 30 times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf drei Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},

			damage: "30x"
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Si vous vous laissez ensorceler par l'élégance de ses coups de pieds, vous risquez de vous faire perforer."
	},

	thirdParty: {
		cardmarket: 274514,
		tcgplayer: 86111
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

