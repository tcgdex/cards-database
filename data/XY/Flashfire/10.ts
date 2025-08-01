import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		pt: "Maractus",
		de: "Maracamba"
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
				en: "Exciting Shake",
				fr: "Ébouriffement",
				es: "Zarandeo Emocionante",
				it: "Rinvigoritmo",
				pt: "Agito Empolgante",
				de: "Erquickendes Schütteln"
			},
			effect: {
				en: "During your next turn, flip 6 coins instead of 2 for this Pokémon's Prickly Needles attack.",
				fr: "Pendant votre prochain tour, lancez 6 pièces au lieu de 2 pour l'attaque Épines Acérées de ce Pokémon.",
				es: "Durante tu próximo turno, lanza 6 monedas en vez de 2 para el ataque Agujas Espinosas de este Pokémon.",
				it: "Durante il tuo prossimo turno, lancia sei volte una moneta invece di due per l'attacco Spine Aguzze di questo Pokémon.",
				pt: "Durante sua próxima vez de jogar, jogue 6 moedas em vez de 2 para o ataque Agulhas Espinhosas desse Pokémon.",
				de: "Wirf während deines nächsten Zuges 6 Münzen anstelle von 2 Münzen, wenn du die Attacke Stechende Dornen dieses Pokémon einsetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prickly Needles",
				fr: "Épines Acérées",
				es: "Agujas Espinosas",
				it: "Spine Aguzze",
				pt: "Agulhas Espinhosas",
				de: "Stechende Dornen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 20 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 281493
	}
}

export default card
