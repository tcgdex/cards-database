import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
		es: "Tapu Lele",
		it: "Tapu Lele",
		de: "Kapu-Fala",
		'pt-br': "Tapu Lele",
		ko: "카푸나비나"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		en: "It heals the wounds of people and Pokémon by sprinkling them with its sparkling scales. This guardian deity is worshiped on Akala.",
		fr: "C'est le gardien d'Akala. Il saupoudre une\npluie d'écailles scintillantes sur les humains\net les Pokémon blessés pour les soigner.",
		es: "Esparce escamas brillantes que curan a las\npersonas y los Pokémon. En la isla de Akala\nes venerado como su espíritu guardián.",
		it: "È il Pokémon protettore di Akala. Sparge luccicanti nuvole\ndi scaglie che curano le ferite di esseri umani e Pokémon.",
		de: "Es verteilt leuchtenden Flügelstaub, der die\nWunden von Menschen und Pokémon heilt.\nAuf Akala wird es als Schutzpatron verehrt.",
		'pt-br': "Cura as feridas de pessoas e Pokémon ao salpicar\nsuas escamas brilhantes sobre eles. Este espírito guardião\né venerado em Akala.",
		ko: "빛나는 인분을 흩뿌려\n사람이나 포켓몬의 상처를 치료한다.\n아칼라에서 모시는 수호신이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Arrow",
			fr: "Flèche d'Énergie",
			es: "Flecha Energía",
			it: "Freccia Energetica",
			de: "Energiepfeil",
			'pt-br': "Flecha de Energia",
			ko: "에너지애로"
		},

		cost: ["Psychic"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Energy attached to that Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a ese Pokémon.",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a quel Pokémon.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an jenes Pokémon angelegte Energie 20 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada àquele Pokémon.",
			ko: "상대의 포켓몬 1마리에게 그 포켓몬의 에너지의 개수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card