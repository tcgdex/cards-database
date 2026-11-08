import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'de-de': "Wolwerock",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'es-mx': "Lycanroc"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'de-de': "Wuffels",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'es-mx': "Rockruff"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spike-Clad",
			'fr-fr': "Mantelure Piquante",
			'es-es': "Cuerpo Espín",
			'de-de': "Stachelgewand",
			'it-it': "Rivestimento Appuntito",
			'pt-br': "Revestimento Espinhoso",
			'es-mx': "Cuerpoespín"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach up to 2 Spiky Energy cards from your discard pile to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie Piquante de votre pile de défausse à ce Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes unir hasta 2 cartas de Energía Espinosa de tu pila de descartes a este Pokémon.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 2 Stachel-Energiekarten aus deinem Ablagestapel an dieses Pokémon anlegen.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi assegnare a questo Pokémon fino a due carte Energia Appuntita dalla tua pila degli scarti.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá ligar até 2 cartas Energia Espinhosa da sua pilha de descarte a este Pokémon.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir hasta 2 cartas de Energía Espinosa de tu pila de descartes a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Clamping Fangs",
			'fr-fr': "Crocs Pinçants",
			'es-es': "Colmillos Aplastantes",
			'de-de': "Festbeißende Fangzähne",
			'it-it': "Zanne Serrate",
			'pt-br': "Cravar Presas",
			'es-mx': "Colmillos Aplastantes"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Shiburingaru",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817237,
				tcgplayer: 623512
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817237,
				tcgplayer: 623512
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851018,
			}
		},
	],
}

export default card
