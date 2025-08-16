import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		fr: "Latias",
		de: "Latias",
		es: "Latias",
		pt: "Latias",
		it: "Latias",
		en: "Latias"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Assistance Rouge",
			de: "Roter Zuschuss",
			es: "Asistencia Roja",
			pt: "Assistência Rubra",
			it: "Assistente Rosso",
			en: "Red Assist"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {P} de votre main à l'un de vos Latios.",
			de: "Einmal während deines Zuges kannst du 1 {P}-Energiekarte aus deiner Hand an 1 deiner Latios anlegen.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {P} de tu mano a 1 de tus Latios.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia {P} da sua mão a 1 dos seus Latios.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Latios una carta Energia {P} dalla tua mano.",
			en: "Once during your turn, you may attach a {P} Energy card from your hand to 1 of your Latios."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			fr: "Dynabarrière",
			de: "Gigantische Barriere",
			es: "Dinabarrera",
			pt: "Dinabarreira",
			it: "Barriera Max",
			en: "Dyna Barrier"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird.",
			es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It can telepathically communicate with people. It changes its appearance using its down that refracts light."
	}
}

export default card