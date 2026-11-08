import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'fr-fr': "Latias",
		'de-de': "Latias",
		'es-es': "Latias",
		'pt-br': "Latias",
		'it-it': "Latias",
		'en-us': "Latias"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Assistance Rouge",
			'de-de': "Roter Zuschuss",
			'es-es': "Asistencia Roja",
			'pt-br': "Assistência Rubra",
			'it-it': "Assistente Rosso",
			'en-us': "Red Assist"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {P} de votre main à l'un de vos Latios.",
			'de-de': "Einmal während deines Zuges kannst du 1 {P}-Energiekarte aus deiner Hand an 1 deiner Latios anlegen.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {P} de tu mano a 1 de tus Latios.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia {P} da sua mão a 1 dos seus Latios.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Latios una carta Energia {P} dalla tua mano.",
			'en-us': "Once during your turn, you may attach a {P} Energy card from your hand to 1 of your Latios."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			'fr-fr': "Dynabarrière",
			'de-de': "Gigantische Barriere",
			'es-es': "Dinabarrera",
			'pt-br': "Dinabarreira",
			'it-it': "Barriera Max",
			'en-us': "Dyna Barrier"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light."
	},

	thirdParty: {
		cardmarket: 580168
	}
}

export default card
