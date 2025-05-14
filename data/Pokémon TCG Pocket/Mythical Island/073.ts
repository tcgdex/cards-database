import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		de: "Dedenne",
		'pt-br': "Dedenne",
		ko: "데덴네"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "It's small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people's homes and charge itself.",
		fr: "Son corps étant petit et son organe générateur\nd'électricité peu développé, il se recharge en\naspirant l'électricité des maisons avec sa queue.",
		es: "Como es menudo y su órgano electrógeno está\npoco desarrollado, absorbe electricidad de las\ncasas con la cola para recargar sus reservas.",
		it: "A causa del corpo piccolo, l'organo che genera\nelettricità non è molto sviluppato. Si ricarica\nassorbendo l'elettricità dalle case con la coda.",
		de: "Da es klein ist und sein elektrisches Organ nicht\nstark ausgebildet ist, zapft es mit seinem Schwanz\nin Häusern Strom ab, um sich aufzuladen.",
		'pt-br': "Este Pokémon é pequeno, e seu órgão gerador de eletricidade ainda não se desenvolveu.\nAbastece a si mesmo usando sua cauda, com a qual absorve energia das casas das pessoas.",
		ko: "몸집이 작고 발전 기관이 미숙하기 때문에\n사람이 사는 집의 전기를\n꼬리를 통해 흡수해서 충전한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			de: "Donnerschock",
			'pt-br': "Trovoada de Choques",
			ko: "전기쇼크"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralyzed.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene Paralyzed.",
			de: "Wirf 1 Münze. Bei Kopf [Text:SpecialCondition v0=\"ist das Aktive Pokémon deines Gegners jetzt {}\" v1=\"{} das Aktive Pokémon deines Gegners jetzt\" ].",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralyzed.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 Paralyzed[Gr:Patchim v=\"으로/로\" ] 만든다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card
