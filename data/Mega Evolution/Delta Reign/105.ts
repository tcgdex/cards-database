import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		de: "Felori",
		es: "Sprigatito",
		it: "Sprigatito",
		pt: "Sprigatito",
		'es-mx': "Sprigatito"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			de: "Knuddler",
			es: "Carantoña",
			it: "Carineria",
			pt: "Jogo Duro",
			'es-mx': "Juego Rudo"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 726558,
		cardmarket: 918941
	}
}

export default card