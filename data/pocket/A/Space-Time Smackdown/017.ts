import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Combee",
		fr: "Apitrini",
		es: "Combee",
		it: "Combee",
		de: "Wadribie",
		'pt-br': "Combee",
		ko: "세꿀버리"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [415],
	hp: 50,
	types: ["Grass"],

	description: {
		en: "At night, Combee sleep in a group of about a hundred, packed closely together in a lump.",
		fr: "À la nuit tombée, les Apitrini s'agglutinent\npar grappes de cent pour dormir.",
		es: "Cuando llega la noche, se juntan unos cien\nCombee y duermen formando una gran colmena.",
		it: "Scesa la notte, formano dei grandi alveari di\ncirca 100 esemplari e dormono raggruppati.",
		de: "Des Nachts schmiegen sich bis zu 100 Wadribie\naneinander und formieren sich so zum Schlafen\nzu einem großen Gebilde.",
		'pt-br': "À noite, Combee dormem amontados\nem grupos de aproximadamente cem indivíduos.",
		ko: "밤이 되면 100마리 정도의\n세꿀버리가 모여\n커다란 덩어리가 되어 잠잔다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			es: "Llamar a la Familia",
			it: "Cerca Famiglia",
			de: "Familienruf",
			'pt-br': "Chamar a Família",
			ko: "동료부르기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put 1 random Basic Pokémon from your deck onto your Bench.",
			fr: "Placez un Pokémon de base au hasard de votre deck sur votre Banc.",
			es: "Pon 1 Pokémon Básico aleatorio de tu baraja en tu Banca.",
			it: "Prendi un Pokémon Base a caso dal tuo mazzo e mettilo nella tua panchina.",
			de: "Lege 1 zufälliges Basis-Pokémon aus deinem Deck auf deine Bank.",
			'pt-br': "Coloque 1 Pokémon Básico aleatório do seu baralho no seu Banco.",
			ko: "자신의 덱에서 기본 포켓몬eul_reul 랜덤으로 1장 벤치로 내보낸다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
