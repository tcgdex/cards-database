import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Beam",
				'fr-fr': "Bulles d'O",
				'es-es': "Rayo Burbuja",
				'it-it': "Bollaraggio",
				'pt-br': "Jato de Bolhas",
				'de-de': "Blubbstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Superpower",
				'fr-fr': "Surpuissance",
				'es-es': "Fuerza Bruta",
				'it-it': "Troppoforte",
				'pt-br': "Superpoder",
				'de-de': "Kraftkoloss"
			},
			effect: {
				'en-us': "You may do 30 more damage. If you do, this Pokémon does 30 damage to itself.",
				'fr-fr': "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Puedes hacer 30 puntos de daño más. Si lo haces, este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 30 danni in più. Se lo fai, questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Você pode causar 30 de danos adicionais. Se você fizer isso, o Pokémon causará 30 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 30 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 30 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water.",
	},

	thirdParty: {
		cardmarket: 273634,
		tcgplayer: 96001
	}
}

export default card
