import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Uxie",
		fr: "Créhelf",
		es: "Uxie",
		it: "Uxie",
		de: "Selfe",
		'pt-br': "Uxie",
		ko: "유크시"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [480],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Known as “The Being of Knowledge.” It is said\nthat it can wipe out the memory of those who see\nits eyes.",
		fr: "On l'appelle \" être du savoir \". On raconte que\nson regard a le pouvoir d'effacer la mémoire.",
		es: "Se le conoce como el Ser de la Sabiduría. Se dice\nque puede borrar la memoria con una mirada.",
		it: "Noto come \"Essere della conoscenza\". Pare che\nfaccia perdere la memoria a chiunque lo fissi.",
		de: "\"Das wissende Wesen\". Es soll die Erinnerungen\nderer löschen, die ihm in die Augen sehen.",
		'pt-br': "Este Pokémon é conhecido como o ser de conhecimento\ne dizem que pode apagar a memória daqueles\nque veem os seus olhos.",
		ko: "지식의 신이라 불리고 있다.\n눈을 마주친 사람의 기억을 지워\n버리는 힘을 가지고 있다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mind Boost",
			fr: "Boost Cérébral",
			es: "Impulso Mental",
			it: "Carica Mentale",
			de: "Gedankenantrieb",
			'pt-br': "Impulso Mental",
			ko: "마인드부스트"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "Take a {P} Energy from your Energy Zone and attach it to Mesprit or Azelf.",
			fr: "Prenez une Énergie {P} de votre zone Énergie et attachez-la à Créfollet ou à Créfadet.",
			es: "Une 1 Energía {P} de tu área de Energía a tu Mesprit o a tu Azelf.",
			it: "Prendi un'Energia {P} dalla tua Zona Energia e assegnala a Mesprit o Azelf.",
			de: "Lege 1 {P}-Energie aus deinem Energiebereich an Vesprit oder Tobutz an.",
			'pt-br': "Pegue 1 Energia {P} da sua Zona de Energia e ligue-a a Mesprit ou Azelf.",
			ko: "자신의 에너지존에서 {P}에너지를 1개 내보내 「엠라이트」 또는 「아그놈」에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
