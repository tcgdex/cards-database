import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Matourgeon",
		en: "Floragato",
		es: "Floragato",
		it: "Floragato",
		pt: "Floragato",
		de: "Feliospa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Canon Graine",
			en: "Seed Bomb",
			es: "Bomba Germen",
			it: "Semebomba",
			pt: "Bomba de Sementes",
			de: "Samenbomben"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Fouet Magique",
			en: "Magic Whip",
			es: "Latigazo Mágico",
			it: "Magifrusta",
			pt: "Chicote Mágico",
			de: "Magische Peitsche"
		},

		effect: {
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card