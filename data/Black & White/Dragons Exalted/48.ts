import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Empty Shell",
				fr: "Coquille Vide",
			},
			effect: {
				en: "If this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
				fr: "Si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute Maudite",
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
	],






}

export default card
