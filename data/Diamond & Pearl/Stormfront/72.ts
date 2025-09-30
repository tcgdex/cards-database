import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
		de: "Roselia"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		fr: "Roselia",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Petal Spikes",
				fr: "Pétales-piques",
				de: "Blütenstachel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If Budew is anywhere under Roselia, the Defending Pokémon is now Asleep and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné. Si Rozbouton se trouve sous Roselia, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt und ist vergiftet. Wenn Knospi sich an beliebiger Stelle unter Roselia befindet, schläft das Verteidigende Pokémon jetzt und ist vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Les Roselia élevés dans une eau claire et potable font de ravissantes fleurs bariolées."
	},

	thirdParty: {
		cardmarket: 278370,
		tcgplayer: 88821
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
