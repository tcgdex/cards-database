import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		en: "Hop's Corvisquire",
		fr: "Bleuseille de Nabil",
		es: "Corvisquire de Paul",
		de: "Hops Kranoviz",
		it: "Corvisquire di Hop",
		pt: "Corvisquire do Lupo",
		'es-mx': "Corvisquire de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Hop's Rookidee",
		fr: "Minisange de Nabil",
		es: "Rookidee de Paul",
		de: "Hops Meikro",
		it: "Rookidee di Hop",
		pt: "Rookidee do Lupo",
		'es-mx': "Rookidee de Paul"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			es: "Picado Rápido",
			de: "Tempohechtsprung",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			'es-mx': "Descenso Veloz"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			de: "Rasierflügel",
			it: "Ala Tagliente",
			pt: "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 817286
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
