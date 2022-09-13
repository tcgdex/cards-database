import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Spectrier",
		fr: "Spectreval",
		es: "Spectrier",
		it: "Spectrier",
		pt: "Spectrier",
		de: "Phantoross"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Night Footsteps",
			fr: "Empreintes Nocturnes",
			es: "Pisadas Nocturnas",
			it: "Orme Notturne",
			pt: "Pegadas Noturnas",
			de: "Nächtliche Schritte"
		},

		effect: {
			en: "Choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.",
			fr: "Choisissez 2 des Pokémon de votre adversaire, puis placez 2 marqueurs de dégâts sur chacun d'eux.",
			es: "Elige 2 de los Pokémon de tu rival y pon 2 contadores de daño en cada uno de ellos.",
			it: "Scegli due dei Pokémon del tuo avversario e metti due segnalini danno su ciascuno di essi.",
			pt: "Escolha 2 dos Pokémon do seu oponente e coloque 2 contadores de dano em cada um deles.",
			de: "Wähle 2 Pokémon deines Gegners und lege 2 Schadensmarken auf jedes von ihnen."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Phantom Strike",
			fr: "Frappe Fantôme",
			es: "Impacto Espectral",
			it: "Colpo Spettrale",
			pt: "Impacto Fantasma",
			de: "Phantomschlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Phantom Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe Fantôme.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Impacto Espectral.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Spettrale.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Impacto Fantasma.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Phantomschlag nicht einsetzen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card