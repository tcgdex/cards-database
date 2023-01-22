import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Red Assist",
			fr: "Assistance Rouge",
			es: "Asistencia Roja",
			it: "Assistente Rosso",
			pt: "Assistência Rubra",
			de: "Roter Zuschuss"
		},

		effect: {
			en: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Latios.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre main à l'un de vos Latios.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic de tu mano a 1 de tus Latios.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Latios una carta Energia Psychic dalla tua mano.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Psychic da sua mão a 1 dos seus Latios.",
			de: "Einmal während deines Zuges kannst du 1 Psychic-Energiekarte aus deiner Hand an 1 deiner Latios anlegen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			en: "Dyna Barrier",
			fr: "Dynabarrière",
			es: "Dinabarrera",
			it: "Barriera Max",
			pt: "Dinabarreira",
			de: "Gigantische Barriere"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
			es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card