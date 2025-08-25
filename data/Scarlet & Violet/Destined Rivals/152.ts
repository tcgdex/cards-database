import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		en: "Tauros",
		fr: "Tauros",
		de: "Tauros",
		it: "Tauros",
		es: "Tauros",
		pt: "Tauros",
		'es-mx': "Tauros"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			de: "Hornattacke",
			it: "Incornata",
			es: "Cornada",
			pt: "Ataque de Chifre",
			'es-mx': "Ataque Cuerno"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Clean Hit",
			fr: "Coup Net",
			de: "Sauberer Treffer",
			it: "Colpo Pulito",
			es: "Impacto Limpio",
			pt: "Golpe Certeiro",
			'es-mx': "Golpe Limpio"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 50 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
