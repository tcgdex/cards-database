import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		pt: "Clobbopus",
		de: "Klopptopus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mizue",

	description: {
		en: "Its tentacles tear off easily, but it isn't alarmed when that happens—it knows they'll grow back. It's about as smart as a three-year-old."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			es: "Toque",
			pt: "Pulso",
			it: "Battuta"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			de: "Knöchelhieb",
			es: "Puño con Nudillos",
			pt: "Soco com Punho",
			it: "Noccapugno"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card