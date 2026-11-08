import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'es-mx': "Psyduck",
		'de-de': "Enton",
		'it-it': "Psyduck",
		'pt-br': "Psyduck"
	},

	illustrator: "REND",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [54],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Damp",
			'fr-fr': "Moiteur",
			'es-es': "Humedad",
			'es-mx': "Humedad",
			'de-de': "Feuchtigkeit",
			'it-it': "Umidità",
			'pt-br': "Ensopado"
		},

		effect: {
			'en-us': "Pokémon in play (both yours and your opponent's) lose any Ability that requires the Pokémon using it to Knock Out itself.",
			'fr-fr': "Les Pokémon en jeu (les vôtres et ceux de votre adversaire) perdent tout talent qui demande au Pokémon l'utilisant de se mettre K.O.",
			'es-es': "Los Pokémon en juego (tanto tuyos como de tu rival) pierden cualquier habilidad que requiera que el Pokémon que la use se deje Fuera de Combate a sí mismo.",
			'es-mx': "Los Pokémon en juego (tanto tuyos como de tu rival) pierden cualquier Habilidad que requiera que el Pokémon que la use se deje Fuera de Combate a sí mismo.",
			'de-de': "Pokémon im Spiel (deine und die deines Gegners) verlieren jede Fähigkeit, die vom Pokémon, das sie einsetzt, erfordert, sich selbst kampfunfähig zu machen.",
			'it-it': "I Pokémon in gioco, sia tuoi che del tuo avversario, perdono qualsiasi abilità che richieda al Pokémon che la usa di mettere KO se stesso.",
			'pt-br': "Os Pokémon em jogo (seus e do seu oponente) perdem qualquer Habilidade que exija que o Pokémon que a use Nocauteie a si mesmo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'es-mx': "Colisión",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869837,
				tcgplayer: 676038
			}
		}
	],
}

export default card
