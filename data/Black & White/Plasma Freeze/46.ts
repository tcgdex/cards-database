import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		es: "Muk",
		it: "Muk",
		pt: "Muk",
		de: "Sleimok"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Suction",
				fr: "Succion Empoisonnée",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, heal 60 damage from this Pokémon.",
				fr: "Si le Pokémon Défenseur est Empoisonné, soignez 60 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Crash",
				fr: "Flot de Vase",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Défenseur.",
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

	retreat: 3,

	thirdParty: {
		cardmarket: 280924
	}
}

export default card
