import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
		es: "Dodrio",
		it: "Dodrio",
		pt: "Dodrio",
		de: "Dodri"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tri Attack",
				fr: "Triplattaque",
				es: "Triataque",
				it: "Tripletta",
				pt: "Triataque",
				de: "Triplette"
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Accelerating Stab",
				fr: "Poignard Accélérateur",
				es: "Puñalada Aceleradora",
				it: "Pugnalata Rapida",
				pt: "Estocada Aceleratória",
				de: "Beschleunigter Stich"
			},
			effect: {
				en: "This Pokémon can’t use Accelerating Stab during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Poignard Accélérateur pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Puñalada Aceleradora durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
				pt: "Este Pokémon não poderá usar Estocada Aceleratória durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Beschleunigter Stich während deines nächsten Zuges nicht einsetzen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 372437
	}
}

export default card
