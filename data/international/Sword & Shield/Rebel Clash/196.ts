import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'en-us': "Toxtricity VMAX",
		'fr-fr': "Salarsen VMAX",
		'es-es': "Toxtricity VMAX",
		'it-it': "Toxtricity VMAX",
		'pt-br': "Toxtricity VMAX",
		'de-de': "Riffex VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Toxtricity V",
		'fr-fr': "Salarsen-V",
		'es-es': "Toxtricity V",
		'it-it': "Toxtricity-V",
		'pt-br': "Toxtricity V",
		'de-de': "Riffex-V"
	},

	attacks: [{
		name: {
			'en-us': "G-Max Riot",
			'fr-fr': "Émeute G-Max",
			'es-es': "Gigarrebelión",
			'it-it': "Gigatumulto",
			'pt-br': "Rixa G-Max",
			'de-de': "Giga-Aufstand"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
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
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 457353,
				tcgplayer: 213157
			}
		},
	],
}

export default card
