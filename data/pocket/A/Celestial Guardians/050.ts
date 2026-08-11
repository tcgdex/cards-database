import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wishiwashi",
		'fr-fr': "Froussardine",
		'es-es': "Wishiwashi",
		'it-it': "Wishiwashi",
		'de-de': "Lusardin",
		'pt-br': "Wishiwashi",
		'ko-kr': "약어리"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [746],
	hp: 30,
	types: ["Water"],

	description: {
		'en-us': "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents.",
		'fr-fr': "Individuellement, ils sont très faibles. Ils ont\ndonc développé une tactique de déplacement\nen banc pour résister aux ennemis.",
		'es-es': "Debido a su manifiesta debilidad cuando van\nsolos, han adquirido la capacidad de agruparse\nen bancos a la hora de enfrentarse a un enemigo.",
		'it-it': "Presi singolarmente sono estremamente deboli.\nCiò li ha portati ad acquisire l'abilità di formare\nun banco quando affrontano il nemico.",
		'de-de': "Weil es alleine unheimlich schwach ist, hat es die\nFähigkeit erworben, einen Schwarm zu formen.\nSo kann es sich seinen Gegnern stellen.",
		'pt-br': "Quando estão sozinhos, são extremamente fracos.\nFormam cardumes para confrontar os seus oponentes.",
		'ko-kr': "1마리로는 너무나도 허약해서\n무리를 지어 상대에게 맞서는\n능력을 습득했다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'es-es': "Llamar a la Familia",
			'it-it': "Cerca Famiglia",
			'de-de': "Familienruf",
			'pt-br': "Chamar a Família",
			'ko-kr': "동료부르기"
		},

		cost: ["Water"],

		effect: {
			'en-us': "Put 1 random Wishiwashi or Wishiwashi ex from your deck onto your Bench.",
			'fr-fr': "Placez une carte au hasard entre Froussardine ou Froussardine-ex de votre deck sur votre Banc.",
			'es-es': "Pon 1 carta aleatoria de entre Wishiwashi o Wishiwashi ex de tu baraja en tu Banca.",
			'it-it': "Prendi un Wishiwashi o Wishiwashi-ex a caso dal tuo mazzo e mettilo nella tua panchina.",
			'de-de': "Lege von den Karten Lusardin und Lusardin-ex 1 zufällige aus deinem Deck auf deine Bank.",
			'pt-br': "Coloque 1 carta aleatória dentre Wishiwashi ou Wishiwashi ex do seu baralho no seu Banco.",
			'ko-kr': "자신의 덱에서 「약어리」 또는 「약어리 ex」 랜덤으로 1장 벤치로 내보낸다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card