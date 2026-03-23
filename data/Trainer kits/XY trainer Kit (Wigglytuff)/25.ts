import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],
	stage: "Basic",
	retreat: 1,

	effect: {
		fr: "Soignez 30 dégâts à l'un de vos Pokémon.",
	},

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98202
	}
}

export default card