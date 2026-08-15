import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Glalie",
		fr: "Oniglali",
		es: "Glalie",
		it: "Glalie",
		pt: "Glalie",
		de: "Firnontor"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		de: "Schneppke"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				de: "Pulverschnee"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'Énergie",
				de: "Energiereflexion"
			},
			effect: {
				en: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie Water de ce Pokémon vers 1 de vos Pokémon de Banc.",
				de: "Verschiebe 1 an dieses Pokémon angelegte {W}-Energie auf 1 Pokémon auf deiner Bank."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It prevents prey from escaping by instantaneously freezing moisture in the air.",
		de: "Es verhindert, dass Beute flieht, indem es die Feuchtigkeit in der Luft augenblicklich einfriert."
	},

	thirdParty: {
		cardmarket: 281043,
		tcgplayer: 85757
	}
}

export default card
