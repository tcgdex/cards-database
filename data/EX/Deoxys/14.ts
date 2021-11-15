import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nincada",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Empty Shell",
				fr: "Coquille vide"
			},
			effect: {
				en: "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
				fr: "Lorsque Munja est mis K.O, votre adversaire ne récolte pas de Récompense."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extra Curse",
				fr: "Malédiction supplémentaire"
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead.",
				fr: "Placez 2 marqueurs de dégât sur le Pokémon Défenseur. Si le Pokémon Défenseur est un Pokémon-ex, placez 4 marqueurs de dégât sur ce Pokémon."
			},

		},
	],






}

export default card
