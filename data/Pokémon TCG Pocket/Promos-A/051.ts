import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		de: "Mopex",
		'pt-br': "Cyclizar",
		ko: "모토마"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals.",
		fr: "Des fresques vieilles de 10 000 ans laissent penser\nque ce Pokémon transporte des êtres humains\nsur son dos depuis les temps anciens.",
		es: "Según parece, ha permitido que los humanos\nmonten en él desde tiempos remotos. Aparece\nen pinturas rupestres de hace diez mil años.",
		it: "Sembra che trasportasse esseri umani sul\ndorso già nell'antichità. È rappresentato in\npitture rupestri risalenti a 10.000 anni fa.",
		de: "Seit uralten Zeiten soll es Menschen auf seinem\nRücken reiten lassen. Darstellungen davon finden\nsich auf 10 000 Jahre alten Wandmalereien.",
		'pt-br': "Aparentemente, Cyclizar permite que as pessoas o\nmontem desde os tempos antigos. Representações deste\nato foram encontradas em murais com mais de 10.000 anos.",
		ko: "먼 옛날부터 인간을\n등에 태우고 다녔다고 한다.\n1만 년 전 벽화에도 그 모습이 그려져 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Overacceleration",
			fr: "Hyperaccélération",
			es: "Alta Aceleración",
			it: "Iperaccelerazione",
			de: "Überbeschleunigung",
			'pt-br': "Superaceleração",
			ko: "오버액셀"
		},

		cost: ["Colorless"],
		damage: 20,

		effect: {
			en: "During your next turn, this Pokémon’s Overacceleration attack does +20 damage.",
			fr: "Pendant votre prochain tour, l'attaque Hyperaccélération de ce Pokémon inflige + 20 dégâts.",
			es: "Durante tu próximo turno, el ataque Alta Aceleración de este Pokémon hace Overacceleration+20 puntos[/Ctrl:NoBreak] de daño.",
			it: "Durante il tuo prossimo turno, l'attacco Iperaccelerazione di questo Pokémon infligge +20 danni.",
			de: "Während deines nächsten Zuges fügt die Attacke Überbeschleunigung von diesem Pokémon + 20 Schadenspunkte zu.",
			'pt-br': "Durante o seu próximo turno, o ataque Superaceleração deste Pokémon causará + 20 pontos de dano.",
			ko: "자신의 다음 차례에 이 포켓몬의 「오버액셀」의 데미지를 +20한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
