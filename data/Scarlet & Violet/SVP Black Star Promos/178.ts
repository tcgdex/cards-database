import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Kyogre ex",
		fr: "Kyogre-ex",
		de: "Kyogre-ex",
		es: "Kyogre ex",
		it: "Kyogre-ex",
		pt: "Kyogre ex"
	},

	illustrator: "takuyoa",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Winding Waves",
			fr: "Vagues Onduleuses",
			de: "Windende Wellen",
			es: "Oleaje Eólico",
			it: "Onde Vorticose",
			pt: "Ondas Sinuosas"
		},

		effect: {
			en: "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Vous pouvez envoyer le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Du kannst das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
			es: "Puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Você pode mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		},

		damage: 80
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Tidal Surge",
			fr: "Marée Déferlante",
			de: "Brandungsflut",
			es: "Marejada",
			it: "Marea Impetuosa",
			pt: "Maré Repentina"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 230
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card