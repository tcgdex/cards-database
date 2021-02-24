import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Naganadel",
		fr: "Mandrillon",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		804,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Charging Up",
				fr: "Recharge",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turning Point",
				fr: "Point Décisif",
			},
			effect: {
				en: "If you have exactly 3 Prize cards remaining, this attack does 80 more damage.",
				fr: "S’il vous reste exactement 3 cartes Récompense, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

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
