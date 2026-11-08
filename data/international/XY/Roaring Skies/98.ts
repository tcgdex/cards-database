import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Thundurus EX",
		'fr-fr': "Fulguris EX",
		'es-es': "Thundurus EX",
		'it-it': "Thundurus EX",
		'pt-br': "Thundurus EX",
		'de-de': "Voltolos EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		642,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Headlock",
				'fr-fr': "Prise de Tête",
				'es-es': "Headlock",
				'it-it': "Bloccatesta",
				'pt-br': "Gravata",
				'de-de': "Würgegriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Voltage Rush",
				'fr-fr': "Charge Haute Tension",
				'es-es': "Descarga de Tensión",
				'it-it': "Elettroraffica",
				'pt-br': "Surto de Tensão",
				'de-de': "Spannungsrausch"
			},
			effect: {
				'en-us': "This Pokémon does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 50 dégâts.",
				'es-es': "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 50 danni a se stesso.",
				'pt-br': "Este Pokémon causa 50 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 282694,
		tcgplayer: 98134
	}
}

export default card
