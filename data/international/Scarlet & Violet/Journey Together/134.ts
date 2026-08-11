import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		'en-us': "Hop's Corvisquire",
		'fr-fr': "Bleuseille de Nabil",
		'es-es': "Corvisquire de Paul",
		'de-de': "Hops Kranoviz",
		'it-it': "Corvisquire di Hop",
		'pt-br': "Corvisquire do Lupo",
		'es-mx': "Corvisquire de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Hop's Rookidee",
		'fr-fr': "Minisange de Nabil",
		'es-es': "Rookidee de Paul",
		'de-de': "Hops Meikro",
		'it-it': "Rookidee di Hop",
		'pt-br': "Rookidee do Lupo",
		'es-mx': "Rookidee de Paul"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'de-de': "Tempohechtsprung",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'es-mx': "Descenso Veloz"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'de-de': "Rasierflügel",
			'it-it': "Ala Tagliente",
			'pt-br': "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Souichirou Gunjima",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817286,
				tcgplayer: 623561
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817286,
				tcgplayer: 623561
			}
		},
	],
}

export default card
