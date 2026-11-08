import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [272],
	set: Set,

	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'de-de': "Kappalores",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'es-mx': "Ludicolo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'de-de': "Lombrero",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'es-mx': "Lombre"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Vibrant Dance",
			'fr-fr': "Danse Vivante",
			'es-es': "Danza Vibrante",
			'de-de': "Lebhafter Tanz",
			'it-it': "Danza Vivace",
			'pt-br': "Samba da Vitalidade",
			'es-mx': "Samba Vital"
		},

		effect: {
			'en-us': "All of your Pokémon in play get +40 HP. The effect of Vibrant Dance doesn't stack.",
			'fr-fr': "Tous vos Pokémon en jeu reçoivent +40 PV. L'effet de Danse Vivante n'est pas cumulable.",
			'es-es': "Cada uno de tus Pokémon en juego obtiene 40 PS más. El efecto de Danza Vibrante no se acumula.",
			'de-de': "Alle deine Pokémon im Spiel erhalten +40 KP. Der Effekt von Lebhafter Tanz stapelt sich nicht.",
			'it-it': "I tuoi Pokémon in gioco hanno 40 PS in più. L'effetto di Danza Vivace non è cumulabile.",
			'pt-br': "Todos os seus Pokémon em jogo recebem 40 PS a mais. O efeito de Samba da Vitalidade não acumula.",
			'es-mx': "Cada uno de tus Pokémon en juego obtiene 40 PS más. El efecto de Samba Vital no se acumula."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'de-de': "Hydroplatscher",
			'it-it': "Idrosplash",
			'pt-br': "Hidroborrifada",
			'es-mx': "Hidrosalpicadura"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Jerky",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817189,
				tcgplayer: 623464
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817189,
				tcgplayer: 623464
			}
		},
	],
}

export default card
