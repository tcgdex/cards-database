import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Mythical Slab",
		fr: "Dalle Fabuleuse",
		es: "Losa Singular",
		it: "Pietra Misteriosa",
		de: "Mythische Tafel",
		'pt-br': "Placa Mística",
		ko: "환상의 석판"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		en: "Look at the top card of your deck. If that card is a <span class=\"energy-text energy-text--type-psychic\"></span> Pokémon, put it into your hand. If it is not a <span class=\"energy-text energy-text--type-psychic\"></span> Pokémon, put it on the bottom of your deck."
	},

	trainerType: "Item",
	rarity: "Two Diamond"
}

export default card