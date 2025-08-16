import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [900],
	set: Set,

	name: {
		fr: "Hachécateur V",
		de: "Axantor V",
		es: "Kleavor V",
		pt: "Kleavor V",
		it: "Kleavor V",
		en: "Kleavor V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Coupe",
			de: "Zerschneider",
			es: "Corte",
			pt: "Cortar",
			it: "Taglio",
			en: "Cut"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Hache Tranchante",
			de: "Axthieb",
			es: "Tajo Hacha",
			pt: "Machadada",
			it: "Lacerascure",
			en: "Axe Slash"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia da questo Pokémon. Se lo fai, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card