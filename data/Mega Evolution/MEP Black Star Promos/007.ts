import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton",
		it: "Psyduck",
		es: "Psyduck",
		pt: "Psyduck"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [54],

	abilities: [{
		type: "Ability",

		name: {
			en: "Damp",
			fr: "Moiteur",
			de: "Feuchtigkeit",
			it: "Umidità",
			es: "Humedad",
			pt: "Ensopado"
		},

		effect: {
			en: "Pokémon in play (both yours and your opponent's) lose any Ability that requires the Pokémon using it to Knock Out itself.",
			fr: "Les Pokémon en jeu (les vôtres et ceux de votre adversaire) perdent tout talent qui demande au Pokémon l'utilisant de se mettre K.O.",
			de: "Pokémon im Spiel (deine und die deines Gegners) verlieren jede Fähigkeit, die vom Pokémon, das sie einsetzt, erfordert, sich selbst kampfunfähig zu machen.",
			it: "I Pokémon in gioco, sia tuoi che del tuo avversario, perdono qualsiasi abilità che richieda al Pokémon che la usa di mettere KO se stesso.",
			es: "Los Pokémon en juego (tanto tuyos como de tu rival) pierden cualquier habilidad que requiera que el Pokémon que la use se deje Fuera de Combate a sí mismo.",
			pt: "Os Pokémon em jogo (seus e do seu oponente) perdem qualquer Habilidade que exija que o Pokémon que a use Nocauteie a si mesmo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851053,
				tcgplayer: 656257
			}
		},
	],
}

export default card

