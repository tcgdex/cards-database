import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Galopa",
		de: "Gallopa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
		de: "Ponita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rapidash.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Galopa.",
				de: "Wirf eine Münze. Verhindere bei „Kopf“ während des nächsten Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Gallopa zugefügt werden."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gallop",
				fr: "Galop",
				de: "Galoppieren"
			},
			effect: {
				en: "Flip a coin. If heads, discard a Fire Energy card attached to Rapidash and this attack does 30 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, défaussez-vous d'une carte Énergie  attachée à Galopa et cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf eine Münze. Lege bei „Kopf“ eine an Gallopa angelegte {R}-Energiekarte auf deinen Ablagestapel und dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88577,
				cardmarket: 275103
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88577,
				cardmarket: 275103
			}
		},
	],
	retreat: 0
}

export default card
