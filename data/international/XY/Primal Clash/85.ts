import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Groudon EX",
		'fr-fr': "Groudon EX",
		'es-es': "Groudon EX",
		'it-it': "Groudon EX",
		'pt-br': "Groudon EX",
		'de-de': "Groudon EX"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rip Claw",
				'fr-fr': "Griffe Déchirante",
				'es-es': "Garra Arrebatadora",
				'it-it': "Strappartiglio",
				'pt-br': "Garra Dilacerante",
				'de-de': "Reißklaue"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Massive Rend",
				'fr-fr': "Déchirure Massive",
				'es-es': "Corte Masivo",
				'it-it': "Supersquarcio",
				'pt-br': "Laceração Massiva",
				'de-de': "Riesiger Riss"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273616,
		tcgplayer: 95983
	}
}

export default card
