import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [589],

	name: {
		en: "Escavalier",
		fr: "Lançargot",
		es: "Escavalier",
		it: "Escavalier",
		pt: "Escavalier",
		de: "Cavalanzas"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
		es: "Karrablast",
		it: "Karrablast",
		pt: "Karrablast",
		de: "Laukaps"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				es: "Corte Furia",
				it: "Tagliofuria",
				pt: "Cortador de Fúria",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 70 more damage. If all of them are heads, this attack does 140 more damage.",
				fr: "Lancez 3 pièces. S'il n'y a qu'un côté face, cette attaque inflige 20 dégâts supplémentaires. S'il y a 2 côtés face, cette attaque inflige 70 dégâts supplémentaires. S'il y a 3 côtés face, cette attaque inflige 140 dégâts supplémentaires.",
				es: "Lanza 3 monedas. Si sale cara en 1 de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, hace 70 puntos de daño más. Si sale cara en las 3, hace 140 puntos de daño más.",
				it: "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 70 in più, e se esce testa tutte e tre le volte, 140 in più.",
				pt: "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 70 pontos de dano a mais. Se todas saírem cara, este ataque causará 140 pontos de dano a mais.",
				de: "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 70 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 140 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Seashell Attack",
				fr: "Carap'Attaque",
				es: "Conchaataque",
				it: "Conchigliata",
				pt: "Ataque de Concha do Mar",
				de: "Seemuschelangriff"
			},

			damage: 60,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "They use shells they've stolen from Shelmet to arm and protect themselves. They're very popular Pokémon in the Galar region."
	},

	thirdParty: {
		cardmarket: 483499,
		tcgplayer: 219383
	}
}

export default card
