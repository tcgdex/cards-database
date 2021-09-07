import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Catastrophe",
				fr: "Catastrophe",
			},
			effect: {
				en: "As long as Gengar is your Active Pokémon, if any of your opponent’s Pokémon would be Knocked Out, put that Pokémon in the Lost Zone instead of discarding it. (Discard all cards attached to that Pokémon.)",
				fr: "Tant qu'Ectoplasma est votre Pokémon Actif, si l'un des Pokémon de votre adversaire est mis K.O., placez ce Pokémon dans la Zone Perdue au lieu de le défausser. (Défaussez toutes les cartes attachées à ce Pokémon.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hurl into Darkness",
				fr: "Jet dans les Ténèbres",
			},
			effect: {
				en: "Look at your opponent’s hand and choose a number of Pokémon you find there up to the number of Psychic Energy attached to Gengar. Put the Pokémon you chose in the Lost Zone.",
				fr: "Regardez la main de votre adversaire et choisissez-y autant de Pokémon qu'il existe de cartes Énergie Psychic attachées à Ectoplasma. Placez les Pokémon que vous avez choisis dans la Zone Perdue.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute maudite",
			},
			effect: {
				en: "Put 4 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire, comme bon vous semble.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
