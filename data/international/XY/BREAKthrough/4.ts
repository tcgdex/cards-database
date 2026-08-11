import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swagger",
				'fr-fr': "Vantardise",
				'es-es': "Contoneo",
				'it-it': "Bullo",
				'pt-br': "Arrogância",
				'de-de': "Angeberei"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It prefers harsh environments such as deserts. It can survive for 30 days on water stored in its body.",
	},

	thirdParty: {
		cardmarket: 286250,
		tcgplayer: 107123
	}
}

export default card
