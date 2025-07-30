import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [481],
	set: Set,

	name: {
		en: "Mesprit",
		fr: "Créfollet",
		es: "Mesprit",
		it: "Mesprit",
		pt: "Mesprit",
		de: "Vesprit"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mental Shroud",
			fr: "Écran Mental",
			es: "Velo MentalBarrera Mental",
			it: "Manto Psichico",
			pt: "Cortina Mental",
			de: "Gedankengardine"
		},

		effect: {
			en: "If you have Uxie and Azelf in play, each of your Pokémon has no Weakness.",
			fr: "Si vous avez Créhelf et Créfadet en jeu, chacun de vos Pokémon n'a pas de Faiblesse.",
			es: "Si tienes a Uxie y a Azelf en juego, cada uno de tus Pokémon no tiene ninguna Debilidad.",
			it: "Se hai Uxie e Azelf in gioco, nessuno dei tuoi Pokémon ha debolezza.",
			pt: "Caso você possua Uxie e Azelf em jogo, seus Pokémon não terão Fraqueza.",
			de: "Wenn du Selfe und Tobutz im Spiel hast, hat jedes deiner Pokémon keine Schwäche."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			de: "Zen-Kopfstoß"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658643
	}
}

export default card
