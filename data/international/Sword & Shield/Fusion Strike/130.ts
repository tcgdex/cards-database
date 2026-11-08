import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [887],
	set: Set,

	name: {
		'en-us': "Dragapult",
		'fr-fr': "Lanssorien",
		'es-es': "Dragapult",
		'it-it': "Dragapult",
		'pt-br': "Dragapult",
		'de-de': "Katapuldra"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	stage: "Stage2",
	retreat: 0,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "Apparently the Dreepy inside Dragapult's horns eagerly look forward to being launched out at Mach speeds."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fusion Strike Assault",
			'fr-fr': "Assaut Poing de Fusion",
			'es-es': "Asalto Golpe Fusión",
			'it-it': "Assalto Colpo Fusione",
			'de-de': "Fusionsangriff-Offensive",
			'pt-br': "Ofensiva Golpe Fusão"
		},

		damage: "30×",

		effect: {
			'en-us': "This attack does 30 damage for each of your Fusion Strike Pokémon in play.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Poing de Fusion en jeu.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Golpe Fusión en juego.",
			'it-it': "Questo attacco infligge 30 danni per ogni tuo Pokémon Colpo Fusione in gioco.",
			'de-de': "Diese Attacke fügt für jedes deiner Fusionsangriff-Pokémon im Spiel 30 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon Golpe Fusão em jogo."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Speed Attack",
			'fr-fr': "Attaque Rapide",
			'es-es': "Ataque Fugaz",
			'it-it': "Attacco Veloce",
			'de-de': "Tempoangriff",
			'pt-br': "Ataque em Velocidade"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582671,
				tcgplayer: 253327
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 883763
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582671,
				tcgplayer: 253327
			}
		},
	],
}

export default card
