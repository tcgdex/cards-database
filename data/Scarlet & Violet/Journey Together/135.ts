import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [831],
	set: Set,

	name: {
		en: "Hop's Wooloo",
		fr: "Moumouton de Nabil",
		es: "Wooloo de Paul",
		de: "Hops Wolly",
		it: "Wooloo di Hop",
		pt: "Wooloo do Lupo",
		'es-mx': "Wooloo de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			'es-mx': "Patada Devastadora"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Tomomi Ozaki",

	thirdParty: {
		cardmarket: 817287
	}
}

export default card