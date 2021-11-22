import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Boom",
				fr: "Psycho-boom"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Trip",
				fr: "Avoir l'esprit ailleurs"
			},
			effect: {
				en: "If Grumpig and the Defending Pokémon have the same amount of Energy attached to them, the Defending Pokémon is now Confused.",
				fr: "Si Groret et le Pokémon Défenseur possèdent le même total en Énergie, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
