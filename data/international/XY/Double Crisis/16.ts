import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Poochyena",
		'fr-fr': "Medhyèna de la Team Aqua",
		'pt-br': "Poochyena da Equipe Aqua",
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		261,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roar",
				'fr-fr': "Hurlement",
				'pt-br': "Rugido",
			},
			effect: {
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'pt-br': "Seu oponente troca o Pokémon Ativo por 1 dos próprios Pokémon no Banco."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'pt-br': "Mordida",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Poochyena can easily detect invading foes with its acute sense of smell. It's an excellent lookout!",
	},

	thirdParty: {
		cardmarket: 282527,
		tcgplayer: 97063
	}
}

export default card
