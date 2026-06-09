import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"
const card: Card = {
	set: Set,

	name: {
		en: "Spoink",
		fr: "Spoink",
		es: "Spoink",
		it: "Spoink",
		de: "Spoink",
		ko: "피그점프",
		'pt-br': "Spoink"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [325],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Spoink will die if it stops bouncing. The pearl on its head amplifies its psychic powers.",
		fr: "Si Spoink arrêtait de sauter partout,\nil mourrait. La perle sur sa tête\namplifie ses pouvoirs psychiques.",
		es: "Si dejara de saltar, se debilitaría. La perla que lleva\nen la cabeza amplifica sus poderes psíquicos.",
		it: "Se dovesse smettere di saltellare, morirebbe. La perla\nche porta sul capo amplifica i suoi poteri psichici.",
		de: "Hört es je auf umherzuspringen, stirbt es.\nDie Perle auf seinem Kopf verstärkt seine\nPsycho-Kräfte.",
		ko: "뛰어오르는 것을 멈추면 죽는다고 한다.\n머리에 이고 있는 진주가\n사이코 파워를 증폭시켜 준다.",
		'pt-br': "Spoink morrerá se parar de pular. A pérola em sua cabeça\naumenta seus poderes psíquicos."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psycharge",
			fr: "Recharge Psychique",
			es: "Psicarga",
			it: "Carica Psichica",
			de: "Psycholadung",
			ko: "사이코차지",
			'pt-br': "Carregamento Psíquico"
		},
		cost: ["Psychic"],
		effect: {
			en: "Take a {P} Energy from your Energy Zone and attach it to this Pokémon.",
			fr: "Prenez une Énergie {P} de votre zone Énergie et attachez-la à ce Pokémon.",
			es: "Une 1 Energía {P} de tu área de Energía a este Pokémon.",
			it: "Prendi un'Energia {P} dalla tua Zona Energia e assegnala a questo Pokémon.",
			de: "Lege 1 {P}-Energie aus deinem Energiebereich an dieses Pokémon an.",
			ko: "자신의 에너지존에서 {P}에너지를 1개 내보내 이 포켓몬에게 붙인다.",
			'pt-br': "Pegue 1 Energia {P} da sua Zona de Energia e ligue-a a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}
export default card