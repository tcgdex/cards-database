import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cut Up",
			fr: "Découpage",
			es: "Trocear",
			it: "Tagliuzzamento",
			pt: "Dilacerar",
			de: "Zerhäckseln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
			es: "Golpe Cuchillazo",
			it: "Lacerattacco",
			pt: "Ataque Cortante",
			de: "Schlitzender Schlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Slashing Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Dsuke",

	thirdParty: {
		cardmarket: 760631
	}
}

export default card