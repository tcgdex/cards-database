import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
		de: "Klikk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charge Beam",
				fr: "Rayon Chargé",
				de: "Ladestrahl"
			},
			effect: {
				en: "Flip a coin. If heads, attach an Energy card from your discard pile to this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
				de: "Wirf 1 Münze. Nimm bei „Kopf“ 1 Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				de: "Klammer"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "Spinning minigears are rotated at high speed and repeatedly fired away. It is dangerous if the gears don't return.",
		de: "Lässt seine Einzelteile rapide rotieren und feuert sie auf Gegner ab. Kehren sie nicht zurück, wird es brenzlig."
	},

	thirdParty: {
		cardmarket: 280404,
		tcgplayer: 86476
	}
}

export default card
