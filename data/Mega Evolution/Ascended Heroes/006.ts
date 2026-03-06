import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Erika's Victreebel",
		fr: "Empiflor d'Erika",
		es: "Victreebel de Erika",
		'es-mx': "Victreebel de Erika",
		de: "Erikas Sarzenia",
		it: "Victreebel di Erika",
		pt: "Victreebel da Érica"
	},

	illustrator: "takashi shiraishi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [71],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Flower Garden Rondo",
			fr: "Rondo Jardin Fleuri",
			es: "Rondó Jardín de Flores",
			'es-mx': "Rondó de Jardín Floral",
			de: "Blumengartenrondo",
			it: "Rondò Giardino Fiorito",
			pt: "Cântico do Jardim Florido"
		},

		effect: {
			en: "This attack does 40 damage for each of your Erika's Pokémon in play.",
			fr: "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon d'Erika en jeu.",
			es: "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon de Erika en juego.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon de Erika en juego.",
			de: "Diese Attacke fügt für jedes deiner Erikas Pokémon im Spiel 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ciascuno dei tuoi Pokémon di Erika in gioco.",
			pt: "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon da Érica em jogo."
		},

		damage: "40×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			'es-mx': "Rayo Solar",
			de: "Solarstrahl",
			it: "Solarraggio",
			pt: "Raio Solar"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675818,
		cardmarket: 869617
	}
}

export default card