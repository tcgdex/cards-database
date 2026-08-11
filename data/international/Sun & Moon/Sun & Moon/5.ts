import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'es-es': "Parasect",
		'it-it': "Parasect",
		'pt-br': "Parasect",
		'de-de': "Parasek"
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
		'en-us': "Paras",
		'fr-fr': "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Cutter",
				'fr-fr': "Taillade",
				'es-es': "Corte Furia",
				'it-it': "Tagliofuria",
				'pt-br': "Cortador de Fúria",
				'de-de': "Zornklinge"
			},
			effect: {
				'en-us': "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 60 more damage. If all of them are heads, this attack does 120 more damage.",
				'fr-fr': "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Lanza 3 monedas. Si sale cara en 1 de ellas, este ataque hace 20 puntos de daño más. Si sale cara en 2, hace 60 puntos de daño más. Si sale cara en las 3, hace 120 puntos de daño más.",
				'it-it': "Lancia tre volte una moneta. Se esce testa una sola volta, questo attacco infligge 20 danni in più. Se esce testa due volte, ne infligge 60 in più e se esce testa tutte e tre le volte, ben 120 in più.",
				'pt-br': "Jogue 3 moedas. Se 1 delas sair cara, este ataque causará 20 pontos de dano a mais. Se 2 delas saírem cara, este ataque causará 60 pontos de dano a mais. Se todas saírem cara, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wirf 3 Münzen. Zeigt 1 davon Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu. Zeigen 2 davon Kopf, fügt diese Attacke 60 Schadenspunkte mehr zu. Zeigen alle Münzen Kopf, fügt diese Attacke 120 Schadenspunkte mehr zu."
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
				'en-us': "Mushroom Drain",
				'fr-fr': "Champi Drain",
				'es-es': "Drenaje Seta",
				'it-it': "Micoassorbimento",
				'pt-br': "Dreno de Cogumelo",
				'de-de': "Pilzsauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
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

	description: {
		'en-us': "The large mushroom on its back controls it. It often fights over territory with Shiinotic.",
	},

	thirdParty: {
		cardmarket: 295310,
		tcgplayer: 126876
	}
}

export default card
