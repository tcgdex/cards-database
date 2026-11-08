import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'es-es': "Tauros",
		'it-it': "Tauros",
		'pt-br': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Raging Bull",
			'fr-fr': "Taureau Furieux",
			'es-es': "Toro Embravecido",
			'it-it': "Toro Furioso",
			'pt-br': "Touro Indomável",
			'de-de': "Rasender Stier"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each damage counter on this Pokémon. This Pokémon is now Confused.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon. Ce Pokémon est maintenant Confus.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada contador de daño en este Pokémon. Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni segnalino danno presente su questo Pokémon. Questo Pokémon viene confuso.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada contador de dano neste Pokémon. Este Pokémon agora está Confuso.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte mehr zu. Dieses Pokémon ist jetzt verwirrt."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'de-de': "Bodycheck"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "They live in groups. The one with the longest, thickest, and most-scarred horns is the boss of the herd."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567223,
				tcgplayer: 241792
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567223,
				tcgplayer: 241792
			}
		},
	],
}

export default card
