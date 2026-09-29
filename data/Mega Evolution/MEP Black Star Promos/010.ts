import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu",
		it: "Riolu",
		es: "Riolu",
		pt: "Riolu"
	},

	illustrator: "GOSSAN",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [447],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Accelerating Stab",
			fr: "Poignard Accélérateur",
			de: "Beschleunigter Stich",
			it: "Pugnalata Rapida",
			es: "Puñalada Aceleradora",
			pt: "Estocada Aceleratória"
		},

		damage: 30,

		effect: {
			en: "During your next turn, this Pokémon can't use Accelerating Stab.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Poignard Accélérateur.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puñalada Aceleradora.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Estocada Aceleratória."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851058,
				tcgplayer: 656260
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 851059,
				tcgplayer: 656262
			}
		},
	],
}

export default card

