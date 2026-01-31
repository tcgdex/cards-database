import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		'es-mx': "Riolu",
		de: "Riolu",
		it: "Riolu",
		pt: "Riolu"
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
			es: "Puñalada Aceleradora",
			'es-mx': "Cuchillada Aceleradora",
			de: "Beschleunigter Stich",
			it: "Pugnalata Rapida",
			pt: "Estocada Aceleratória"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Accelerating Stab.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cuchillada Aceleradora.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675924,
		cardmarket: 869723
	}
}

export default card