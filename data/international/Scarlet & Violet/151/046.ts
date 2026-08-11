import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [46],
	set: Set,

	name: {
		'fr-fr': "Paras",
		'en-us': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'de-de': "Paras"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Boule de Spores",
			'en-us': "Spore Ball",
			'es-es': "Bola Espora",
			'it-it': "Pallaspore",
			'pt-br': "Bola de Esporos",
			'de-de': "Sporenbällchen"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733641,
				tcgplayer: 516163,
				cardtrader: 261137
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733641,
				tcgplayer: 516163,
				cardtrader: 261137
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	
}

export default card
