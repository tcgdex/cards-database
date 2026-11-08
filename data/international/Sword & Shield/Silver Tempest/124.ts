import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [600],
	set: Set,

	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Gear Grind",
			'fr-fr': "Lancécrou",
			'es-es': "Rueda Doble",
			'it-it': "Ingracolpo",
			'pt-br': "Moedor",
			'de-de': "Klikkdiskus"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
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
	regulationMark: "F",


	description: {
		'en-us': "When Klang goes all out, the minigear links up perfectly with the outer part of the big gear, and this Pokémon's rotation speed increases sharply.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682171,
				tcgplayer: 451777
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682171,
				tcgplayer: 451777
			}
		},
	],
}

export default card
