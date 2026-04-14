import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Poochyena",
		fr: "Medhyèna de la Team Aqua",
		pt: "Poochyena da Equipe Aqua",
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
				en: "Roar",
				fr: "Hurlement",
				pt: "Rugido",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				pt: "Seu oponente troca o Pokémon Ativo por 1 dos próprios Pokémon no Banco."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				pt: "Mordida",
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

	thirdParty: {
		cardmarket: 282527,
		tcgplayer: 97063
	}
}

export default card
