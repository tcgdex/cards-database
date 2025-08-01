import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		it: "Probopass",
		pt: "Probopass",
		de: "Voluminas"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Press",
				fr: "Pression Robuste",
				es: "Dura Presión",
				it: "Duropressa",
				pt: "Apertão",
				de: "Hochdruck"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Nose",
				fr: "Triple Nez",
				es: "Nariz Triple",
				it: "Triplo Naso",
				pt: "Nariz Triplo",
				de: "Dreifachnase"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		cardmarket: 408354
	}
}

export default card
