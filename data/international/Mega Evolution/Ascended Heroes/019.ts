import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Spidops",
		'fr-fr': "Filentrappe de la Team Rocket",
		'es-es': "Spidops del Team Rocket",
		'es-mx': "Spidops del Equipo Rocket",
		'de-de': "Team Rockets Spinsidias",
		'it-it': "Spidops del Team Rocket",
		'pt-br': "Spidops da Equipe Rocket"
	},

	evolveFrom: {
		'en-us': "Team Rocket's Tarountula",
		'fr-fr': "Tissenboule de la Team Rocket",
		'es-es': "Tarountula del Team Rocket",
		'es-mx': "Tarountula del Equipo Rocket",
		'de-de': "Team Rockets Tarundel",
		'it-it': "Tarountula del Team Rocket",
		'pt-br': "Tarountula da Equipe Rocket",
	},

	illustrator: "Taiga Kasai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Charging Up",
			'fr-fr': "Recharge",
			'es-es': "Cargando",
			'es-mx': "Cargando",
			'de-de': "Aufladen",
			'it-it': "Caricamento",
			'pt-br': "Carregando"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua pilha de descarte a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Rocket Rush",
			'fr-fr': "Ruée Rocket",
			'es-es': "Embestida Rocket",
			'es-mx': "Asalto Rocket",
			'de-de': "Rocket-Ansturm",
			'it-it': "Raffica Rocket",
			'pt-br': "Raiva Rocket"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your Team Rocket's Pokémon in play.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de la Team Rocket en jeu.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del Team Rocket en juego.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del Equipo Rocket en juego.",
			'de-de': "Diese Attacke fügt für jedes deiner Team Rockets Pokémon im Spiel 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni tuo Pokémon del Team Rocket in gioco.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon da Equipe Rocket em jogo."
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

	description: {
		'en-us': "It clings to branches and ceilings using its threads and moves without a sound. It takes out its prey before the prey even notices it.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869630,
			tcgplayer: 675831
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870168,
			tcgplayer: 677008
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870167,
			tcgplayer: 676868
		}
	},
],
}

export default card
