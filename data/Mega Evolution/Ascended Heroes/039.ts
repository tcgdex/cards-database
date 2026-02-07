import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [54],

	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		'es-mx': "Psyduck",
		de: "Enton",
		it: "Psyduck",
		pt: "Psyduck"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Damp",
			fr: "Moiteur",
			es: "Humedad",
			'es-mx': "Humedad",
			de: "Feuchtigkeit",
			it: "Umidità",
			pt: "Ensopado"
		},

		effect: {
			en: "Pokémon in play (both yours and your opponent's) lose any Ability that requires the Pokémon using it to Knock Out itself.",
			fr: "Les Pokémon en jeu (les vôtres et ceux de votre adversaire) perdent tout talent qui demande au Pokémon l'utilisant de se mettre K.O.",
			es: "Los Pokémon en juego (tanto tuyos como de tu rival) pierden cualquier habilidad que requiera que el Pokémon que la use se deje Fuera de Combate a sí mismo.",
			'es-mx': "Los Pokémon en juego (tanto tuyos como de tu rival) pierden cualquier Habilidad que requiera que el Pokémon que la use se deje Fuera de Combate a sí mismo.",
			de: "Pokémon im Spiel (deine und die deines Gegners) verlieren jede Fähigkeit, die vom Pokémon, das sie einsetzt, erfordert, sich selbst kampfunfähig zu machen.",
			it: "I Pokémon in gioco, sia tuoi che del tuo avversario, perdono qualsiasi abilità che richieda al Pokémon che la usa di mettere KO se stesso.",
			pt: "Os Pokémon em jogo (seus e do seu oponente) perdem qualquer Habilidade que exija que o Pokémon que a use Nocauteie a si mesmo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			'es-mx': "Colisión",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675851,
		cardmarket: 869650
	}
}

export default card