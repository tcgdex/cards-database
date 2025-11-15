import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		'es-mx': "Granbull",
		de: "Granbull",
		it: "Granbull",
		pt: "Granbull"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [210],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce",
			es: "Golpe de Gracia",
			'es-mx': "Golpe Definitivo",
			de: "Finalhieb",
			it: "Ultimocolpo",
			pt: "Golpe Final"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857613
	}
}

export default card