import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Red Assist",
			'fr-fr': "Assistance Rouge",
			'es-es': "Asistencia Roja",
			'it-it': "Assistente Rosso",
			'pt-br': "Assistência Rubra",
			'de-de': "Roter Zuschuss"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Latios.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre main à l'un de vos Latios.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic de tu mano a 1 de tus Latios.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Latios una carta Energia Psychic dalla tua mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Psychic da sua mão a 1 dos seus Latios.",
			'de-de': "Einmal während deines Zuges kannst du 1 Psychic-Energiekarte aus deiner Hand an 1 deiner Latios anlegen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Psychic", "Colorless"],

		name: {
			'en-us': "Dyna Barrier",
			'fr-fr': "Dynabarrière",
			'es-es': "Dinabarrera",
			'it-it': "Barriera Max",
			'pt-br': "Dinabarreira",
			'de-de': "Gigantische Barriere"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691899,
				tcgplayer: 478038
			}
		},
	],
}

export default card
