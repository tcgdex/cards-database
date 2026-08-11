import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 70,

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
				'en-us': "Acid Spray",
				'fr-fr': "Bombe Acide",
				'es-es': "Bomba Ácida",
				'it-it': "Acidobomba",
				'pt-br': "Spray Ácido",
				'de-de': "Säurespeier"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Inhaling the gas they belch will make you sleep for a week. They prefer unsanitary places.",
	},

	thirdParty: {
		cardmarket: 288231,
		tcgplayer: 111597
	}
}

export default card
