import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'de-de': "Maracamba"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		556,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Exciting Shake",
				'fr-fr': "Ébouriffement",
				'es-es': "Zarandeo Emocionante",
				'it-it': "Rinvigoritmo",
				'pt-br': "Agito Empolgante",
				'de-de': "Erquickendes Schütteln"
			},
			effect: {
				'en-us': "During your next turn, flip 6 coins instead of 2 for this Pokémon's Prickly Needles attack.",
				'fr-fr': "Pendant votre prochain tour, lancez 6 pièces au lieu de 2 pour l'attaque Épines Acérées de ce Pokémon.",
				'es-es': "Durante tu próximo turno, lanza 6 monedas en vez de 2 para el ataque Agujas Espinosas de este Pokémon.",
				'it-it': "Durante il tuo prossimo turno, lancia sei volte una moneta invece di due per l'attacco Spine Aguzze di questo Pokémon.",
				'pt-br': "Durante sua próxima vez de jogar, jogue 6 moedas em vez de 2 para o ataque Agulhas Espinhosas desse Pokémon.",
				'de-de': "Wirf während deines nächsten Zuges 6 Münzen anstelle von 2 Münzen, wenn du die Attacke Stechende Dornen dieses Pokémon einsetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prickly Needles",
				'fr-fr': "Épines Acérées",
				'es-es': "Agujas Espinosas",
				'it-it': "Spine Aguzze",
				'pt-br': "Agulhas Espinhosas",
				'de-de': "Stechende Dornen"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 20 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses an up-tempo song and dance to drive away the bird Pokémon that prey on its flower seeds.",
	},

	thirdParty: {
		cardmarket: 281493,
		tcgplayer: 91143
	}
}

export default card
