import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [925],
	set: Set,

	name: {
		'en-us': "Maushold",
		'fr-fr': "Famignol",
		'es-es': "Maushold",
		'it-it': "Maushold",
		'pt-br': "Maushold",
		'de-de': "Famieps"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Tandemaus",
		'fr-fr': "Compagnol"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Family Attack",
			'fr-fr': "Attaque en Famille",
			'es-es': "Ataque en Familia",
			'it-it': "Attacco di Famiglia",
			'pt-br': "Ataque em Família",
			'de-de': "Familienangriff"
		},

		effect: {
			'en-us': "This attack does 70 damage for each of your Maushold in play.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chacun de vos Famignol en jeu.",
			'es-es': "Este ataque hace 70 puntos de daño por cada uno de tus Maushold en juego.",
			'it-it': "Questo attacco infligge 70 danni per ogni tuo Maushold in gioco.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada um dos seus Maushold em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner Famieps im Spiel 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "The larger pair protects the little ones during battles. When facing strong opponents, the whole group will join the fight.",
	},

	thirdParty: {
        cardmarket: 702457,
        tcgplayer: 488057
    }
}

export default card