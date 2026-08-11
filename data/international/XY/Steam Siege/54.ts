import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		299,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-Éclair",
				'es-es': "Onda Trueno",
				'it-it': "Tuononda",
				'pt-br': "Onda de Trovão",
				'de-de': "Donnerwelle"
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
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-Boulé",
				'es-es': "Placaje Giro",
				'it-it': "Rollazione",
				'pt-br': "Golpe de Colisão Rolante",
				'de-de': "Rolltackle"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its magnetic nose consistently faces north. Travelers check Nosepass to get their bearings.",
	},

	thirdParty: {
		cardmarket: 291624,
		tcgplayer: 121184
	}
}

export default card
