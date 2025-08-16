import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Collect Fire",
				fr: "Quête du feu",
				de: "Feuersammeln"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Vulpix.",
				fr: "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Goupix.",
				de: "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei \"Kopf\" 1 davon an Vulpix an."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275192,
		tcgplayer: 90435
	}
}

export default card
