import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Alolan Dugtrio",
		'fr-fr': "Triopikeur d’Alola",
		'es-es': "Dugtrio de Alola",
		'it-it': "Dugtrio di Alola",
		'pt-br': "Dugtrio de Alola",
		'de-de': "Alola-Digdri"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 60,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Gold Rush",
				'fr-fr': "Ruée Vers l’Or",
				'es-es': "Fiebre del Oro",
				'it-it': "Corsa all’Oro",
				'pt-br': "Corrida do Ouro",
				'de-de': "Goldrausch"
			},
			effect: {
				'en-us': "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez autant de cartes Énergie Metal que vous voulez de votre main. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta cualquier cantidad de cartas de Energía Metal de tu mano. Este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta un numero qualsiasi di carte Energia Metal che hai in mano. Questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte qualquer número de cartas de Energia Metal da sua mão. Este ataque causa 30 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege beliebig viele Metal-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon are cherished in the Alola region, where they are thought to be feminine deities of the land incarnate.",
	},

	thirdParty: {
		cardmarket: 316006,
		tcgplayer: 157696
	}
}

export default card
