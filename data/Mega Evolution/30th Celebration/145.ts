import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "A once-departed soul, returned to life in Hisui. Derives power from resentment, which rises as energy atop its head and takes on the forms of foes. In this way, Zorua vents lingering malice.",
		fr: "Zorua serait une âme disparue, ressuscitée à Hisui. Sa rancœur émane sous forme d'énergie au-dessus de sa tête, puis adopte l'apparence de ses ennemis, et finit par se dissiper."
	},

	name: {
		en: "Hisuian Zorua",
		fr: "Zorua de Hisui",
		de: "Hisui-Zorua",
		es: "Zorua de Hisui",
		it: "Zorua di Hisui",
		'es-mx': "Zorua de Hisui",
		pt: "Zorua de Hisui"
	},

	illustrator: "0313",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [570],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			'es-mx': "Arañazo",
			pt: "Arranhão"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907752,
				tcgplayer: 696686
			}
		}
	],
}

export default card
