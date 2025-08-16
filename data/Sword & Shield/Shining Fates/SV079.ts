import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		fr: "Linéon de Galar",
		en: "Galarian Linoone",
		es: "Linoone de Galar",
		it: "Linoone di Galar",
		pt: "Linoone de Galar",
		de: "Galar-Geradaks"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Zigzaton de Galar",
		en: "Galarian Zigzagoon"
	},

	attacks: [{
		name: {
			fr: "Tranche-Nuit",
			en: "Night Slash",
			es: "Tajo Umbrío",
			it: "Nottesferza",
			pt: "Talho Noturno",
			de: "Nachthieb"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "This very aggressive Pokémon will recklessly challenge opponents stronger than itself."
	},

	thirdParty: {
		cardmarket: 539783
	}
}

export default card
