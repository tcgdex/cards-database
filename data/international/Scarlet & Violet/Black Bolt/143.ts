import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'de-de': "Caesurio",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'es-es': "Bisharp",
		'es-mx': "Bisharp"
	},

	illustrator: "toriyufu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'de-de': "Gladiantri",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'es-es': "Pawniard",
		'es-mx': "Pawniard"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Cut Up",
			'fr-fr': "Découpage",
			'de-de': "Zerhäckseln",
			'it-it': "Tagliuzzamento",
			'pt-br': "Dilacerar",
			'es-es': "Trocear",
			'es-mx': "Trozar"
		},

		damage: 40
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Finishing Blow",
			'fr-fr': "Coup de Grâce",
			'de-de': "Finalhieb",
			'it-it': "Ultimocolpo",
			'pt-br': "Golpe Final",
			'es-es': "Golpe de Gracia",
			'es-mx': "Golpe Definitivo"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836210,
				tcgplayer: 642597
			}
		},
	]
}

export default card
