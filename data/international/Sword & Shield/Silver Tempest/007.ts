import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [497],
	set: Set,

	name: {
		'en-us': "Serperior V",
		'fr-fr': "Majaspic V",
		'es-es': "Serperior V",
		'it-it': "Serperior V",
		'pt-br': "Serperior V",
		'de-de': "Serpiroyal V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Noble Light",
			'fr-fr': "Noble Lumière",
			'es-es': "Luz Noble",
			'it-it': "Luce Nobile",
			'pt-br': "Luz Nobre",
			'de-de': "Nobles Licht"
		},

		effect: {
			'en-us': "Heal 30 damage from each Pokémon (both yours and your opponent's).",
			'fr-fr': "Soignez 30 dégâts de chaque Pokémon (les vôtres et ceux de votre adversaire).",
			'es-es': "Cura 30 puntos de daño a cada Pokémon (tanto tuyos como de tu rival).",
			'it-it': "Cura tutti i Pokémon, sia tuoi che del tuo avversario, da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada Pokémon (seus e do seu oponente).",
			'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon (deinen und denen deines Gegners)."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682046,
				tcgplayer: 451628
			}
		},
	],
}

export default card
