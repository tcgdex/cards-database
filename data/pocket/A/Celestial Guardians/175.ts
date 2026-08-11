import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magearna",
		'fr-fr': "Magearna",
		'es-es': "Magearna",
		'it-it': "Magearna",
		'de-de': "Magearna",
		'pt-br': "Magearna",
		'ko-kr': "마기아나"
	},

	illustrator: "Kuroimori",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [801],
	hp: 90,
	types: ["Metal"],

	description: {
		'en-us': "It synchronizes its consciousness with others to understand their feelings. This faculty makes it useful for taking care of people.",
		'fr-fr': "Il accède à la conscience des individus\nen se synchronisant avec eux. Cette\nfaculté l'aide à prendre soin d'eux.",
		'es-es': "Sincroniza su consciencia con la de los demás para comprender\nsus sentimientos. Utiliza esta capacidad para cuidar de las personas.",
		'it-it': "Sincronizzando la sua coscienza a quella degli\naltri, riesce a capire il loro stato d'animo. Grazie\na quest'abilità si prende cura degli esseri umani.",
		'de-de': "Es synchronisiert sein Bewusstsein mit dem anderer,\num ihre Gefühle zu verstehen. Dadurch fällt es ihm leicht,\nMenschen zu helfen.",
		'pt-br': "Sincroniza sua consciência com os outros para entender\nseus sentimentos. Essa capacidade faz com que seja útil\npara cuidar de pessoas.",
		'ko-kr': "의식을 동조시켜 상대의\n마음을 이해한다. 사람을\n도울 때 편리한 능력이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Silver Cannon",
			'fr-fr': "Canon Argenté",
			'es-es': "Cañón Plateado",
			'it-it': "Cannone Argenteo",
			'de-de': "Silberkanone",
			'pt-br': "Canhão Prateado",
			'ko-kr': "실버캐논"
		},

		damage: "40+",
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "If your opponent's Active Pokémon has an Ability, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a un talent, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 40 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha un'abilità, questo attacco infligge 40 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners eine Fähigkeit hat, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 40 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 특성을 가지고 있다면 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
