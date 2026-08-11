import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [206],
	set: Set,

	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'de-de': "Dummisel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "ryoma uratsuka",

	description: {
		'en-us': "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mysterious Nest",
			'fr-fr': "Nid Mystérieux",
			'de-de': "Geheimnisvolles Nest",
			'es-es': "Nido Misterioso",
			'pt-br': "Ninho Misterioso",
			'it-it': "Nido Enigmatico"
		},

		effect: {
			'en-us': "{C} Pokémon in play (both yours and your opponent's) have no Weakness.",
			'fr-fr': "Les Pokémon {C} en jeu (les vôtres et ceux de votre adversaire) n'ont pas de Faiblesse.",
			'de-de': "{C}-Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche.",
			'es-es': "Los Pokémon {C} en juego (tanto tuyos como de tu rival) no tienen Debilidad.",
			'pt-br': "Pokémon {C} em jogo (seus e do seu oponente) não têm Fraqueza.",
			'it-it': "I Pokémon {C} in gioco, sia tuoi che del tuo avversario, non hanno debolezza."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'it-it': "Rotolamento"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582940,
				tcgplayer: 253302
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582940,
				tcgplayer: 253302
			}
		},
	],
}

export default card
