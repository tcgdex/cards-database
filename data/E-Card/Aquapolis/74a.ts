import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik",
		de: "Traumato"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo",
				de: "Schlafeinflößer"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and switch it with the Defending Pokémon. The new Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Wähle bei \"Kopf\" 1 der Pokémon auf der Bank deines Gegners und tausche es mit dem Verteidigenden Pokémon. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275147
	}
}

export default card
