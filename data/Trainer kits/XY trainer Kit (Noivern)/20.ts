import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [676],
	set: Set,

	name: {
		en: "Furfrou",
		fr: "Couafarel",
		es: "Furfrou",
		it: "Furfrou",
		pt: "Furfrou",
		de: "Coiffwaff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	effect: {
		fr: "Soignez 30 dégâts à l'un de vos Pokémon.",
	},

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98018
	}
}

export default card