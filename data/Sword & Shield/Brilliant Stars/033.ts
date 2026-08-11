import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [342],
	set: Set,

	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		es: "Crawdaunt",
		it: "Crawdaunt",
		pt: "Crawdaunt",
		de: "Krebutack"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
		es: "Corphish",
		it: "Corphish",
		pt: "Corphish",
		de: "Krebscorps"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Crab Impact",
			fr: "Crabe Impactant",
			es: "Impacto Cangrejo",
			it: "Granchimpatto",
			pt: "Impacto Caranguejo",
			de: "Krabbeinschlag"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		en: "A rough customer that wildly flails its giant claws. It is said to be extremely hard to raise.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608483,
				tcgplayer: 263732
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608483,
				tcgplayer: 263732
			}
		},
	],
}

export default card
