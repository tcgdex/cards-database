import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

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
		'en-us': "Should a strange light be seen flickering in an abandoned building, Gastly is lurking there.",
	},

	thirdParty: {
		cardmarket: 311886,
		tcgplayer: 149059
	}
}

export default card
