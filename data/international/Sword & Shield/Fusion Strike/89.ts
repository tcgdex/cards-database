import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [311],
	set: Set,

	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'es-es': "Plusle",
		'it-it': "Plusle",
		'pt-br': "Plusle",
		'de-de': "Plusle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Higuchi",

	description: {
		'en-us': "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spark Duo",
			'fr-fr': "Duo Étincelle",
			'de-de': "Funkenduo",
			'es-es': "Dúo de Chispas",
			'pt-br': "Dupla Faiscante",
			'it-it': "Duetto Scintillante"
		},

		damage: "20+",

		effect: {
			'en-us': "If 1 of your Minun used an attack during your last turn, this attack does 100 more damage.",
			'fr-fr': "Si l'un de vos Négapi a utilisé une attaque pendant votre dernier tour, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn 1 deiner Minun während deines letzten Zuges eine Attacke eingesetzt hat, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'es-es': "Si 1 de tus Minun usó un ataque durante tu último turno, este ataque hace 100 puntos de daño más.",
			'pt-br': "Se 1 dos seus Minun usou um ataque durante o seu último turno, este ataque causará 100 pontos de dano a mais.",
			'it-it': "Se uno dei tuoi Minun ha usato un attacco durante il tuo ultimo turno, questo attacco infligge 100 danni in più."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582481,
				tcgplayer: 253245
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582481,
				tcgplayer: 253245
			}
		},
	],
}

export default card
