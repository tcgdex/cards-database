import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Rewind",
				'fr-fr': "Rembobinage",
				'es-es': "Rebobinar",
				'it-it': "Riavvolgi",
				'pt-br': "Retroceder",
				'de-de': "Rücklauf"
			},
			effect: {
				'en-us': "Devolve each of your opponent's evolved Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
				'fr-fr': "Faites dés-évoluer chacun des Pokémon évolués de votre adversaire et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
				'es-es': "Involuciona a cada uno de los Pokémon evolucionados de tu rival y pon la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
				'it-it': "Annulla l'evoluzione di ciascuno dei Pokémon evoluti del tuo avversario e mettine la carta Evoluzione di fase più alta nella sua mano.",
				'pt-br': "Reverte cada um dos Pokémon evoluídos do seu oponente e coloca o card de Evolução de Estágio mais alto na mão do seu oponente.",
				'de-de': "Rückentwickle jedes entwickelte Pokémon deines Gegners. Dein Gegner nimmt die höchste daraufliegende Evolutionskarte auf seine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'es-es': "Hiperrayo",
				'it-it': "Iper Raggio",
				'pt-br': "Hiper Raio",
				'de-de': "Hyperstrahl"
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
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said that it originates from clay dolls made by an ancient civilization.",
	},

	thirdParty: {
		cardmarket: 284214,
		tcgplayer: 101456
	}
}

export default card
