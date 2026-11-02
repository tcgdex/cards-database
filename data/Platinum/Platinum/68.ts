import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		de: "Venuflibis"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [455],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée",
				de: "Gifthauch"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sweet Saliva",
				fr: "Douce salive",
				de: "Süßer Sabber"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Benched Pokémon.",
				fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon de Banc.",
				de: "Entferne 1 Schadensmarke von jedem Pokémon auf deiner Bank."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
		de: "Klammert sich an Bäume in Sümpfen. Lockt Beute mit seinem süßlichen Speichel an und schluckt sie dann."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84101,
				cardmarket: 278464
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278464,
				tcgplayer: 84101
			}
		}
	],

}

export default card
