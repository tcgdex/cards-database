import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Swirlix",
		es: "Swirlix",
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		684,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Lick Away",
				es: "Lametazo",
			},
			effect: {
				en: "Remove all Special Conditions from this Pokémon.",
				es: "Elimina todas las Condiciones Especiales de este Pokémon.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				es: "Placaje",
			},

			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "My fluffy heart makes me feel like a marshmallow. A thrilling macaron full of colorful magic. Everybody's crazy about the taste of candy! ☆",
		es: "Mi suave corazón me hace sentir como una nube. Un emocionante macaron lleno de mágico color. ¡Todo el mundo se vuelve loco con los dulces! ☆",
	},

	thirdParty: {
		tcgplayer: 113761
	}
}

export default card
