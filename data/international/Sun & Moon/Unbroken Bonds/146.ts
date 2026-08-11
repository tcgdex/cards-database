import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'es-es': "Fearow",
		'it-it': "Fearow",
		'pt-br': "Fearow",
		'de-de': "Ibitak"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Run Double",
				'fr-fr': "Double Tunnelier",
				'es-es': "Taladradora Doble",
				'it-it': "Doppio Giravvita",
				'pt-br': "Furação Dupla",
				'de-de': "Doppel-Schlagbohrer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard 2 Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 2 Energías del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta due Energie assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 2 Energias do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "Carrying food through Fearow's territory is dangerous. It will snatch the food away from you in a flash!",
	},

	thirdParty: {
		cardmarket: 372432,
		tcgplayer: 189246
	}
}

export default card
