import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [918],
	set: Set,

	name: {
		en: "Team Rocket's Spidops",
		fr: "Filentrappe de la Team Rocket",
		de: "Team Rockets Spinsidias",
		it: "Spidops del Team Rocket",
		es: "Spidops del Team Rocket",
		pt: "Spidops da Equipe Rocket",
		'es-mx': "Spidops del Equipo Rocket"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		en: "Team Rocket's Tarountula",
		fr: "Tissenboule de la Team Rocket",
		de: "Team Rockets Tarundel",
		it: "Tarountula del Team Rocket",
		es: "Tarountula del Team Rocket",
		pt: "Tarountula da Equipe Rocket",
		'es-mx': "Tarountula del Equipo Rocket"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Charging Up",
			fr: "Recharge",
			de: "Aufladen",
			it: "Caricamento",
			es: "Cargando",
			pt: "Carregando",
			'es-mx': "Cargando"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Energy card from your discard pile to this Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua pilha de descarte a este Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu pila de descartes a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Rocket Rush",
			fr: "Ruée Rocket",
			de: "Rocket-Ansturm",
			it: "Raffica Rocket",
			es: "Embestida Rocket",
			pt: "Raiva Rocket",
			'es-mx': "Asalto Rocket"
		},

		effect: {
			en: "This attack does 30 damage for each of your Team Rocket's Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de la Team Rocket en jeu.",
			de: "Diese Attacke fügt für jedes deiner Team Rockets Pokémon im Spiel 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon del Team Rocket in gioco.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del Team Rocket en juego.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon da Equipe Rocket em jogo.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del Equipo Rocket en juego."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	],

	thirdParty: {
		cardmarket: 826061
	}
}

export default card
