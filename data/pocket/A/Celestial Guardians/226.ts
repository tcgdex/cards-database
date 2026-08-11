import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		de: "Tragosso",
		'pt-br': "Cubone",
		ko: "탕구리"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [104],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
		fr: "Lorsqu'il repense à sa mère défunte, ses sanglots résonnent\ntristement sous le crâne qu'il porte sur la tête.",
		es: "Cuando llora al acordarse de su madre fallecida, su\nllanto resuena en el cráneo que lleva en la cabeza.",
		it: "Quando piange pensando alla madre defunta,\ni suoi lamenti riecheggiano tristemente\nall'interno del teschio che ha in testa.",
		de: "Denkt Tragosso an seine verstorbene Mutter,\nso weint es. Sein Schluchzen hallt dabei in dem\nSchädel auf seinem Kopf klagend wider.",
		'pt-br': "Quando a memória de sua falecida mãe traz\nlágrimas aos seus olhos, seu choro ecoa com\ntristeza pelo crânio que usa em sua cabeça.",
		ko: "죽은 어머니를 떠올리며 울면\n머리에 쓴 뼈 안에서\n울음소리가 구슬프게 퍼진다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl",
			fr: "Rugissement",
			es: "Gruñido",
			it: "Ruggito",
			de: "Heuler",
			'pt-br': "Rosnadura",
			ko: "울음소리"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts.",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon − 20 Schadenspunkte zu.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão −20 pontos de dano.",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬이 사용하는 기술의 데미지를 -20한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card