import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [368],
	set: Set,

	name: {
		'en-us': "Gorebyss",
		'fr-fr': "Rosabyss",
		'de-de': "Saganabyss",
		'it-it': "Gorebyss",
		'es-es': "Gorebyss",
		'pt-br': "Gorebyss",
		'es-mx': "Gorebyss"
	},


	illustrator: "Naoyo Kimura",

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'de-de': "Perlu",
		'it-it': "Clamperl",
		'es-es': "Clamperl",
		'pt-br': "Clamperl",
		'es-mx': "Clamperl"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Crescendo Wave",
			'fr-fr': "Vague Montante",
			'de-de': "Crescendowelle",
			'it-it': "Onda Crescente",
			'es-es': "Ola Creciente",
			'pt-br': "Onda Crescente",
			'es-mx': "Ola Creciente"
		},

		effect: {
			'en-us': "This attack does 30 damage for each {W} Energy attached to this Pokémon. Before doing damage, you may attach any number of Basic {W} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie {W} attachée à ce Pokémon. Avant d'infliger des dégâts, vous pouvez attacher le nombre voulu de cartes Énergie {W} de base de votre main à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte zu. Bevor du Schaden zufügst, kannst du beliebig viele Basis-{W}-Energiekarten aus deiner Hand an dieses Pokémon anlegen.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia {W} assegnata a questo Pokémon. Prima di infliggere danni, puoi assegnare a questo Pokémon un numero qualsiasi di carte Energia base {W} dalla tua mano.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía {W} unida a este Pokémon. Antes de infligir daño, puedes unir cualquier cantidad de cartas de Energía {W} Básica de tu mano a este Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia {W} ligada a este Pokémon. Antes de causar dano, você poderá ligar qualquer número de cartas de Energia {W} Básica da sua mão a este Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía {W} unida a este Pokémon. Antes de infligir daño, puedes unir cualquier cantidad de cartas de Energía {W} Básica de tu mano a este Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825930,
				tcgplayer: 632869
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825930,
				tcgplayer: 632869
			}
		},
	],
}

export default card
