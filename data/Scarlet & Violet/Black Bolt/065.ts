import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		de: "Caesurio",
		it: "Bisharp",
		pt: "Bisharp",
		es: "Bisharp",
		'es-mx': "Bisharp"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		de: "Gladiantri",
		it: "Pawniard",
		pt: "Pawniard",
		es: "Pawniard",
		"es-mx": "Pawniard"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Cut Up",
			fr: "Découpage",
			de: "Zerhäckseln",
			it: "Tagliuzzamento",
			pt: "Dilacerar",
			es: "Trocear",
			'es-mx': "Trozar"
		},

		damage: 40
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce",
			de: "Finalhieb",
			it: "Ultimocolpo",
			pt: "Golpe Final",
			es: "Golpe de Gracia",
			'es-mx': "Golpe Definitivo"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836009
	}
}

export default card