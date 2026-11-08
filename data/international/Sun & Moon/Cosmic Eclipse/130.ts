import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
		'es-es': "Grimer de Alola",
		'it-it': "Grimer di Alola",
		'pt-br': "Grimer de Alola",
		'de-de': "Alola-Sleima"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 80,

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
				'en-us': "Melt",
				'fr-fr': "Dissolution",
				'es-es': "Derretir",
				'it-it': "Liquefazione",
				'pt-br': "Derreter",
				'de-de': "Schmelzen"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Nasty Goo",
				'fr-fr': "Glu Fétide",
				'es-es': "Mugre Asquerosa",
				'it-it': "Appiccicume",
				'pt-br': "Gosma Nojenta",
				'de-de': "Ekelschleim"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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

	retreat: 2,

	description: {
		'en-us': "There are a hundred or so of them living in Alola's waste-disposal site. They're all hard workers who eat a lot of trash.",
	},

	thirdParty: {
		cardmarket: 408299,
		tcgplayer: 201172
	}
}

export default card
