import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu",
		it: "Riolu",
		es: "Riolu",
		pt: "Riolu",
		'es-mx': "Riolu"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Accelerating Stab",
			fr: "Poignard Accélérateur",
			de: "Beschleunigter Stich",
			it: "Pugnalata Rapida",
			es: "Puñalada Aceleradora",
			pt: "Estocada Aceleratória",
			'es-mx': "Cuchillada Aceleradora"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Accelerating Stab.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cuchillada Aceleradora."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654415
	}
}

export default card