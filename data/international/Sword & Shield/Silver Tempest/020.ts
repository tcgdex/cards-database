import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	illustrator: "OKACHEKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flame Cloak",
			'fr-fr': "Manteau de Feu",
			'es-es': "Manto Ígneo",
			'it-it': "Radunafuoco",
			'pt-br': "Manto de Chamas",
			'de-de': "Flammenumhang"
		},

		effect: {
			'en-us': "Attach a Fire Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Fighting Tackle",
			'fr-fr': "Charge Combative",
			'es-es': "Placaje Lucha",
			'it-it': "Azione da Combattente",
			'pt-br': "Investida de Luta",
			'de-de': "Kampf-Tackle"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682061,
				tcgplayer: 451651
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682061,
				tcgplayer: 451651
			}
		},
	],
}

export default card
