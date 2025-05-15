import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		es: "Sudowoodo",
		it: "Sudowoodo",
		de: "Mogelbaum",
		'pt-br': "Sudowoodo",
		ko: "꼬지모"
	},

	illustrator: "Yuriko Akase",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Although it always pretends to be a tree, its composition appears more similar to rock than to vegetation.",
		fr: "Bien qu'il fasse semblant d'être un arbre, par sa composition,\nil semble plus proche d'un minéral que d'un végétal.",
		es: "Aunque pretende ser un árbol, en su composición\nse parece más a una roca que a una planta.",
		it: "Sebbene finga di essere un albero, il suo corpo\nha una composizione più simile a quella di una\nroccia che a quella di un vegetale.",
		de: "Obwohl es vorgibt, ein Baum zu sein, kommt seine\nZusammensetzung einem Stein näher als einer Pflanze.",
		'pt-br': "Apesar de sempre fingir ser uma árvore, sua composição\ntem mais semelhanças com pedras do que com vegetação.",
		ko: "항상 나무인 척하고 있다.\n몸의 구조는 식물보다\n돌이나 바위에 가까운 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fighting Headbutt",
			fr: "Coup d'Boule Combatif",
			es: "Cabezazo Lucha",
			it: "Bottintesta Combattente",
			de: "Kämpferische Kopfnuss",
			'pt-br': "Cabeçada de Luta",
			ko: "투지의박치기"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-{ex}, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {ex}, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-{ex}, questo attacco infligge 30 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-{ex} ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {ex}, este ataque causará 30 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬이 「포켓몬 {ex}」라면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
