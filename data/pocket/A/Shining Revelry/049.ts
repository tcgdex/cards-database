import { Card } from "models/database/card"
import Set from "../Shining Revelry"

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

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
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
			'en-us': "Confuse Ray",
			'fr-fr': "Onde Folie",
			'es-es': "Rayo Confuso",
			'it-it': "Stordiraggio",
			'de-de': "Konfusstrahl",
			'pt-br': "Raio da Confusão",
			'ko-kr': "이상한빛"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt.",
			
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card