import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Ledian",
		'fr-fr': "Coxyclaque",
		'es-es': "Ledian",
		'it-it': "Ledian",
		'pt-br': "Ledian",
		'de-de': "Ledian"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'es-es': "Rapidez",
				'it-it': "Comete",
				'pt-br': "Ataque Veloz",
				'de-de': "Sternschauer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Comet Punch",
				'fr-fr': "Poing Comète",
				'es-es': "Puño Cometa",
				'it-it': "Cometapugno",
				'pt-br': "Soco de Cometa",
				'de-de': "Kometenhieb"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

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
		'en-us': "While it's believed that starlight provides it with energy, this Pokémon also loves to eat berries. In the daytime, it curls up in the grass to sleep.",
	},

	thirdParty: {
		cardmarket: 299417,
		tcgplayer: 138280
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
