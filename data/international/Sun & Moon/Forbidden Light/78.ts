import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Untamed Punch",
				'fr-fr': "Frappe Sauvage",
				'es-es': "Golpe Salvaje",
				'it-it': "Pugno Prorompente",
				'pt-br': "Soco Indomado",
				'de-de': "Wilder Schlag"
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, this attack does 50 more damage, and both Active Pokémon are now Confused.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires, et les deux Pokémon Actifs sont maintenant Confus.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más, y ambos Pokémon Activos pasan a estar Confundidos.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 50 danni in più ed entrambi i Pokémon attivi vengono confusi.",
				'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 50 pontos de dano a mais e ambos os Pokémon Ativos agora estão Confusos.",
				'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu und beide Aktiven Pokémon sind jetzt verwirrt."
			},
			damage: "50+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Double Stomp",
				'fr-fr': "Double Écrasement",
				'es-es': "Pisotón Doble",
				'it-it': "Doppio Pestone",
				'pt-br': "Pisoteada Dupla",
				'de-de': "Doppelstampfer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "From the slight twitches of its bamboo leaf, it deduces its opponent's movements. It's eager to tussle but kindhearted toward its companions.",
	},

	thirdParty: {
		cardmarket: 355593,
		tcgplayer: 165732
	}
}

export default card
