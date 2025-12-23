import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Gimmighoul",
		fr: "Mordudor",
		es: "Gimmighoul",
		it: "Gimmighoul",
		de: "Gierspenst",
		'pt-br': "Gimmighoul",
		ko: "모으령"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [999],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "This Pokémon was born inside a treasure chest about 1,500 years ago. It sucks the life-force out of scoundrels who try to steal the treasure.",
		fr: "Ce Pokémon est né dans un coffre au trésor,\nil y a environ 1 500 ans. Il absorbe l'énergie\nvitale des voyous qui osent voler son magot.",
		es: "El cofre en el que nació data de hace 1500 años\naproximadamente. Absorbe la energía vital de los\ngranujas que intentan hacerse con su tesoro.",
		it: "Nacque all'interno di un forziere circa 1.500\nanni fa. Assorbe l'energia vitale dei furfanti\nche provano a rubare il suo tesoro.",
		de: "Es entstand vor etwa 1500 Jahren in einer Schatztruhe.\nWenn Diebe versuchen, den Schatz zu stehlen, saugt es\nihnen die Lebensenergie aus.",
		'pt-br': "Este Pokémon nasceu em um baú do tesouro cerca\nde 1.500 anos atrás. Suga a força vital de\nfanfarrões que tentam roubar o tesouro.",
		ko: "약 1500년 전의 보물 상자 안에서 태어났다.\n보물을 훔치려 드는\n괘씸한 자의 생기를 흡수한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Chest-ouflage",
			fr: "Coffrouflage",
			es: "Encofrarse",
			it: "Camufforziere",
			de: "Truhentarnung",
			'pt-br': "Baú-muflagem",
			ko: "상자에숨기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card