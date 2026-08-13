import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dragonair",
		fr: "Draco lumineux",
		de: "Helles Dragonir"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
		de: "Dratini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Light",
				fr: "Lumière soignante",
				de: "Heilendes Licht"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.",
				fr: "Retirez un marqueur de dégât de chacun de vos Pokémon ayant des marqueurs de dégâts.",
				de: "Entferne von jedem deiner Pokémon, auf dem Schadensmarken liegen, eine der Schadensmarken."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Protective Wave",
				fr: "Onde protectrice",
				de: "Schützende Welle"
			},

			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Draco lumineux.",
				de: "Wirf eine Münze. Verhindere bei „Kopf“ während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Helles Dragonir zugefügt werden."
			},

			damage: 20
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "The aura it projects from its body has an effect on the surrounding climate and weather.",
		fr: "L'aura qui enveloppe son corps a un effet sur la météo et le climat environnants.",
		de: "Die Aura, die sein Körper ausstrahlt, beeinflusst das Klima und Wetter seiner Umgebung."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274674,
				tcgplayer: 86737
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274674,
				tcgplayer: 86737
			}
		}
	]
}

export default card
