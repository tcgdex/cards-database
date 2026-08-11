import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [509],

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Dig Claws",
				'fr-fr': "Creusogriffes",
				'es-es': "Hundir Garras",
				'it-it': "Scavazanne",
				'pt-br': "Fincar Garras",
				'de-de': "Schaufelkrallen"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fake Out",
				'fr-fr': "Bluff",
				'es-es': "Sorpresa",
				'it-it': "Bruciapelo",
				'pt-br': "Fingimento",
				'de-de': "Mogelhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483409,
				tcgplayer: 219412
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483409,
				tcgplayer: 219412
			}
		},
	],
}

export default card
