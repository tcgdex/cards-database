import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

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

	illustrator: "Kurata So",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mysterious Nest",
			'fr-fr': "Nid Mystérieux",
			'es-es': "Nido Misterioso",
			'it-it': "Nido Enigmatico",
			'pt-br': "Ninho Misterioso",
			'de-de': "Geheimnisvolles Nest"
		},

		effect: {
			'en-us': "Colorless Pokémon in play (both yours and your opponent's) have no Weakness.",
			'fr-fr': "Les Pokémon Colorless en jeu (les vôtres et ceux de votre adversaire) n'ont pas de Faiblesse.",
			'es-es': "Los Pokémon Colorless en juego (tanto tuyos como de tu rival) no tienen Debilidad.",
			'it-it': "I Pokémon Colorless in gioco, sia tuoi che del tuo avversario, non hanno debolezza.",
			'pt-br': "Pokémon Colorless em jogo (seus e do seu oponente) não têm Fraqueza.",
			'de-de': "Colorless-Pokémon im Spiel (deine und die deines Gegners) haben keine Schwäche."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691902,
				tcgplayer: 478041
			}
		},
	],
}

export default card
