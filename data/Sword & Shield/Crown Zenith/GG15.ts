import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sun Energy",
			fr: "Énergie Solaire",
			es: "Energía Solar",
			it: "Energia Solare",
			pt: "Energia do Sol",
			de: "Sonnenenergie"
		},

		effect: {
			en: "Once during your turn, you may attach a Psychic Energy card from your discard pile to 1 of your Lunatone.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l'un de vos Séléroc.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic de tu pila de descartes a 1 de tus Lunatone.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Lunatone una carta Energia Psychic dalla tua pila degli scarti.",
			pt: "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Psychic da sua pilha de descarte a 1 dos seus Lunatone.",
			de: "Einmal während deines Zuges kannst du 1 Psychic-Energiekarte aus deinem Ablagestapel an 1 deiner Lunastein anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card