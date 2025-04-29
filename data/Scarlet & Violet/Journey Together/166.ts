import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		de: "Wolwerock",
		it: "Lycanroc",
		pt: "Lycanroc",
		'es-mx': "Lycanroc"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spike-Clad",
			fr: "Mantelure Piquante",
			es: "Cuerpo Espín",
			de: "Stachelgewand",
			it: "Rivestimento Appuntito",
			pt: "Revestimento Espinhoso",
			'es-mx': "Cuerpoespín"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach up to 2 Spiky Energy cards from your discard pile to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie Piquante de votre pile de défausse à ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes unir hasta 2 cartas de Energía Espinosa de tu pila de descartes a este Pokémon.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 2 Stachel-Energiekarten aus deinem Ablagestapel an dieses Pokémon anlegen.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi assegnare a questo Pokémon fino a due carte Energia Appuntita dalla tua pila degli scarti.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá ligar até 2 cartas Energia Espinhosa da sua pilha de descarte a este Pokémon.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir hasta 2 cartas de Energía Espinosa de tu pila de descartes a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Clamping Fangs",
			fr: "Crocs Pinçants",
			es: "Colmillos Aplastantes",
			de: "Festbeißende Fangzähne",
			it: "Zanne Serrate",
			pt: "Cravar Presas",
			'es-mx': "Colmillos Aplastantes"
		},

		effect: {
			en: "This attack does 40 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
