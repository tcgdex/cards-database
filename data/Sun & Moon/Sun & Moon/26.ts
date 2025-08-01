import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Incineroar",
		fr: "Félinferno",
		es: "Incineroar",
		it: "Incineroar",
		pt: "Incineroar",
		de: "Fuegro"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				es: "Colmillo Ígneo",
				it: "Rogodenti",
				pt: "Presas de Fogo",
				de: "Feuerzahn"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Darkest Lariat",
				fr: "Dark Lariat",
				es: "Lariat Oscuro",
				it: "Braccioteso",
				pt: "Lariat Escuro",
				de: "Dark Lariat"
			},
			effect: {
				en: "Flip 2 coins. This attack does 100 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295335
	}
}

export default card
