import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'de-de': "Entoron",
		'it-it': "Golduck",
		'es-es': "Golduck",
		'pt-br': "Golduck"
	},

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton",
		'it-it': "Psyduck",
		'es-es': "Psyduck",
		'pt-br': "Psyduck",
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
			'en-us': "Damp",
			'fr-fr': "Moiteur",
			'de-de': "Feuchtigkeit",
			'it-it': "Umidità",
			'es-es': "Humedad",
			'pt-br': "Umidade"
		},

		effect: {
			'en-us': "Pokémon in play (both yours and your opponent's) lose all Abilities that require those Pokémon to be Knocked Out.",
			'fr-fr': "Les Pokémon en jeu (les vôtres et ceux de votre adversaire) perdent tout talent qui demande au Pokémon l'utilisant de se mettre K.O.",
			'de-de': "Pokémon im Spiel (deine und die deines Gegners) verlieren alle Fähigkeiten, die erfordern, dass diese Pokémon kampfunfähig gemacht werden.",
			'it-it': "I Pokémon in gioco (sia tuoi che del tuo avversario) perdono tutte le abilità che richiedono che quei Pokémon vengano messi KO.",
			'es-es': "Los Pokémon en juego (tanto tuyos como de tu rival) pierden todas las habilidades que requieren que esos Pokémon sean Fuera de Combate.",
			'pt-br': "Os Pokémon em jogo (tanto seus quanto do seu oponente) perdem todas as Habilidades que exigem que esses Pokémon sejam Nocauteados."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'de-de': "Hydropumpe",
			'it-it': "Idropompa",
			'es-es': "Hidrobomba",
			'pt-br': "Hidro Bomba"
		},

		damage: "60+",

		effect: {
			'en-us': "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon."
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

