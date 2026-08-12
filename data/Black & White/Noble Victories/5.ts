import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		de: "Lilminip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Aromax",
				fr: "Parfum Régénérant",
				de: "Aromax"
			},
			effect: {
				en: "Heal all damage from 1 of your Benched Pokémon.",
				fr: "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
				de: "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Windmill",
				fr: "Moulin à Vent",
				de: "Windmühle"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The fragrance of the garland on its head has a relaxing effect. It withers if a Trainer does not take good care of it.",
		de: "Der Duft des Blumenschmucks auf seinem Kopf wirkt beruhigend. Damit der Schmuck nicht verwelkt, muss man es gut pflegen."
	},

	thirdParty: {
		cardmarket: 280128,
		tcgplayer: 86794
	}
}

export default card
