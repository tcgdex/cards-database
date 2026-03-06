import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		'es-mx': "Golduck",
		de: "Entoron",
		it: "Golduck",
		pt: "Golduck"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			'es-mx': "Hidrobomba",
			de: "Hydropumpe",
			it: "Idropompa",
			pt: "Jato d'Água"
		},

		effect: {
			en: "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675852,
		cardmarket: 869651
	}
}

export default card