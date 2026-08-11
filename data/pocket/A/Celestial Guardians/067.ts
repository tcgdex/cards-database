import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'it-it': "Togedemaru",
		'de-de': "Togedemaru",
		'pt-br': "Togedemaru",
		'ko-kr': "토게데마루"
	},

	illustrator: "Misa Tsutsui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [777],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "With the long hairs on its back, this Pokémon takes in electricity from other electric Pokémon. It stores what it absorbs in an electric sac.",
		'fr-fr': "Grâce à sa longue épine dorsale, il capte\nle tonnerre et les attaques des Pokémon Électrik,\npuis stocke leur courant dans sa poche électrique.",
		'es-es': "Utiliza el apéndice de la cabeza para absorber los rayos o los\nataques de los Pokémon de tipo Eléctrico para recargar su bolsa.",
		'it-it': "Si serve della lunga spina che ha sulla schiena\nper attirare e incamerare l'energia elettrica\ndei fulmini e dei Pokémon di tipo Elettro.",
		'de-de': "Der Schweif an seinem Rücken absorbiert Blitze\nund Angriffe von Elektro-Pokémon. Es speichert\nden so gewonnenen Strom in Elektrotaschen.",
		'pt-br': "Com os pelos compridos em suas costas, este Pokémon\nabsorve a eletricidade de outros Pokémon elétricos.\nArmazena o que absorve em uma bolsa elétrica.",
		'ko-kr': "등에 난 긴 털로 번개나\n전기포켓몬의 전격을 받아\n전기 주머니에 충전한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Electrosmash",
			'fr-fr': "Électro Impact",
			'es-es': "Electrogolpe",
			'it-it': "Elettrocolpo",
			'de-de': "Elektrostoß",
			'pt-br': "Pancada Elétrica",
			'ko-kr': "일렉트릭 스매시"
		},

		damage: "20+",
		cost: ["Lightning"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
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
