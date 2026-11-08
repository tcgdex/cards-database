import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		'en-us': "Copperajah VMAX",
		'fr-fr': "Pachyradjah VMAX",
		'es-es': "Copperajah VMAX",
		'it-it': "Copperajah VMAX",
		'pt-br': "Copperajah VMAX",
		'de-de': "Patinaraja VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Copperajah V",
		'fr-fr': "Pachyradjah-V",
		'es-es': "Copperajah V",
		'it-it': "Copperajah-V",
		'pt-br': "Copperajah V",
		'de-de': "Patinaraja-V"
	},

	attacks: [{
		name: {
			'en-us': "Dangerous Nose",
			'fr-fr': "Nez Dangereux",
			'es-es': "Trompa Peligrosa",
			'it-it': "Naso Pericoloso",
			'pt-br': "Tromba Perigosa",
			'de-de': "Gefährliche Nase"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'en-us': "G-Max Hammer",
			'fr-fr': "Marteau G-Max",
			'es-es': "Gigamazazo",
			'it-it': "Gigamaglio",
			'pt-br': "Martelo G-Max",
			'de-de': "Giga-Schlaghammer"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 457338,
				tcgplayer: 213235
			}
		},
	],
}

export default card
