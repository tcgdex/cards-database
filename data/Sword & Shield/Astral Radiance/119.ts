import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Resonant Evolution",
			fr: "Évolution Résonnante",
			es: "Evolución Resonante",
			it: "Evoluzione Risonante",
			pt: "Evolução Ressonante",
			de: "Mitreißende Entwicklung"
		},

		effect: {
			en: "Once during your turn, when you play a Pokémon from your hand to evolve 1 of your other Eevee, you may search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez un Pokémon de votre main pour faire évoluer l'un de vos autres Évoli, vous pouvez chercher dans votre deck une carte Évolution de ce Pokémon, puis la placer sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, cuando juegas 1 Pokémon de tu mano para hacer evolucionar a 1 de tus otros Eevee, puedes buscar en tu baraja 1 carta que evolucione de este Pokémon y ponerla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, quando giochi un Pokémon dalla tua mano per far evolvere uno dei tuoi altri Eevee, puoi cercare nel tuo mazzo una carta che si evolve da questo Pokémon e mettercela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, quando você jogar 1 Pokémon da sua mão para evoluir 1 dos seus outros Eevee, você poderá procurar por 1 carta no seu baralho que evolua deste Pokémon e colocá-la sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn du ein Pokémon aus deiner Hand spielst, um 1 deiner anderen Evoli zu entwickeln, kannst du dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, durchsuchen und sie auf dieses Pokémon legen, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card