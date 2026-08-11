import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'es-es': "Granbull",
		'es-mx': "Granbull",
		'de-de': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull"
	},

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'es-mx': "Snubbull",
		'de-de': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [210],
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		damage: 50
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Finishing Blow",
			'fr-fr': "Coup de Grâce",
			'es-es': "Golpe de Gracia",
			'es-mx': "Golpe Definitivo",
			'de-de': "Finalhieb",
			'it-it': "Ultimocolpo",
			'pt-br': "Golpe Final"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It is actually timid and easily spooked. If attacked, it desperately flails its limbs about in an attempt to repel its opponent.",
	},

	illustrator: "Ryuta Fuse",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857613,
				tcgplayer: 662165,
				cardtrader: 356821
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857613,
				tcgplayer: 662165,
				cardtrader: 356821
			}
		},
	],
}

export default card
