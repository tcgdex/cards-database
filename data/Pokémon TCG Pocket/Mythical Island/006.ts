import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Serperior",
		fr: "Majaspic",
		es: "Serperior",
		it: "Serperior",
		de: "Serpiroyal",
		'pt-br': "Serperior",
		ko: "샤로다"
	},

	illustrator: "Yoshioka",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Servine"
	},

	description: {
		en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
		fr: "Il ne donnera tout son potentiel que contre un ennemi\npuissant indifférent à son regard écrasant de noblesse.",
		es: "Tan solo muestra su verdadero poder\na quienes no se amedrentan ante su\nnoble pero inquisitoria mirada.",
		it: "Dà il meglio di sé solo contro chi non\nresta intimidito dal suo nobile sguardo.",
		de: "Im Kampf zeigt es nur Gegnern, die seinem\nedlen Blick standhalten, seine wahre Kraft.",
		'pt-br': "Dá o máximo de si somente contra oponentes fortes\nque não são perturbados pelo brilho intenso dos olhos\nnobres de Serperior.",
		ko: "샤로다의 고상한 눈동자로\n쏘아보아도 태연할 정도로 강한\n상대에게만 진정한 실력을 발휘한다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jungle Totem",
			fr: "Jungle Dominante",
			es: "Dominio de la Selva",
			it: "Signore della Giungla",
			de: "Dschungelherrschaft",
			'pt-br': "Totem da Selva",
			ko: "밀림의 주인"
		},

		effect: {
			en: "Each {G} Energy attached to your {G} Pokémon provides 2 {G} Energy. This effect doesn't stack.",
			fr: "Chaque Énergie {G} attachée à vos Pokémon {G} fournit 2 Énergies {G}. Cet effet est non cumulable.",
			es: "Cada Energía {G} unida a tus Pokémon {G} proporciona 2 Energías {G}. Este efecto no se acumula.",
			it: "Ogni Energia {G} assegnata ai tuoi Pokémon {G} fornisce due Energie {G}. Questo effetto non è cumulabile.",
			de: "Jede an deine {G}-Pokémon angelegte {G}-Energie liefert 2 {G}-Energien. Der Effekt stapelt sich nicht.",
			'pt-br': "Cada Energia {G} ligada aos seus Pokémon {G} fornecerá 2 Energias {G}. Este efeito não acumula.",
			ko: "이 포켓몬이 있는 한, 자신의 필드의 {G}포켓몬에게 붙어 있는 모든 {G}에너지는 각각 {G}에너지 2개분으로 작용한다. 이 특성은 중복되지 않는다."
		}
	}],

	attacks: [{
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			de: "Solarstrahl",
			'pt-br': "Raio Solar",
			ko: "솔라빔"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
