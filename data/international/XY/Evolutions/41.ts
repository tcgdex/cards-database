import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Shock",
				'fr-fr': "Éclair",
				'es-es': "Impactrueno",
				'it-it': "Tuonoshock",
				'pt-br': "Trovoada de Choques",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Punch",
				'fr-fr': "Poing-Éclair",
				'es-es': "Puño Trueno",
				'it-it': "Tuonopugno",
				'pt-br': "Soco Trovoada",
				'de-de': "Donnerschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage. If tails, this Pokémon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más. Si sale cruz, este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più. Se esce croce, questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 de danos adicionais. Se sair coroa, este Pokémon causará 10 de danos a ele mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It loves to feed on strong electricity. It occasionally appears around large power plants and so on.",
	},

	thirdParty: {
		cardmarket: 293397,
		tcgplayer: 124054
	}
}

export default card
