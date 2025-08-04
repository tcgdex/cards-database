import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		en: "Cinderace V",
		fr: "Pyrobut V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Blaze Kick",
			fr: "Pied Brûleur",
			de: "Feuerfeger",
			es: "Patada Ígnea",
			pt: "Chute Labareda",
			it: "Calciardente"
		},

		damage: 210,

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			pt: "Descarte 2 Energias {R} deste Pokémon.",
			it: "Scarta due Energie {R} da questo Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582177,
		tcgplayer: 253164
	}
}

export default card
