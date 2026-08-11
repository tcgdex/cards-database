import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [353],

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Haunt",
				'fr-fr': "Hanter",
				'es-es': "Espanto",
				'it-it': "Infestare",
				'pt-br': "Assombrar",
				'de-de': "Spuk"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
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
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "There's a proverb that says, \"Shun the house where Shuppet gather in the growing dusk.\""
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511755,
				tcgplayer: 226471
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511755,
				tcgplayer: 226471
			}
		},
	],
}

export default card
