import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		de: "Zarude",
		es: "Zarude",
		it: "Zarude",
		pt: "Zarude",
		'es-mx': "Zarude"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Deadly Whip",
			fr: "Fouet Mortel",
			de: "Tödliche Peitsche",
			es: "Látigo Mortal",
			it: "Frustata Micidiale",
			pt: "Chicote Letal",
			'es-mx': "Látigo Mortal"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 150 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 150 dégâts supplémentaires.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			es: "Lanza 2 monedas. Si salen 2 caras, este ataque hace 150 puntos de daño más.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 150 danni in più.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 150 pontos de dano a mais.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 150 puntos de daño más."
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 726536,
		cardmarket: 918898
	}
}

export default card