import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 70
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Rampaging Fang",
			fr: "Croc Furieux",
			es: "Colmillo Furioso",
			it: "Zanna Infuriata",
			pt: "Canino Feroz",
			de: "Tobende Fänge"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "Mina Nakai",
	description: {
		en: "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",
	},
	variants: [
		{
			type: "holo"
		}
	],
}

export default card