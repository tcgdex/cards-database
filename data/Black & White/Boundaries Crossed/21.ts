import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		es: "Numel",
		it: "Numel",
		pt: "Numel",
		de: "Camaub"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "The magma in its body reaches 2,200 degrees F. Its hump gets smaller when it uses Fire-type moves.",
		de: "In seinem Körper fließt 1 200 Grad heißes Magma. Nach Einsatz einer Feuer-Attacke schrumpft sein Höcker."
	},

	thirdParty: {
		cardmarket: 280608,
		tcgplayer: 87817
	}
}

export default card
