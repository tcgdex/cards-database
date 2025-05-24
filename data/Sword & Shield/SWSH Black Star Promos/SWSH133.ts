import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Lance's Charizard V",
		fr: "Dracaufeu V de Peter",
		de: "Siegfrieds Glurak V",
		es: "Charizard V de Lance",
		pt: "Charizard V do Lance",
		it: "Charizard V di Lance"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			de: "Flammenwurf",
			es: "Lanzallamas",
			pt: "Lança-chamas",
			it: "Lanciafiamme"
		},

		damage: 200,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			it: "Scarta un'Energia da questo Pokémon."
		}
	}],

	regulationMark: "E",
	suffix: "V",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 220,
	types: ["Fire"],
	retreat: 3
}

export default card
