import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Machine Gun Headbutt",
				'fr-fr': "Mitraille-Tête",
				'es-es': "Golpe Cabeza Incesante",
				'it-it': "Cozzata Mitra",
				'pt-br': "Cabeçada Metralhadora",
				'de-de': "Trommelfeuer-Kopfnuss"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				'es-es': "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara. Este Pokémon pasa a estar Confundido.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa. Questo Pokémon viene confuso.",
				'pt-br': "Jogue 3 moedas. Esse ataque causa 50 de danos vezes o número de caras. Este Pokémon agora está Confuso.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: "50×",

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

	retreat: 2,

	description: {
		'en-us': "It pulls up its shed skin to protect itself while it kicks. The bigger the crest, the more respected it is.",
	},

	thirdParty: {
		cardmarket: 281731,
		tcgplayer: 92244
	}
}

export default card
