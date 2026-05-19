import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [680],
	set: Set,

	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

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

		damage: 80
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740670,
				tcgplayer: 523809,
				cardtrader: 265232
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 784940
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740670,
				tcgplayer: 523809,
				cardtrader: 265232
			}
		},
	],

	illustrator: "Bun Toujo",

	
}

export default card
