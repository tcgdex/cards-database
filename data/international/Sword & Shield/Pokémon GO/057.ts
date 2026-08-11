import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [424],
	set: Set,

	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'pt-br': "Ambipom",
		'de-de': "Ambidiffel"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primate Dexterity",
			'fr-fr': "Dextérité du Primate",
			'es-es': "Destreza Primate",
			'it-it': "Destrezza del Primate",
			'pt-br': "Destreza Primata",
			'de-de': "Primaten-Geschick"
		},

		effect: {
			'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
			'it-it': "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue 1 moeda. Se sair cara, previna aquele dano.",
			'de-de': "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Full Tilt Fling",
			'fr-fr': "Lancer Absolu",
			'es-es': "Lanzamiento Total",
			'it-it': "Lancio Sfrecciante",
			'pt-br': "Arremesso Veloz",
			'de-de': "Volldampfwurf"
		},

		effect: {
			'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 60 pontos de dano para cada cara.",
			'de-de': "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that's proof it really likes you.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665281,
				tcgplayer: 276978
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665281,
				tcgplayer: 276978
			}
		},
	],
}

export default card
