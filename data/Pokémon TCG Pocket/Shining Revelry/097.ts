import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		de: "Hornliu",
		'pt-br': "Weedle",
		ko: "뿔충이"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
		fr: "On trouve souvent ce Pokémon dans les forêts\net les hautes herbes. L'aiguillon de 5 cm\nsur sa tête contient un venin très toxique.",
		es: "Suele habitar bosques y praderas.\nTiene un afilado y venenoso aguijón\nde unos 5 cm encima de la cabeza.",
		it: "Vive soprattutto nei boschi e nei prati. Sul capo\nha un affilato e velenoso pungiglione lungo 5 cm.",
		de: "Es lebt bevorzugt in Wäldern und in hohem Gras.\nAuf dem Kopf trägt es einen circa 5 cm langen,\nspitzen, giftigen Stachel.",
		'pt-br': "Encontrado frequentemente em florestas e\npradarias. Possui uma farpa afiada e tóxica\nde cerca de 5 cm em cima da cabeça.",
		ko: "숲이나 풀밭에 많이 서식한다.\n머리끝에 5cm 정도의\n작고 날카로운 독침을 지니고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Multiply",
			fr: "Multiplication",
			es: "Multiplicar",
			it: "Moltiplicazione",
			de: "Vervielfachung",
			'pt-br': "Multiplicar",
			ko: "증식하기"
		},

		cost: ["Grass"],

		effect: {
			en: "Put 1 random Weedle from your deck onto your Bench.",
			fr: "Placez une carte Aspicot au hasard de votre deck sur votre Banc.",
			es: "Pon 1 Weedle aleatorio de tu baraja en tu Banca.",
			it: "Prendi un Weedle a caso dal tuo mazzo e mettilo nella tua panchina.",
			de: "Lege 1 zufälliges Hornliu aus deinem Deck auf deine Bank.",
			'pt-br': "Coloque 1 Weedle aleatório do seu baralho no seu Banco.",
			ko: "자신의 덱에서 「뿔충이」[Gr:Patchim v=\"을/를\" ] 랜덤으로 1장 벤치로 내보낸다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card