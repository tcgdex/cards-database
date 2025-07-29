import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Consume",
				fr: "Consumation",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructor Beam",
				fr: "Rayon Destructeur",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280536
	}
}

export default card
