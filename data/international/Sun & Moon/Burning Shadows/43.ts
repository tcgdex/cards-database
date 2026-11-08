import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
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
				'en-us': "Flip a coin. If heads, this attack does 60 more damage. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais. Se sair coroa, este Pokémon causará 20 pontos de dano a si mesmo.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu. Bei Zahl fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Giga Impacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Gigaimpacto",
				'de-de': "Gigastoß"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 170,

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

	retreat: 4,

	description: {
		'en-us': "It pushes the tips of its tails against its foes and then lets loose a high-voltage current. Its foes are burned to a crisp in an instant.",
	},

	thirdParty: {
		cardmarket: 299447,
		tcgplayer: 138525
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
