import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Night Roam",
				'fr-fr': "Errance Nocturne",
				'es-es': "Deambular en la Noche",
				'it-it': "Girovago Notturno",
				'pt-br': "Vagar pela Noite",
				'de-de': "Nachtstreuner"
			},
			effect: {
				'en-us': "Put 1 damage counter on each Pokémon (both yours and your opponent’s).",
				'fr-fr': "Placez 1 marqueur de dégâts sur chaque Pokémon (les vôtres et ceux de votre adversaire).",
				'es-es': "Pon 1 contador de daño en cada Pokémon (tanto tuyos como de tu rival).",
				'it-it': "Metti un segnalino danno su tutti i Pokémon, sia tuoi che del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano em cada Pokémon (seus e do seu oponente).",
				'de-de': "Lege 1 Schadensmarke auf jedes Pokémon (deine und die deines Gegners)."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'es-es': "Emboscada",
				'it-it': "Imboscata",
				'pt-br': "Emboscada",
				'de-de': "Hinterhalt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Anyone who dares peer into its body to see its spectral ball of fire will have their spirit stolen away.",
	},

	thirdParty: {
		cardmarket: 299456,
		tcgplayer: 138534
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
