import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		it: "Togedemaru",
		de: "Togedemaru",
		'pt-br': "Togedemaru",
		ko: "토게데마루"
	},

	illustrator: "Misa Tsutsui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "With the long hairs on its back, this Pokémon takes in electricity from other electric Pokémon. It stores what it absorbs in an electric sac.",
		fr: "Grâce à sa longue épine dorsale, il capte\nle tonnerre et les attaques des Pokémon Électrik,\npuis stocke leur courant dans sa poche électrique.",
		es: "Utiliza el apéndice de la cabeza para absorber los rayos o los\nataques de los Pokémon de tipo Eléctrico para recargar su bolsa.",
		it: "Si serve della lunga spina che ha sulla schiena\nper attirare e incamerare l'energia elettrica\ndei fulmini e dei Pokémon di tipo Elettro.",
		de: "Der Schweif an seinem Rücken absorbiert Blitze\nund Angriffe von Elektro-Pokémon. Es speichert\nden so gewonnenen Strom in Elektrotaschen.",
		'pt-br': "Com os pelos compridos em suas costas, este Pokémon\nabsorve a eletricidade de outros Pokémon elétricos.\nArmazena o que absorve em uma bolsa elétrica.",
		ko: "등에 난 긴 털로 번개나\n전기포켓몬의 전격을 받아\n전기 주머니에 충전한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Electrosmash",
			fr: "Électro Impact",
			es: "Electrogolpe",
			it: "Elettrocolpo",
			de: "Elektrostoß",
			'pt-br': "Pancada Elétrica",
			ko: "일렉트릭 스매시"
		},

		damage: "20+",
		cost: ["Lightning"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card
