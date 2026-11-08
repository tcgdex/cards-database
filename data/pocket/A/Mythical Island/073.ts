import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'de-de': "Dedenne",
		'pt-br': "Dedenne",
		'ko-kr': "데덴네"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",

	dexId: [702],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "It's small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people's homes and charge itself.",
		'fr-fr': "Son corps étant petit et son organe générateur\nd'électricité peu développé, il se recharge en\naspirant l'électricité des maisons avec sa queue.",
		'es-es': "Como es menudo y su órgano electrógeno está\npoco desarrollado, absorbe electricidad de las\ncasas con la cola para recargar sus reservas.",
		'it-it': "A causa del corpo piccolo, l'organo che genera\nelettricità non è molto sviluppato. Si ricarica\nassorbendo l'elettricità dalle case con la coda.",
		'de-de': "Da es klein ist und sein elektrisches Organ nicht\nstark ausgebildet ist, zapft es mit seinem Schwanz\nin Häusern Strom ab, um sich aufzuladen.",
		'pt-br': "Este Pokémon é pequeno, e seu órgão gerador de eletricidade ainda não se desenvolveu.\nAbastece a si mesmo usando sua cauda, com a qual absorve energia das casas das pessoas.",
		'ko-kr': "몸집이 작고 발전 기관이 미숙하기 때문에\n사람이 사는 집의 전기를\n꼬리를 통해 흡수해서 충전한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'de-de': "Donnerschock",
			'pt-br': "Trovoada de Choques",
			'ko-kr': "전기쇼크"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
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
