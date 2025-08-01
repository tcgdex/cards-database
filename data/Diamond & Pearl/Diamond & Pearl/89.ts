import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Meditikka",
		de: "Meditie"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 50,

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
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Meditite during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Meditikka lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Meditie zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				de: "Meditation"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
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
		fr: "Il ne mange qu'une Baie par jour. La faim lui a forgé une volonté de fer."
	},

	thirdParty: {
		cardmarket: 277588
	}
}

export default card
