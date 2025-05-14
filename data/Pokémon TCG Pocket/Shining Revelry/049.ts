import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		de: "Kryppuk",
		'pt-br': "Spiritomb",
		ko: "화강돌"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
		fr: "Son mauvais comportement lui a valu d'être enchaîné\nà une Clé de Voûte par un mystérieux sortilège.",
		es: "Por sus constantes fechorías se le acabó uniendo\na una Piedra Espíritu con un misterioso hechizo.",
		it: "A causa del suo comportamento molesto\nè stato imprigionato in una Roccianima\ncon un misterioso incantesimo.",
		de: "Aufgrund seiner ständigen Untaten wurde es mit\nmysteriösen Künsten an einen Spiritkern gebunden.",
		'pt-br': "Sua constante malvadeza e seus delitos causaram\nsua ligação a uma pedra por um feitiço misterioso.",
		ko: "항상 나쁜 짓만 하고 있었기에\n신비한 술법에 의해 본모습을\n쐐기돌에 속박당했다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
			es: "Rayo Confuso",
			it: "Stordiraggio",
			de: "Konfusstrahl",
			'pt-br': "Raio da Confusão",
			ko: "이상한빛"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confused.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confused.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene Confused.",
			de: "Wirf 1 Münze. Bei Kopf [Text:SpecialCondition v0=\"ist das Aktive Pokémon deines Gegners jetzt {}\" v1=\"{} das Aktive Pokémon deines Gegners jetzt\" ].",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confused.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 Confused[Gr:Patchim v=\"으로/로\" ] 만든다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card