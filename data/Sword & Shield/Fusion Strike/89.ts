import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [311],
	set: Set,

	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Higuchi",

	description: {
		en: "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spark Duo",
			fr: "Duo Étincelle",
			de: "Funkenduo",
			es: "Dúo de Chispas",
			pt: "Dupla Faiscante",
			it: "Duetto Scintillante"
		},

		damage: "20+",

		effect: {
			en: "If 1 of your Minun used an attack during your last turn, this attack does 100 more damage.",
			fr: "Si l'un de vos Négapi a utilisé une attaque pendant votre dernier tour, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn 1 deiner Minun während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Si 1 de tus Minun usó un ataque durante tu último turno, este ataque hace 100 puntos de daño más.",
			pt: "Se 1 dos seus Minun usou um ataque durante o seu último turno, este ataque causará 100 pontos de dano a mais.",
			it: "Se uno dei tuoi Minun ha usato un attacco durante il tuo ultimo turno, questo attacco infligge 100 danni in più."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582481,
		tcgplayer: 253245
	}
}

export default card