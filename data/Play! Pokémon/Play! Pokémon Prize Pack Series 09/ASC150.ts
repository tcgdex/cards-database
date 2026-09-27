import { Card } from "../../../interfaces"
import Set from "../Play! Pokémon Prize Pack Series 09"

const card: Card = {
	set: Set,

	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		'es-mx': "Dratini",
		de: "Dratini",
		it: "Dratini",
		pt: "Dratini"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 80,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	description: {
		en: "This Pokémon is full of life energy. It continually sheds its skin and grows steadily larger.",
		de: "Dieses Pokémon strotzt vor Lebensenergie. Es häutet sich ständig und wird dadurch größer."
	},

	variants: [
		{
			type: "normal",
		},
	],
}

export default card
