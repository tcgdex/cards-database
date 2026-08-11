import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Frosmoth",
		'fr-fr': "Beldeneige",
		'de-de': "Mottineva",
		'it-it': "Frosmoth",
		'es-es': "Frosmoth",
		'pt-br': "Frosmoth",
		'es-mx': "Frosmoth"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'de-de': "Snomnom",
		'it-it': "Snom",
		'es-es': "Snom",
		'pt-br': "Snom",
		'es-mx': "Snom"
	},
	stage: "Stage1",
	dexId: [873],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Chilling Wings",
			'fr-fr': "Ailes Glaçantes",
			'de-de': "Eiskalte Flügel",
			'it-it': "Ali Gelide",
			'es-es': "Alas Glaciales",
			'pt-br': "Asas Glaciais",
			'es-mx': "Alas Glaciales"
		},

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Il Pokémon attivo del tuo avversario viene addormentato.",
			'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). El Pokémon Activo de tu rival pasa a estar Dormido.",
			'pt-br': "Este ataque causa 20 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.) O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). El Pokémon Activo de tu rival ahora está Dormido."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851114,
				tcgplayer: 654382
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851114,
				tcgplayer: 654382
			}
		},
	],
}

export default card
