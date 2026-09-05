import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		es: "Grimer",
		it: "Grimer",
		pt: "Grimer",
		de: "Sleima"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nasty Goo",
				fr: "Glu Fétide",
				de: "Ekelschleim"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 20,

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
		en: "It was born when sludge in a dirty stream was exposed to the moon's X-rays. It appears among filth.",
		de: "Es wurde geboren, als Schlamm von den Strahlen des Mondes getroffen wurde. Es erscheint, wo Unrat ist."
	},

	thirdParty: {
		cardmarket: 280277,
		tcgplayer: 85914
	}
}

export default card
