import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		'es-mx': "Meowstic",
		de: "Psiaugon",
		it: "Meowstic",
		pt: "Meowstic"
	},

	illustrator: "mingo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [678],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espurr"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tricky Steps",
			fr: "Pas Délicats",
			es: "Pasos Astutos",
			'es-mx': "Pasos Astutos",
			de: "Listiges Vorgehen",
			it: "Passinganno",
			pt: "Passos Ardilosos"
		},

		cost: ["Psychic", "Colorless"],
		damage: 80,

		effect: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			es: "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			'es-mx': "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
			de: "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben.",
			it: "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei Pokémon nella sua panchina.",
			pt: "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693521
	}
}

export default card