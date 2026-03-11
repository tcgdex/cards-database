import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [611],
	set: Set,

	name: {
		en: "Fraxure",
		fr: "Incisache",
		de: "Sharfax",
		it: "Fraxure",
		pt: "Fraxure",
		es: "Fraxure",
		'es-mx': "Fraxure"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
		de: "Milza",
		it: "Axew",
		pt: "Axew",
		es: "Axew",
		'es-mx': "Axew"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			de: "Biss",
			it: "Morso",
			pt: "Mordida",
			es: "Mordisco",
			'es-mx': "Mordida"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			en: "Boundless Power",
			fr: "Puissance Illimitée",
			de: "Unbegrenzte Kraft",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado",
			es: "Poder Ilimitado",
			'es-mx': "Poder Ilimitado"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836048
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836048
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836451
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836450
			}
		}
	]
}

export default card
