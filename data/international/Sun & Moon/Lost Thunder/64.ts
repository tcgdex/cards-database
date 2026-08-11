import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'es-es': "Popplio",
		'it-it': "Popplio",
		'pt-br': "Popplio",
		'de-de': "Robball"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		728,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Disarming Voice",
				'fr-fr': "Voix Enjôleuse",
				'es-es': "Voz Cautivadora",
				'it-it': "Incantavoce",
				'pt-br': "Voz Desarmante",
				'de-de': "Säuselstimme"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Confundido.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
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

	description: {
		'en-us': "This Pokémon snorts body fluids from its nose, blowing balloons to smash into its foes. It's famous for being a hard worker.",
	},

	thirdParty: {
		cardmarket: 365702,
		tcgplayer: 178873
	}
}

export default card
