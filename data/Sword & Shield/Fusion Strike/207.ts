import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [206],
	set: Set,

	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		es: "Dunsparce",
		it: "Dunsparce",
		pt: "Dunsparce",
		de: "Dummisel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "ryoma uratsuka",

	description: {
		en: "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Nest",
			fr: "Nid Mystérieux",
			de: "Geheimnisvolles Nest",
			es: "Nido Misterioso",
			pt: "Ninho Misterioso",
			it: "Nido Enigmatico"
		},

		effect: {
			en: "{C} Pokémon in play (both yours and your opponent's) have no Weakness.",
			fr: "Les Pokémon {C} en jeu (les vôtres et ceux de votre adversaire) n'ont pas de Faiblesse.",
			de: "{C}-Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche.",
			es: "Los Pokémon {C} en juego (tanto tuyos como de tu rival) no tienen Debilidad.",
			pt: "Pokémon {C} em jogo (seus e do seu oponente) não têm Fraqueza.",
			it: "I Pokémon {C} in gioco, sia tuoi che del tuo avversario, non hanno debolezza."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			es: "Rodar",
			pt: "Rolagem",
			it: "Rotolamento"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card