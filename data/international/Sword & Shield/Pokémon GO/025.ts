import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [767],
	set: Set,

	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Punk Out",
			'fr-fr': "Poudre d'Escampette",
			'es-es': "Renuncia",
			'it-it': "Scappovia",
			'pt-br': "Arregar",
			'de-de': "Rückzack"
		},

		effect: {
			'en-us': "If your opponent has any Pokémon V in play, this Pokémon has no Retreat Cost.",
			'fr-fr': "Si votre adversaire a au moins un Pokémon-V en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			'es-es': "Si tu rival tiene algún Pokémon V en juego, este Pokémon no tiene ningún Coste de Retirada.",
			'it-it': "Se il tuo avversario ha dei Pokémon-V in gioco, questo Pokémon non ha costo di ritirata.",
			'pt-br': "Se o seu oponente tiver algum Pokémon V em jogo, este Pokémon não terá custo de Recuo.",
			'de-de': "Wenn dein Gegner mindestens 1 Pokémon-V im Spiel hat, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It's nature's cleaner—it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665257,
				tcgplayer: 274457
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665257,
				tcgplayer: 274457
			}
		},
	],
}

export default card
