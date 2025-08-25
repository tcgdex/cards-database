import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
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
		en: "Pancham",
		fr: "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Untamed Punch",
				fr: "Frappe Sauvage",
				es: "Golpe Salvaje",
				it: "Pugno Prorompente",
				pt: "Soco Indomado",
				de: "Wilder Schlag"
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 50 more damage, and both Active Pokémon are now Confused.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires, et les deux Pokémon Actifs sont maintenant Confus.",
				es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más, y ambos Pokémon Activos pasan a estar Confundidos.",
				it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 50 danni in più ed entrambi i Pokémon attivi vengono confusi.",
				pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 50 pontos de dano a mais e ambos os Pokémon Ativos agora estão Confusos.",
				de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu und beide Aktiven Pokémon sind jetzt verwirrt."
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
				en: "Double Stomp",
				fr: "Double Écrasement",
				es: "Pisotón Doble",
				it: "Doppio Pestone",
				pt: "Pisoteada Dupla",
				de: "Doppelstampfer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
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

	thirdParty: {
		cardmarket: 355593,
		tcgplayer: 165732
	}
}

export default card
