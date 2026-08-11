import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Shedinja",
		'fr-fr': "Munja",
		'de-de': "Ninjatom"
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
		'en-us': "Nincada",
		'fr-fr': "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Empty Shell",
				'fr-fr': "Coquille vide",
				'de-de': "Empty Shell"
			},
			effect: {
				'en-us': "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
				'fr-fr': "Lorsque Munja est mis K.O, votre adversaire ne récolte pas de Récompense.",
				'de-de': "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Extra Curse",
				'fr-fr': "Malédiction supplémentaire",
				'de-de': "Extra Curse"
			},
			effect: {
				'en-us': "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead.",
				'fr-fr': "Placez 2 marqueurs de dégât sur le Pokémon Défenseur. Si le Pokémon Défenseur est un Pokémon-ex, placez 4 marqueurs de dégât sur ce Pokémon.",
				'de-de': "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead."
			},

		},
	],


	retreat: 0,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89118,
				cardmarket: 276417
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89118,
				cardmarket: 276417
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 228156,
			},
		},
	],

}

export default card
