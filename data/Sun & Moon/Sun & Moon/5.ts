import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		es: "Parasect",
		it: "Parasect",
		pt: "Parasect",
		de: "Parasek"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
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
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 60 more damage. If all of them are heads, this attack does 120 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Lanza 3 monedas. Si sale cara en 1 de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, hace 60 puntos de daño más. Si sale cara en las 3, hace 120 puntos de daño más.",
				it: "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 60 in più e se esce testa tutte e tre le volte, ben 120 in più.",
				pt: "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 60 pontos de dano a mais. Se todas saírem cara, este ataque causará 120 pontos de dano a mais.",
				de: "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 60 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mushroom Drain",
				fr: "Champi Drain",
				es: "Drenaje Seta",
				it: "Micoassorbimento",
				pt: "Dreno de Cogumelo",
				de: "Pilzsauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295310,
		tcgplayer: 126876
	}
}

export default card
