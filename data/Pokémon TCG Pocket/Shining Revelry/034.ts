import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		de: "Drifzepeli",
		'pt-br': "Drifblim",
		ko: "둥실라이드"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drifloon"
	},

	description: {
		en: "It can generate and release gas within its body. That's how it can control the altitude of its drift.",
		fr: "Il contrôle son altitude en produisant des gaz\nà l'intérieur de son corps puis en les expulsant.",
		es: "Crea en su interior gases y los expulsa. De esta\nforma es capaz de volar y controlar su altura.",
		it: "Può regolare l'altitudine di volo grazie\nalla capacità di produrre gas all'interno\ndel proprio corpo e di espellerli.",
		de: "Indem es Gas in seinem Körper erzeugt und\nwieder ausstößt, reguliert es seine Flughöhe.",
		'pt-br': "Ele pode gerar e soltar gases dentro do seu corpo.\nÉ assim que ele pode controlar a altitude da sua flutuação.",
		ko: "몸 안에서 가스를\n만들거나 토해 내며\n하늘을 나는 높이를 조절한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			de: "Windstoß",
			'pt-br': "Lufada de Vento",
			ko: "바람일으키기"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 0
}

export default card