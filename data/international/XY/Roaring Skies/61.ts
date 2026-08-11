import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "M Rayquaza EX",
		'fr-fr': "M-Rayquaza EX",
		'es-es': "M-Rayquaza EX",
		'it-it': "M Rayquaza EX",
		'pt-br': "M-Rayquaza EX",
		'de-de': "M-Rayquaza EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 230,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Rayquaza-EX",
		'fr-fr': "Rayquaza-EX",
		'es-es': "Rayquaza-EX",
		'it-it': "Rayquaza-EX",
		'pt-br': "Rayquaza-EX",
		'de-de': "Rayquaza-EX"
	},

	stage: "MEGA",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Jungle Δ",
				'en-us': "Δ Wild",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Grass, Fire, Water ou Lightning de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'en-us': "Any damage done to this Pokémon by attacks from your opponent's Grass, Fire, Water, or Lightning Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				'es-es': "{title}: Cualquier daño infligido a este Pokémon por ataques de los Pokémon Grass, Fire, Water o Lightning de tu rival se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "{title}: I danni inflitti a questo Pokémon dagli attacchi dei Pokémon Grass, Fire, Water o Lightning del tuo avversario sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "{title}: Qualquer dano feito a este Pokémon por ataques de Pokémon Grass, Fire, Water ou Lightning do seu oponente será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "{title}: Schaden, der diesem Pokémon durch Angriffe der Grass-, Fire-, Water- oder Lightning-Pokémon deines Gegners zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Ascent",
				'fr-fr': "Draco Ascension",
				'es-es': "Ascenso Draco",
				'it-it': "Ascesa del Drago",
				'pt-br': "Ascenção do Dragão",
				'de-de': "Zenitstürmer"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon.",
				'es-es': "Descarta 2 Energías unidas a este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias ligadas a este Pokémon.",
				'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 300,

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 98097
	}
}

export default card
