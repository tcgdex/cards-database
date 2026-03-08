import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		de: "Ninjatom"
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
		fr: "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Empty Shell",
				fr: "Coquille vide",
				de: "Empty Shell"
			},
			effect: {
				en: "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
				fr: "Lorsque Munja est mis K.O, votre adversaire ne récolte pas de Récompense.",
				de: "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards."
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
				fr: "Malédiction supplémentaire",
				de: "Extra Curse"
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead.",
				fr: "Placez 2 marqueurs de dégât sur le Pokémon Défenseur. Si le Pokémon Défenseur est un Pokémon-ex, placez 4 marqueurs de dégât sur ce Pokémon.",
				de: "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead."
			},

		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 89118,
		cardmarket: 276417
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		},
		{
			type: "normal"
		},
	]
}

export default card
