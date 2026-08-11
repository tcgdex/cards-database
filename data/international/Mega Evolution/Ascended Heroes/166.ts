import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'es-mx': "Delcatty",
		'de-de': "Enekoro",
		'it-it': "Delcatty",
		'pt-br': "Delcatty"
	},

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'es-mx': "Skitty",
		'de-de': "Eneco",
		'it-it': "Skitty",
		'pt-br': "Skitty",
	},

	illustrator: "buchi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [301],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cat Kick",
			'fr-fr': "Coup d'Patte",
			'es-es': "Patada Gato",
			'es-mx': "Patada Gatuna",
			'de-de': "Katzenkick",
			'it-it': "Calciogatto",
			'pt-br': "Chute do Gato"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Energy Crush",
			'fr-fr': "Écras'Énergie",
			'es-es': "Comprimir Energía",
			'es-mx': "Aplastamiento de Energía",
			'de-de': "Zermalmende Energie",
			'it-it': "Sgretolenergia",
			'pt-br': "Esmagamento de Energia"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "It dislikes dirty places. It often searches for a comfortable place in which to groom itself.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869777,
			tcgplayer: 675978
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870394,
			tcgplayer: 676981
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870393,
			tcgplayer: 677121
		}
	},
],
}

export default card
