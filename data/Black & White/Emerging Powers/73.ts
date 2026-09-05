import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		598,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
		de: "Kastadur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Iron Defense",
				fr: "Mur de Fer",
				de: "Eisenabwehr"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei „Kopf“ während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Whip",
				fr: "Mégafouet",
				de: "Blattgeißel"
			},
			effect: {
				en: "Does 10 damage for each Energy attached to this Pokémon to one of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts pour chaque Énergie attachée à ce Pokémon à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt einem Pokémon deines Gegners 10 Schadenspunkte für jede an dieses Pokémon angelegte Energie zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "It fights by swinging around its three spiky feelers. A hit from these steel spikes can reduce a boulder to rubble.",
		de: "Seine drei dornengespickten Schlingen, unter denen sogar große Felsen zu Bruch gehen, dienen ihm als Angriffswerkzeug."
	},

	thirdParty: {
		cardmarket: 280037,
		tcgplayer: 85429
	}
}

export default card
