import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [721],
	set: Set,

	name: {
		'en-us': "Volcanion V",
		'fr-fr': "Volcanion V",
		'es-es': "Volcanion V",
		'it-it': "Volcanion V",
		'pt-br': "Volcanion V",
		'de-de': "Volcanion V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'en-us': "Dynamite Tackle",
			'fr-fr': "Plaquage Explosif",
			'es-es': "Placaje Dinamita",
			'it-it': "Azione Esplosiva",
			'pt-br': "Investida Dinamite",
			'de-de': "Dynamit-Tackle"
		},

		effect: {
			'en-us': "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
			'fr-fr': "Si ce Pokémon a au moins 10 marqueurs de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene 10 contadores de daño o más sobre él, este ataque hace 150 puntos de daño más.",
			'it-it': "Se questo Pokémon ha 10 o più segnalini danno, questo attacco infligge 150 danni in più.",
			'pt-br': "Se este Pokémon tiver 10 ou mais contadores de dano nele, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon 10 oder mehr Schadensmarken liegen, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567105,
				tcgplayer: 241677
			}
		},
	],
}

export default card
