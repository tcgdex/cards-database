import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Galarian Darmanitan V",
		'fr-fr': "Darumacho de Galar V",
		'es-es': "Darmanitan de Galar V",
		'it-it': "Darmanitan di Galar V",
		'pt-br': "Darmanitan de Galar V",
		'de-de': "Galar-Flampivian V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [555],
	set: Set,
	hp: 220,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Headbutt",
				'fr-fr': "Coup d'Boule Gelant",
				'es-es': "Cabezazo Paralizante",
				'it-it': "Bottintesta Congelante",
				'pt-br': "Cabeçada Congelante",
				'de-de': "Frostige Kopfnuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Slice",
				'fr-fr': "Tranche Gelée",
				'es-es': "Tajo Congelado",
				'it-it': "Tagliaghiaccio",
				'pt-br': "Corte Congelado",
				'de-de': "Frostschneide"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512555,
				tcgplayer: 226418
			}
		},
	],
}

export default card
