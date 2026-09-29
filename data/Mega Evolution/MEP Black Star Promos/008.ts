import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak",
		de: "Entoron",
		it: "Golduck",
		es: "Golduck",
		pt: "Golduck"
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton",
		it: "Psyduck",
		es: "Psyduck",
		pt: "Psyduck",
	},

	illustrator: "Jiro Sasumo",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	dexId: [55],

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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			de: "Hydropumpe",
			it: "Idropompa",
			es: "Hidrobomba",
			pt: "Jato d'Água"
		},

		damage: "60+",

		effect: {
			en: "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon."
		}
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
				cardmarket: 851054,
				tcgplayer: 656258
			}
		},
	],
}

export default card

