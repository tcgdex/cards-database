import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		fr: "Évoli",
		en: "Eevee",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Courage !",
			en: "Cheer Up",
			es: "Alegrón",
			it: "Incitare",
			pt: "Animar",
			de: "Aufmuntern"
		},

		effect: {
			fr: "Attachez une carte Énergie de votre main à l'un de vos Pokémon.",
			en: "Attach an Energy card from your hand to 1 of your Pokémon.",
			es: "Une 1 carta de Energía de tu mano a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon una carta Energia dalla tua mano.",
			pt: "Ligue uma carta de Energia da sua mão a 1 dos seus Pokémon.",
			de: "Lege 1 Energiekarte aus deiner Hand an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Koud'Pied",
			en: "Kick",
			es: "Patada",
			it: "Calcio",
			pt: "Chute",
			de: "Tritt"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card