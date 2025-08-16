import { Card } from '../../../interfaces'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		en: "Quilladin",
		fr: "Boguérisse",
		es: "Quilladin",
		it: "Quilladin",
		pt: "Quilladin",
		de: "Igastarnish"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		651,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		it: "Chespin",
		pt: "Chespin",
		de: "Igamaro"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
				es: "Drenadoras",
				it: "Parassiseme",
				pt: "Semente Sanguessuga",
				de: "Egelsamen"
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
				es: "Cura 10 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 10 danni.",
				pt: "Cura 10 de danos deste Pokémon.",
				de: "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Needle Arm",
				fr: "Poing Dard",
				es: "Brazo Pincho",
				it: "Pugnospine",
				pt: "Braço de Agulha",
				de: "Nietenranke"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281270,
		tcgplayer: 88490
	}
}

export default card
