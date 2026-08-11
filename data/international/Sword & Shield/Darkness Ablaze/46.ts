import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [583],

	name: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
		'es-es': "Vanillish",
		'it-it': "Vanillish",
		'pt-br': "Vanillish",
		'de-de': "Gelatroppo"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'es-es': "Vanillite",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'de-de': "Gelatini"
	},

	attacks: [
		{
			cost: [
				"Water",
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
			damage: 30,

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


	stage: "Stage1",

	description: {
		'en-us': "By drinking pure water, it grows its icy body. This Pokémon can be hard to find on days with warm, sunny weather."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483109,
				tcgplayer: 219349
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483109,
				tcgplayer: 219349
			}
		},
	],
}

export default card
