import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
		de: "Golking"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		119,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Goldeen",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Seaking.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Poissoroy.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Golking zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Undulate",
				fr: "Annulation",
				de: "Auf und Ab"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seaking.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Poissoroy.",
				de: "Wirf eine Münze. Verhindere bei 'Kopf' während des nächstens Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Golking zugefügt werden."
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





}

export default card
