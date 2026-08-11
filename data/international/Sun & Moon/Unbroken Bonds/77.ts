import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Ominous Eyes",
				'fr-fr': "Regard Menaçant",
				'es-es': "Ojos Aciagos",
				'it-it': "Sguardo Malevolo",
				'pt-br': "Olhos Tenebrosos",
				'de-de': "Unheilvolle Augen"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent’s Pokémon.",
				'fr-fr': "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
				'es-es': "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "What gives meaning to its life is surprising others. If you set your ear against the red orbs around its neck, you can hear shrieking.",
	},

	thirdParty: {
		cardmarket: 372365,
		tcgplayer: 189177
	}
}

export default card
