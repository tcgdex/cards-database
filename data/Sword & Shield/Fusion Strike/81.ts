import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		en: "Drednaw",
		fr: "Torgamord",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Chewtle",
		fr: "Khélocrok",
		es: "Chewtle",
		it: "Chewtle",
		pt: "Chewtle",
		de: "Kamehaps"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hard Bite",
			fr: "Morsure Profonde",
			de: "Kräftiger Biss",
			es: "Mordisco Contundente",
			pt: "Mordida Agressiva",
			it: "Supermorso"
		},

		damage: "80+",

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582215
	}
}

export default card