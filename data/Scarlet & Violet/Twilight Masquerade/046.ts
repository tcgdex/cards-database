import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		it: "Jynx",
		pt: "Jynx",
		de: "Rossana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Inviting Kiss",
			fr: "Bisou Tentant",
			es: "Beso Tentador",
			it: "Bacio Invitante",
			pt: "Beija-me",
			de: "Einladender Kuss"
		},

		effect: {
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, move an Energy from this Pokémon to the new Benched Pokémon.",
			fr: "Cherchez un Pokémon de base dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck. Si vous avez placé un Pokémon sur votre Banc de cette façon, déplacez une Énergie de ce Pokémon vers le nouveau Pokémon de Banc.",
			es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja. Si pones algún Pokémon en tu Banca de esta manera, mueve 1 Energía de este Pokémon al nuevo Pokémon en Banca.",
			it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo. Se hai messo un Pokémon nella tua panchina in questo modo, sposta un'Energia da questo Pokémon al nuovo Pokémon in panchina.",
			pt: "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho. Se você colocou qualquer Pokémon no seu Banco desta forma, mova uma Energia deste Pokémon para o novo Pokémon no Banco.",
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck. Wenn du auf diese Weise mindestens 1 Pokémon auf deine Bank gelegt hast, verschiebe 1 Energie von diesem Pokémon auf das neue Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Icy Snow",
			fr: "Verglas",
			es: "Nieve Helada",
			it: "Geloneve",
			pt: "Neve Congelada",
			de: "Eisiger Schnee"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Gapao"
}

export default card