import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		pt: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Mirage",
				fr: "Mirage Psychique",
				es: "Espejismo Psíquico",
				it: "Psicomiraggio",
				pt: "Miragem Psíquica",
				de: "Psycho-Trugbild"
			},
			effect: {
				en: "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can't apply more than 1 Psychic Mirage Ability at a time.",
				fr: "",
				es: "",
				it: "",
				pt: "",
				de: "Jede an deine {P}-Pokémon angelegte {P}-Basis-Energie liefert {P}{P}-Energie. Du kannst nicht mehr als jeweils 1 Fähigkeit Psycho-Trugbild anwenden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc Cérébral",
				de: "Verstandesschock"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
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

	retreat: 2,

	description: {
		en: "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
		de: "Dieses sehr seltene Pokémon hat eine andere Farbe als normal. Es ist sehr schwer zu finden."
	},

	thirdParty: {
		cardmarket: 280437,
		tcgplayer: 85638
	}
}

export default card
