import { Card } from "../../../interfaces"
import Set from "../Promos-A"
const card: Card = {
	set: Set,
	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		de: "Elevoltek",
		ko: "에레키블",
		'pt-br': "Electivire"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		en: "Electabuzz"
	},
	description: {
		en: "The amount of electrical energy this Pokémon produces is proportional to the rate of its pulse. The voltage jumps while Electivire is battling.",
		fr: "La quantité d'électricité qu'il génère est\nproportionnelle à son pouls. Quand il livre\nun combat, son voltage augmente aussitôt.",
		es: "La cantidad de electricidad que genera es\nproporcional a su pulso. Al enzarzarse en\ncombate, su voltaje aumenta drásticamente.",
		it: "Produce una quantità di elettricità direttamente\nproporzionale alla sua frequenza cardiaca.\nDurante la lotta il voltaggio si alza all'istante.",
		de: "Wie viel Strom es erzeugt, ist abhängig von\nseinem Puls. Im Kampf steigt Elevolteks\nelektrische Spannung schlagartig an.",
		ko: "발전량은 심박 수에 비례한다.\n싸움이 시작되면\n단숨에 전압이 올라간다.",
		'pt-br': "A quantidade de energia elétrica que este Pokémon\nproduz é proporcional à sua pulsação. A voltagem\naumenta drasticamente quando Electivire está batalhando."
	},
	stage: "Stage1",
	attacks: [{
		name: {
			en: "Exciting Voltage",
			fr: "Voltage Amplifié",
			es: "Voltaje Exaltado",
			it: "Ipervoltaggio",
			de: "Knisternde Spannung",
			ko: "익사이팅볼트",
			'pt-br': "Voltagem Empolgante"
		},
		damage: "40+",
		cost: ["Lightning", "Lightning"],
		effect: {
			en: "If this Pokémon has at least 2 extra {L} Energy attached, this attack does 80 more damage.",
			fr: "Si ce Pokémon a au moins 2 Énergies {L} de plus, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 2 Energías {L} adicionales unidas a él, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha almeno 2 Energie {L} extra assegnate, questo attacco infligge 80 danni in più.",
			de: "Wenn an dieses Pokémon mindestens 2 extra {L}-Energien angelegt sind, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			ko: "{L}에너지 2개가 추가로 붙어 있다면 80데미지를 추가한다.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energia {L} extra ligada a ele, este ataque causará 80 pontos de dano a mais."
		}
	}],
	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],
	retreat: 3
}
export default card