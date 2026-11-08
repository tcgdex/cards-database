import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Slap",
				'fr-fr': "Gifle",
				'es-es': "Bofetón",
				'it-it': "Sberla",
				'pt-br': "Tapa",
				'de-de': "Hieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Starlight is the source of their power. At night, they mark star positions by using psychic power to float stones.",
	},

	thirdParty: {
		cardmarket: 297515,
		tcgplayer: 130959
	}
}

export default card
