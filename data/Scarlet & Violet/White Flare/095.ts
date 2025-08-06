import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Virizion",
		fr: "Viridium",
		de: "Viridium",
		it: "Virizion",
		pt: "Virizion",
		es: "Virizion",
		'es-mx': "Virizion"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Giga Drain",
			fr: "Giga-Sangsue",
			de: "Gigasauger",
			it: "Gigassorbimento",
			pt: "Gigadreno",
			es: "Gigadrenado",
			'es-mx': "Gigadrenado"
		},

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast.",
			it: "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			pt: "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			es: "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'es-mx': "Cura a este Pokémon la misma cantidad de puntos de daño que infligiste al Pokémon Activo de tu rival."
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Emerald Blade",
			fr: "Lame Émeraude",
			de: "Smaragdgrüne Klinge",
			it: "Lamasmeraldo",
			pt: "Lâmina Esmeralda",
			es: "Hoja Esmeralda",
			'es-mx': "Cuchilla Esmeralda"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use attacks.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques.",
			es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835920
	}
}

export default card