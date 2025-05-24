import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shin Nagasawa",

	description: {
		en: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Adversity Jaws",
			fr: "Mâchoire de l'Adversité",
			de: "Unglücksbeißer",
			es: "Mandíbulas de Adversidad",
			pt: "Mandíbulas Adversas",
			it: "Mandibole Ostili"
		},

		damage: 70,

		effect: {
			en: "If your opponent's Active Pokémon is a {R} Pokémon, it is now Paralyzed.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {R}, il est maintenant Paralysé.",
			de: "Wenn das Aktive Pokémon deines Gegners ein {R}-Pokémon ist, ist es jetzt paralysiert.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon {R}, pasa a estar Paralizado.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon {R}, ele ficará Paralisado.",
			it: "Se il Pokémon attivo del tuo avversario è di tipo {R}, viene paralizzato."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card