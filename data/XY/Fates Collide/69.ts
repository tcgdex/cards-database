import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "M Altaria EX",
		fr: "M-Altaria-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 220,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Altaria-EX",
		fr: "Altaria-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mist Purge",
				fr: "Nettoyage Brumeux",
			},
			effect: {
				en: "If this Pokémon has any Special Energy attached to it, this attack does 30 more damage and heal 30 damage from each of your Pokémon.",
				fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires et soigne 30 dégâts à chacun de vos Pokémon.",
			},
			damage: "100+",

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
	retreat: 2,



}

export default card
