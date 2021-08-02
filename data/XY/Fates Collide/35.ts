import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		579,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Fusion",
				fr: "Lien Fusion",
			},
			effect: {
				en: "If Solosis is on your Bench, this attack does 30 more damage. If Duosion is on your Bench, this attack does 60 more damage. If Reuniclus is on your Bench, this attack does 90 more damage.",
				fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires. Si Méios est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires. Si Symbios est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
