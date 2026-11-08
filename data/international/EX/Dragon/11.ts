import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Shedinja",
		'fr-fr': "Munja",
		'de-de': "Ninjatom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [292],

	hp: 30,

	types: [
		"Grass"
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
				'en-us': "Wonder Guard",
				'fr-fr': "Garde mystik",
				'de-de': "Wonder Guard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Munja par les Pokémon-ex et les Pokémon Evolués de votre adversaire.",
				'de-de': "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Damage Curse",
				'fr-fr': "La malédiction des dégâts",
				'de-de': "Damage Curse"
			},
			effect: {
				'en-us': "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon.",
				'fr-fr': "Placez un marqueur de dégât sur le Pokémon Défenseur, plus un marqueur supplémentaire pour chaque marqueur de dégât sur Munja.",
				'de-de': "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon."
			},

		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89117,
				cardmarket: 275888
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89117,
				cardmarket: 275888
			},
		},
	],

}

export default card
