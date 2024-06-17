import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

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

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Nest",
			fr: "Nid Mystérieux",
			es: "Nido Misterioso",
			it: "Nido Enigmatico",
			pt: "Ninho Misterioso",
			de: "Geheimnisvolles Nest"
		},

		effect: {
			en: "Colorless Pokémon in play (both yours and your opponent's) have no Weakness.",
			fr: "Les Pokémon Colorless en jeu (les vôtres et ceux de votre adversaire) n'ont pas de Faiblesse.",
			es: "Los Pokémon Colorless en juego (tanto tuyos como de tu rival) no tienen Debilidad.",
			it: "I Pokémon Colorless in gioco, sia tuoi che del tuo avversario, non hanno debolezza.",
			pt: "Pokémon Colorless em jogo (seus e do seu oponente) não têm Fraqueza.",
			de: "Colorless-Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			pt: "Rolagem",
			de: "Walzer"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card