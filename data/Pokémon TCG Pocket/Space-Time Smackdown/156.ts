import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		de: "Tangoloss",
		'pt-br': "Tangrowth",
		ko: "덩쿠림보"
	},

	illustrator: "Saboteri",
	rarity: "One Star",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela"
	},

	description: {
		en: "Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.",
		fr: "La science a récemment découvert que\nles deux bras qu'il peut allonger à volonté\nsont en fait des lianes entrelacées.",
		es: "Se ha descubierto recientemente que los dos brazos que\nestira a voluntad son en realidad lianas enredadas entre sí.",
		it: "Può estendere le braccia a piacimento. In seguito a recenti\nricerche si è scoperto che sono in realtà fasci di liane.",
		de: "Jüngsten Erkenntnissen zufolge bestehen seine\nzwei Arme, die es beliebig verlängern kann,\naus gebündelten Ranken.",
		'pt-br': "Tangrowth tem dois braços, os quais pode estender como\nbem quiser. Pesquisas recentes mostraram que esses\nbraços são, na verdade, um monte de trepadeiras.",
		ko: "자유자재로 늘어나는 2개의 팔은\n덩굴이 뭉쳐진 것이었다는 사실이\n최근 연구로 밝혀졌다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			it: "Megassorbimento",
			de: "Megasauger",
			'pt-br': "Megadreno",
			ko: "메가드레인"
		},

		damage: 90,
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 30회복."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["dialga"]
}

export default card
