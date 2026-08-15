import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
		es: "Musharna",
		it: "Musharna",
		pt: "Musharna",
		de: "Somnivora"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
		de: "Somniam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Telekinesis",
				fr: "Lévikinésie",
				de: "Telekinese"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dream Waltz",
				fr: "Valse Rêveuse",
				de: "Traumwalzer"
			},
			effect: {
				en: "This attack can be used even if this Pokémon is Asleep. If this Pokémon is Asleep, this attack does 30 more damage.",
				fr: "Cette attaque peut être utilisée même si ce Pokémon est Endormi. Si ce Pokémon est Endormi, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Dieser Angriff kann sogar eingesetzt werden, wenn dieses Pokémon schläft. Wenn dieses Pokémon schläft, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.",
		de: "Je nach Inhalt der Träume, die es frisst, nimmt der Dunst, der aus seiner Stirn austritt, unterschiedliche Farben an."
	},

	thirdParty: {
		cardmarket: 280656,
		tcgplayer: 87661
	}
}

export default card
