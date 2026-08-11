import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [623],
	set: Set,

	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	attacks: [{
		name: {
			'en-us': "Reinforced Punch",
			'fr-fr': "Coup de Poing Renforcé",
			'es-es': "Puñetazo Reforzado",
			'it-it': "Fortepugno",
			'pt-br': "Soco Reforçado",
			'de-de': "Verstärkter Hieb"
		},

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Megaton Fall",
			'fr-fr': "Chute Mégatonne",
			'es-es': "Caída Megatón",
			'it-it': "Caduta Megatonica",
			'pt-br': "Queda do Megaton",
			'de-de': "Megatonnenfall"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "There's a theory that inside Golurk is a perpetual motion machine that produces limitless energy, but this belief hasn't been proven."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567174,
				tcgplayer: 241727
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567174,
				tcgplayer: 241727
			}
		},
	],
}

export default card
