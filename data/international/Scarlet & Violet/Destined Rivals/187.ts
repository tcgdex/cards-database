import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [918],
	set: Set,

	name: {
		'en-us': "Team Rocket's Spidops",
		'fr-fr': "Filentrappe de la Team Rocket",
		'de-de': "Team Rockets Spinsidias",
		'it-it': "Spidops del Team Rocket",
		'es-es': "Spidops del Team Rocket",
		'pt-br': "Spidops da Equipe Rocket",
		'es-mx': "Spidops del Equipo Rocket"
	},


	illustrator: "NC Empire",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Team Rocket's Tarountula",
		'fr-fr': "Tissenboule de la Team Rocket",
		'de-de': "Team Rockets Tarundel",
		'it-it': "Tarountula del Team Rocket",
		'es-es': "Tarountula del Team Rocket",
		'pt-br': "Tarountula da Equipe Rocket",
		'es-mx': "Tarountula del Equipo Rocket"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Charging Up",
			'fr-fr': "Recharge",
			'de-de': "Aufladen",
			'it-it': "Caricamento",
			'es-es': "Cargando",
			'pt-br': "Carregando",
			'es-mx': "Cargando"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua pilha de descarte a este Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Rocket Rush",
			'fr-fr': "Ruée Rocket",
			'de-de': "Rocket-Ansturm",
			'it-it': "Raffica Rocket",
			'es-es': "Embestida Rocket",
			'pt-br': "Raiva Rocket",
			'es-mx': "Asalto Rocket"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your Team Rocket's Pokémon in play.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de la Team Rocket en jeu.",
			'de-de': "Diese Attacke fügt für jedes deiner Team Rockets Pokémon im Spiel 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni tuo Pokémon del Team Rocket in gioco.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del Team Rocket en juego.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon da Equipe Rocket em jogo.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del Equipo Rocket en juego."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826062,
				tcgplayer: 632987
			}
		},
	],
}

export default card
