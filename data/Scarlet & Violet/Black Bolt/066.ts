import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [638],
	set: Set,

	name: {
		en: "Cobalion",
		fr: "Cobaltium",
		de: "Kobalium",
		it: "Cobalion",
		pt: "Cobalion",
		es: "Cobalion",
		'es-mx': "Cobalion"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Righteous Edge",
			fr: "Lame Vertueuse",
			de: "Edle Klinge",
			it: "Giustalama",
			pt: "Gume Honrado",
			es: "Tajo Justiciero",
			'es-mx': "Filo Justiciero"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia Especial do Pokémon Ativo do seu oponente.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía Especial del Pokémon Activo de tu rival."
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Metal Arms",
			fr: "Bras Métalliques",
			de: "Metallarme",
			it: "Arti Metallici",
			pt: "Braços Metálicos",
			es: "Extremidades Metálicas",
			'es-mx': "Extremidades Metálicas"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 40 danni in più.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 40 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Herramienta Pokémon unida, este ataque hace 40 puntos de daño más."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836045
	}
}

export default card