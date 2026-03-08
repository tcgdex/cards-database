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
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [447],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Accelerating Stab",
			fr: "Coup de Poing Accéléré",
			de: "Beschleunigter Stich",
			it: "Pugnalata Rapida",
			es: "Puñalada Acelerada",
			pt: "Facada Acelerada"
		},

		damage: 30,

		effect: {
			en: "During your next turn, this Pokémon can't use Accelerating Stab.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Accéléré.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Beschleunigter Stich nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Puñalada Acelerada.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Facada Acelerada."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 656260,
		cardmarket: 851058
	},
	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["pokemon-center"]
		}
	]
}

export default card

