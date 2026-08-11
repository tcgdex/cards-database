import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Shock Generator",
				'fr-fr': "Générateur de Choc",
				'es-es': "Generador Sacudida",
				'it-it': "Generatore Shock",
				'pt-br': "Gerador de Choque",
				'de-de': "Schockgenerator"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule Éclair",
				'es-es': "Bola Relámpago",
				'it-it': "Fulminpalla",
				'pt-br': "Bola de Raios",
				'de-de': "Kugelblitz"
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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It moves while constantly hovering. It discharges Thunder Wave and so on from the units at its sides.",
	},

	thirdParty: {
		cardmarket: 286297,
		tcgplayer: 107171
	}
}

export default card
