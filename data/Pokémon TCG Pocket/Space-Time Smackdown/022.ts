import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		de: "Shaymin",
		'pt-br': "Shaymin",
		ko: "쉐이미"
	},

	illustrator: "Narumi Sato",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [492],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
		fr: "Il peut dissoudre les toxines dans l'air pour transformer\nun désert en un champ de fleurs luxuriantes.",
		es: "Puede disolver las toxinas del aire para\ntransformar tierra yerma en campos de flores.",
		it: "Può dissolvere le tossine nell'aria per mutare\nall'istante una terra arida in un rigoglioso campo fiorito.",
		de: "Es kann die Luft von Giften reinigen und Ödland\nin ein üppig blühendes Blumenfeld verwandeln.",
		'pt-br': "Pode dissolver toxinas no ar para instantaneamente\ntransformar terras arruinadas em campos\nde flores deslumbrantes.",
		ko: "대기의 독소를 분해해서\n거칠어진 대지를 일순간에\n꽃밭으로 만드는 힘을 가지고 있다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fragrant Flower Garden",
			fr: "Jardin Fleuri Parfumé",
			es: "Jardín de Flores Aromático",
			it: "Giardino di Fiori Profumati",
			de: "Duftender Blumengarten",
			'pt-br': "Jardim de Flores Perfumadas",
			ko: "향기로운 화원"
		},

		effect: {
			en: "Once during your turn, you may heal 10 damage from each of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 10 dégâts de chacun de vos Pokémon.",
			es: "Una vez durante tu turno, puedes curar 10 puntos de daño a cada uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon da 10 danni.",
			de: "Einmal während deines Zuges kannst du 10 Schadenspunkte bei jedem deiner Pokémon heilen.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 10 pontos de dano de cada um dos seus Pokémon.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 전원의 HP를 10회복."
		}
	}],

	attacks: [{
		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			de: "Plumps",
			'pt-br': "Baque",
			ko: "돌아다니며 뛰기"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
