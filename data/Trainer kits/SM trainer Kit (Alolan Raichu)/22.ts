import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 152875
	}
}

export default card