import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		fr: "Magnézone",
		en: "Magnezone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Répulsion Magnétique",
			en: "Magnetic Repulsion",
			es: "Repulsión Magnética",
			it: "Repulsione Magnetica",
			pt: "Repulsão Magnética",
			de: "Magnetische Abstoßung"
		},

		effect: {
			fr: "Vous pouvez envoyer le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			en: "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			es: "Puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Você pode mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Du kannst das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Fatal-Foudre",
			en: "Thunder",
			es: "Trueno",
			it: "Tuono",
			pt: "Trovão",
			de: "Donner"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Anesaki Dynamic",

	thirdParty: {
		cardmarket: 725145
	}
}

export default card