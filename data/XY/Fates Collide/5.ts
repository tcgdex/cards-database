import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		it: "Snivy",
		pt: "Snivy",
		de: "Serpifeu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		495,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Blot",
				fr: "Pâté",
				es: "Absorción",
				it: "Macchia",
				pt: "Borrão",
				de: "Klecks"
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
				es: "Cura 10 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 10 danni.",
				pt: "Cure 10 de danos deste Pokémon.",
				de: "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289831,
		tcgplayer: 117768
	}
}

export default card
