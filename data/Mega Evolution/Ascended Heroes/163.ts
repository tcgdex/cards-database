import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Dunsparce",
		fr: "Insolourdo d'Okuba",
		es: "Dunsparce de Laureano",
		'es-mx': "Dunsparce de Laureano",
		de: "Aokis Dummisel",
		it: "Dunsparce di Ubaldo",
		pt: "Dunsparce do Lauro"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
			es: "Embestida Ascendente",
			'es-mx': "Embestida Ascendente",
			de: "Aufwärtsstoß",
			it: "Elevazione",
			pt: "Investida Ascendente"
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

	retreat: 0,
	regulationMark: "J",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869774,
			tcgplayer: 675975
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869774,
			tcgplayer: 675975
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870389,
			tcgplayer: 676979
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870390,
			tcgplayer: 677119
		}
	},
],
}

export default card