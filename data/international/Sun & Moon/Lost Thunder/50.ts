import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		667,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wild Dash",
				'fr-fr': "Panique Sauvage",
				'es-es': "Carrera Salvaje",
				'it-it': "Scatto Selvaggio",
				'pt-br': "Fuga Selvagem",
				'de-de': "Wilder Spurt"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				'es-es': "Si tu rival tiene algún Pokémon-GX o Pokémon-EX en juego, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se il tuo avversario ha dei Pokémon-GX o dei Pokémon-EX in gioco, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Se o seu oponente tiver algum Pokémon-GX ou Pokémon-EX em jogo, este Pokémon não terá custo de Recuo.",
				'de-de': "Wenn dein Gegner mindestens 1 Pokémon-GX oder Pokémon-EX im Spiel hat, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They set off on their own from their pride and live by themselves to become stronger. These hot-blooded Pokémon are quick to fight.",
	},

	thirdParty: {
		cardmarket: 365690,
		tcgplayer: 178855
	}
}

export default card
