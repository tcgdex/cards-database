import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon VMAX",
		fr: "Nymphali VMAX",
		es: "Sylveon VMAX",
		it: "Sylveon VMAX",
		pt: "Sylveon VMAX",
		de: "Feelinara VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sylveon V",
		fr: "Nymphali-V",
		es: "Sylveon V",
		it: "Sylveon-V",
		pt: "Sylveon V",
		de: "Feelinara-V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Precious Touch",
			fr: "Touche Précieuse",
			es: "Toque Precioso",
			it: "Tocco Prezioso",
			pt: "Toque Precioso",
			de: "Edle Berührung"
		},

		effect: {
			en: "Attach an Energy card from your hand to 1 of your Benched Pokémon. If you do, heal 120 damage from that Pokémon.",
			fr: "Attachez une carte Énergie de votre main à l'un de vos Pokémon de Banc. Dans ce cas, soignez 120 dégâts de ce Pokémon-là.",
			es: "Une 1 carta de Energía de tu mano a 1 de tus Pokémon en Banca. Si lo haces, cura 120 puntos de daño a ese Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia dalla tua mano. Se lo fai, cura quel Pokémon da 120 danni.",
			pt: "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon no Banco. Se fizer isto, cure 120 pontos de dano daquele Pokémon.",
			de: "Lege 1 Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an. Wenn du das machst, heile 120 Schadenspunkte bei jenem Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Max Harmony",
			fr: "Harmoniomax",
			es: "Maxiarmonía",
			it: "Dynarmonia",
			pt: "Harmonia Max",
			de: "Dyna-Harmonie"
		},

		effect: {
			en: "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			es: "Este ataque hace 30 puntos de daño más por cada tipo de Pokémon diferente en tu Banca.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon di tipo diverso nella tua panchina.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada tipo diferente de Pokémon no seu Banco.",
			de: "Diese Attacke fügt für jeden verschiedenen Pokémon-Typ auf deiner Bank 30 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card