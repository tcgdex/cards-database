import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Steelix EX",
		'fr-fr': "Steelix EX",
		'es-es': "Steelix EX",
		'it-it': "Steelix EX",
		'pt-br': "Steelix EX",
		'de-de': "Stahlos EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Edge",
				'fr-fr': "Tranchant Sauvage",
				'es-es': "Filo Salvaje",
				'it-it': "Furiafendente",
				'pt-br': "Limite Selvagem",
				'de-de': "Wilder Degen"
			},
			effect: {
				'en-us': "You may do 50 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 50 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Puedes hacer 50 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 50 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Você pode causar 50 de danos adicionais. Se fizer isso, este Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 50 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tail",
				'fr-fr': "Queue de Fer",
				'es-es': "Cola Férrea",
				'it-it': "Codacciaio",
				'pt-br': "Cauda de Ferro",
				'de-de': "Eisenschweif"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 100 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 100 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 100 de danos vezes o número de caras.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 100 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "100×",

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

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 291543,
		tcgplayer: 121196
	}
}

export default card
