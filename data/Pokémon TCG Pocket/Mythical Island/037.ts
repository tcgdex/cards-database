import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		de: "Floette",
		'pt-br': "Floette",
		ko: "플라엣테"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",

	dexId: [670],
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Flabébé"
	},

	description: {
		en: "This Pokémon draws forth what power is left in withered flowers to make them healthy again. It holds a red flower.",
		fr: "Ce Pokémon parvient à canaliser le peu d'énergie\nencore présent dans les fleurs fanées pour leur\nredonner du tonus. Il tient une fleur rouge.",
		es: "Puede extraer la fuerza que les resta\na las flores marchitas para reanimarlas.\nLleva consigo una flor de color rojo.",
		it: "Riesce a tirare fuori l'energia rimasta\nnei fiori ormai secchi, rivitalizzandoli.\nQuesto Floette stringe un fiore rosso.",
		de: "Es entlockt verwelkten Blumen ihre letzte Kraft\nund nutzt diese, um sie wieder aufzupäppeln.\nDieses Exemplar trägt eine rote Blume.",
		'pt-br': "Este Pokémon revitaliza o resquício de força\nem flores murchas para torná-las saudáveis de novo.\nEle segura uma flor vermelha.",
		ko: "시든 꽃의 남은 힘을\n끌어내어 건강해지게 한다.\n빨간 꽃을 들고 있는 플라엣테."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			es: "Hoja Drenante",
			it: "Assorbifoglia",
			de: "Blattsauger",
			'pt-br': "Dreno Folha",
			ko: "리프드레인"
		},

		damage: 40,
		cost: ["Psychic"],

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 10회복."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
