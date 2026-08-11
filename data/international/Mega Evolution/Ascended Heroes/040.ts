import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'es-mx': "Golduck",
		'de-de': "Entoron",
		'it-it': "Golduck",
		'pt-br': "Golduck"
	},

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'es-mx': "Psyduck",
		'de-de': "Enton",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
	},

	illustrator: "Jiro Sasumo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'es-mx': "Hidrobomba",
			'de-de': "Hydropumpe",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon."
		},

		damage: "60+"
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
		'en-us': "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869651,
			tcgplayer: 675852
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870202,
			tcgplayer: 676885
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870201,
			tcgplayer: 677025
		}
	},
],
}

export default card
