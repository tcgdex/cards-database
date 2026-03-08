import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Bewear",
		fr: "Chelours",
		de: "Kosturso",
		it: "Bewear",
		es: "Bewear",
		pt: "Bewear",
		'es-mx': "Bewear"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
		de: "Velursi",
		it: "Stufful",
		es: "Stufful",
		pt: "Stufful",
		'es-mx': "Stufful"
	},
	stage: "Stage1",
	dexId: [760],


	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			de: "Knöchelhieb",
			it: "Noccapugno",
			es: "Puño con Nudillos",
			pt: "Soco com Punho",
			'es-mx': "Puño con Nudillos"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hyper Lariat",
			fr: "Hyper Lasso",
			de: "Hyperlasso",
			it: "Iper Lariat",
			es: "Hiperlazo",
			pt: "Hiperlaço",
			'es-mx': "Hiperlazo"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 100 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 100 danni in più.",
			es: "Lanza 2 monedas. Si salen 2 caras, este ataque hace 100 puntos de daño más.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654451,
		cardmarket: 851183
	}
}

export default card