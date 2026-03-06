import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [102],

	name: {
		en: "Team Rocket's Exeggcute",
		fr: "Noeunoeuf de la Team Rocket",
		es: "Exeggcute del Team Rocket",
		'es-mx': "Exeggcute del Equipo Rocket",
		de: "Team Rockets Owei",
		it: "Exeggcute del Team Rocket",
		pt: "Exeggcute da Equipe Rocket"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Focused Wish",
			fr: "Vœu Fervent",
			es: "Intenso Deseo",
			'es-mx': "Deseo Enfocado",
			de: "Gezielter Wunsch",
			it: "Intensiderio",
			pt: "Desejo Direcionado"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 869688,
		tcgplayer: 675889
	}
}

export default card
