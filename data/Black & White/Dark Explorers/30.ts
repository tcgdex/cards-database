import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
		es: "Glaceon",
		it: "Glaceon",
		pt: "Glaceon",
		de: "Glaziola"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'Énergie",
				de: "Energiereflexion"
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers 1 de vos Pokémon de Banc.",
				de: "Verschiebe 1 an dieses Pokémon angelegte Energie auf 1 Pokémon auf deiner Bank."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "By controlling its body heat, it can freeze the atmosphere around it to make a diamond-dust flurry.",
		de: "Erzeugt ein Diamantstaubgestöber durch das Einfrieren der Luft um sich herum."
	},

	thirdParty: {
		cardmarket: 280358,
		tcgplayer: 85747
	}
}

export default card
