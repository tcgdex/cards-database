import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'de-de': "Jungglut"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Kick",
				'fr-fr': "Double Pied",
				'es-es': "Doble Patada",
				'it-it': "Doppiocalico",
				'pt-br': "Chute Duplo",
				'de-de': "Doppelkick"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "During a battle, the hot flame in its body increases. Its kicks have outstanding destructive power.",
	},

	thirdParty: {
		cardmarket: 361274,
		tcgplayer: 170840
	}
}

export default card
