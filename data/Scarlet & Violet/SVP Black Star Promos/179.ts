import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [716],
	set: Set,

	name: {
		en: "Xerneas ex",
		fr: "Xerneas-ex",
		de: "Xerneas-ex",
		es: "Xerneas ex",
		it: "Xerneas-ex",
		pt: "Xerneas ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			de: "Aurorastrahl",
			es: "Rayo Aurora",
			it: "Raggiaurora",
			pt: "Raio Aurora"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Rising Horns",
			fr: "Cornes Ascendantes",
			de: "Erhobene Hörner",
			es: "Cornamenta Ascendente",
			it: "Impennacorna",
			pt: "Chifres Ascendentes"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 100 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 100 pontos de dano a mais."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card