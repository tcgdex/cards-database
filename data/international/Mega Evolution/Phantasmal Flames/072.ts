import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'es-mx': "Bronzong",
		'de-de': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong"
	},

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'es-mx': "Bronzor",
		'de-de': "Bronzel",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [437],
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Triple Draw",
			'fr-fr': "Triple Pioche",
			'es-es': "Triple Robo",
			'es-mx': "Triple Robo",
			'de-de': "Dreifachzug",
			'it-it': "Pescata Tripla",
			'pt-br': "Compra Tripla"
		},

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'es-es': "Roba 3 cartas.",
			'es-mx': "Roba 3 cartas.",
			'de-de': "Ziehe 3 Karten.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Compre 3 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tool Drop",
			'fr-fr': "Chute d'Outils",
			'es-es': "Machaque Herramientas",
			'es-mx': "Herramientazo",
			'de-de': "Ausrüstungssturz",
			'it-it': "Oggettamico",
			'pt-br': "Queda de Ferramenta"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Pokémon Tool attached to all Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Outil Pokémon attaché à tous les Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Herramienta Pokémon unida a cada Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Herramienta Pokémon unida a cada Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon angelegte Pokémon-Ausrüstung 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ogni carta Oggetto Pokémon assegnata a tutti i Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Ferramenta Pokémon ligada a todos os Pokémon."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
	},

	illustrator: "Masako Tomii",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857647,
				tcgplayer: 662137,
				cardtrader: 356858
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857647,
				tcgplayer: 662137,
				cardtrader: 356858
			}
		},
	],
}

export default card
