import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia",
		fr: "Lugia",
		de: "Lugia",
		es: "Lugia",
		it: "Lugia",
		'es-mx': "Lugia"
	},

	illustrator: "Kazuki Minami",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Elemental Blast",
			fr: "Explosion Élémentaire",
			de: "Urgewaltexplosion",
			es: "Ráfaga Elemental",
			it: "Furia degli Elementi",
			'es-mx': "Explosión Elemental"
		},

		effect: {
			en: "Discard a <span class=\"energy-symbol Fire\" title=\"Fire\">Fire</span> Energy, a <span class=\"energy-symbol Water\" title=\"Water\">Water</span> Energy, and a <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy from this Pokémon.",
			fr: "Défaussez une Énergie <span class=\"energy-symbol Fire\" title=\"Feu\">Fire</span>, une Énergie <span class=\"energy-symbol Water\" title=\"Eau\">Water</span> et une Énergie <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> de ce Pokémon.",
			de: "Lege 1 <span class=\"energy-symbol Fire\" title=\"Feuer\">Fire</span>-Energie, 1 <span class=\"energy-symbol Water\" title=\"Wasser\">Water</span>-Energie und 1 <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span>, 1 Energía <span class=\"energy-symbol Water\" title=\"Agua\">Water</span> y 1 Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> de este Pokémon.",
			it: "Scarta un'Energia <span class=\"energy-symbol Fire\" title=\"Fuoco\">Fire</span>, un'Energia <span class=\"energy-symbol Water\" title=\"Acqua\">Water</span> e un'Energia <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> da questo Pokémon.",
			'es-mx': "Descarta 1 Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span>, 1 Energía <span class=\"energy-symbol Water\" title=\"Agua\">Water</span> y 1 Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> de este Pokémon."
		},

		damage: 250,
		cost: ["Fire", "Water", "Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card