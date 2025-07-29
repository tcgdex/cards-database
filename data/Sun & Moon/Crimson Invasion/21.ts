import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		it: "Mamoswine",
		pt: "Mamoswine",
		de: "Mamutel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 180,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Stomp",
				fr: "Double Écrasement",
				es: "Pisotón Doble",
				it: "Doppio Pestone",
				pt: "Pisoteada Dupla",
				de: "Doppelstampfer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Forceful Tackle",
				fr: "Charge Énergique",
				es: "Placaje Contundente",
				it: "Maniere Forti",
				pt: "Ofensiva Forçada",
				de: "Resoluter Rempler"
			},
			effect: {
				en: "You may put up to 9 damage counters on this Pokémon. This attack does 10 more damage for each damage counter you placed in this way.",
				fr: "Vous pouvez placer jusqu’à 9 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé de cette façon.",
				es: "Puedes poner hasta 9 contadores de daño en este Pokémon. Este ataque hace 10 puntos de daño más por cada contador de daño que hayas colocado de esta manera.",
				it: "Puoi mettere fino a nove segnalini danno su questo Pokémon. Questo attacco infligge 10 danni in più per ogni segnalino danno che hai messo in questo modo.",
				pt: "Você pode colocar até 9 contadores de dano neste Pokémon. Este ataque causa 10 pontos de dano a mais para cada contador de dano colocado desta forma.",
				de: "Du kannst bis zu 9 Schadensmarken auf dieses Pokémon legen. Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der auf diese Weise platzierten Schadensmarken zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 311871
	}
}

export default card
