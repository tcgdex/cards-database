import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		it: "Hippowdon",
		pt: "Hippowdon",
		de: "Hippoterus"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		450,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
		de: "Hippopotas"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Bazooka",
				fr: "Canon à Sable",
				de: "Sand-Bazooka"
			},
			effect: {
				en: "You may move a basic Energy attached to this Pokémon to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie de base attachée à ce Pokémon vers 1 de vos Pokémon de Banc.",
				de: "Du kannst 1 an dieses Pokémon angelegte Basis-Energie auf 1 Pokémon auf deiner Bank verschieben."
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
				de: "Rollende Felsen"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		en: "It is surprisingly quick to anger. It holds its mouth agape as a display of its strength.",
		de: "Es wird überraschend schnell wütend. Als Zeichen seiner Stärke sperrt es sein Maul auf."
	},

	thirdParty: {
		cardmarket: 280291,
		tcgplayer: 86086
	}
}

export default card
