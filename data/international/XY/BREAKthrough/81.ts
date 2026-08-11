import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'de-de': "Keifel"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'it-it': "Swinub",
		'pt-br': "Swinub",
		'de-de': "Quiekel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Recul",
				'es-es': "Oprimir",
				'it-it': "Spintonare",
				'pt-br': "Rebaixar",
				'de-de': "Runterdrücken"
			},
			effect: {
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o Pokémon Ativo por 1 dos próprios Pokémon no Banco.",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gathering Footsteps",
				'fr-fr': "Collecte d'Empreintes",
				'es-es': "Huellas de Grupo",
				'it-it': "Orme Vicine",
				'pt-br': "Coleta de Pegadas",
				'de-de': "Viele Spuren"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Colorless in the Retreat Cost of your Swinub, Piloswine, and Mamoswine.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite de votre Marcacrin, Cochignon et Mammochon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Colorless en el Coste de Retirada de tus Swinub, Piloswine y Mamoswine.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Colorless nel costo di ritirata dei tuoi Swinub, Piloswine e Mamoswine.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada Colorless no Custo para Recuar dos seus Swinub, Piloswine e Mamoswine.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten deiner Quiekel, Keifel und Mamutel zu."
			},
			damage: "30+",

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
		'en-us': "Because the long hair all over its body obscures its sight, it just keeps charging repeatedly.",
	},

	thirdParty: {
		cardmarket: 286327,
		tcgplayer: 107200
	}
}

export default card
