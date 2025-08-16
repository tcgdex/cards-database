import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
		es: "Ledian",
		it: "Ledian",
		pt: "Ledian",
		de: "Ledian"
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
		en: "Ledyba",
		fr: "Coxy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				es: "Rapidez",
				it: "Comete",
				pt: "Ataque Veloz",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
				en: "Comet Punch",
				fr: "Poing Comète",
				es: "Puño Cometa",
				it: "Cometapugno",
				pt: "Soco de Cometa",
				de: "Kometenhieb"
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
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

	thirdParty: {
		cardmarket: 299417,
		tcgplayer: 138280
	}
}

export default card
