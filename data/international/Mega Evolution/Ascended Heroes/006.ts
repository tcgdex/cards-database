import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Victreebel",
		'fr-fr': "Empiflor d'Erika",
		'es-es': "Victreebel de Erika",
		'es-mx': "Victreebel de Erika",
		'de-de': "Erikas Sarzenia",
		'it-it': "Victreebel di Erika",
		'pt-br': "Victreebel da Érica"
	},

	evolveFrom: {
		'en-us': "Erika's Weepinbell",
		'fr-fr': "Boustiflor d'Erika",
		'es-es': "Weepinbell de Erika",
		'es-mx': "Weepinbell de Erika",
		'de-de': "Erikas Ultrigaria",
		'it-it': "Weepinbell di Erika",
		'pt-br': "Weepinbell da Érica",
	},

	illustrator: "takashi shiraishi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Flower Garden Rondo",
			'fr-fr': "Rondo Jardin Fleuri",
			'es-es': "Rondó Jardín de Flores",
			'es-mx': "Rondó de Jardín Floral",
			'de-de': "Blumengartenrondo",
			'it-it': "Rondò Giardino Fiorito",
			'pt-br': "Cântico do Jardim Florido"
		},

		effect: {
			'en-us': "This attack does 40 damage for each of your Erika's Pokémon in play.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon d'Erika en jeu.",
			'es-es': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon de Erika en juego.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon de Erika en juego.",
			'de-de': "Diese Attacke fügt für jedes deiner Erikas Pokémon im Spiel 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ciascuno dei tuoi Pokémon di Erika in gioco.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon da Érica em jogo."
		},

		damage: "40×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'es-mx': "Rayo Solar",
			'de-de': "Solarstrahl",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869617,
				tcgplayer: 675818
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 870144,
				tcgplayer: 676856
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870143,
				tcgplayer: 676996
			}
		},
	],
}

export default card
