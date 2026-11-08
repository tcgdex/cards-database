import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'fr-fr': "Salarsen VMAX",
		'en-us': "Toxtricity VMAX",
		'es-es': "Toxtricity VMAX",
		'it-it': "Toxtricity VMAX",
		'pt-br': "Toxtricity VMAX",
		'de-de': "Riffex VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Salarsen-V",
		'en-us': "Toxtricity V"
	},

	attacks: [{
		name: {
			'fr-fr': "Émeute G-Max",
			'en-us': "G-Max Riot",
			'es-es': "Gigarrebelión",
			'it-it': "Gigatumulto",
			'pt-br': "Rixa G-Max",
			'de-de': "Giga-Aufstand"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 80 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "160+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539953,
				tcgplayer: 232506
			}
		},
	],
}

export default card
