import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'de-de': "Kryppuk",
		'pt-br': "Spiritomb",
		'ko-kr': "화강돌"
	},

	illustrator: "Shinji Kanda",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [442],
	hp: 80,
	types: ["Darkness"],

	description: {
		'en-us': "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
		'fr-fr': "Son mauvais comportement lui a valu d'être enchaîné\nà une Clé de Voûte par un mystérieux sortilège.",
		'es-es': "Por sus constantes fechorías se le acabó uniendo\na una Piedra Espíritu con un misterioso hechizo.",
		'it-it': "A causa del suo comportamento molesto\nè stato imprigionato in una Roccianima\ncon un misterioso incantesimo.",
		'de-de': "Aufgrund seiner ständigen Untaten wurde es mit\nmysteriösen Künsten an einen Spiritkern gebunden.",
		'pt-br': "Sua constante malvadeza e seus delitos causaram\nsua ligação a uma pedra por um feitiço misterioso.",
		'ko-kr': "항상 나쁜 짓만 하고 있었기에\n신비한 술법에 의해 본모습을\n쐐기돌에 속박당했다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Swirling Disaster",
			'fr-fr': "Désastre Tourbillonnant",
			'es-es': "Catástrofe en Espiral",
			'it-it': "Turbine Catastrofico",
			'de-de': "Wirbelndes Desaster",
			'pt-br': "Turbilhão do Desastre",
			'ko-kr': "소용돌이재앙"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "This attack does 10 damage to each of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario.",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente.",
			'ko-kr': "상대의 포켓몬 전원에게 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
