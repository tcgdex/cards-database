import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'es-es': "Stantler",
		'it-it': "Stantler",
		'pt-br': "Stantler",
		'de-de': "Damhirplex"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mystifying Horns",
				'fr-fr': "Mysti-Cornes",
				'es-es': "Cuernos Desconcertantes",
				'it-it': "Falsecorna",
				'pt-br': "Chifres da Mistificação",
				'de-de': "Mystik-Hörner"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Charge",
				'fr-fr': "Grande Charge",
				'es-es': "Gran Carga",
				'it-it': "Grancarica",
				'pt-br': "Carga Grande",
				'de-de': "Großangriff"
			},
			effect: {
				'en-us': "If you have any Mega Evolution Pokémon on your Bench, this attack does 50 more damage.",
				'fr-fr': "Si vous avez un Pokémon Méga-Évolution sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si tienes algún Pokémon Megaevolución en tu Banca, este ataque hace 50 puntos de daño más.",
				'it-it': "Se hai dei Pokémon Megaevoluzione in panchina, questo attacco infligge 50 danni in più.",
				'pt-br': "Se você tiver algum Pokémon de Megaevolução no Banco, este ataque causará 50 de danos adicionais.",
				'de-de': "Wenn du mindestens 1 Mega-Entwicklungs-Pokémon auf deiner Bank hast, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The curved antlers subtly change the flow of air to create a strange space where reality is distorted.",
	},

	thirdParty: {
		cardmarket: 288266,
		tcgplayer: 111625
	}
}

export default card
