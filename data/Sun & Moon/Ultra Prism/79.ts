import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
		es: "Dugtrio de Alola",
		it: "Dugtrio di Alola",
		pt: "Dugtrio de Alola",
		de: "Alola-Digdri"
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
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Gold Rush",
				fr: "Ruée Vers l’Or",
				es: "Fiebre del Oro",
				it: "Corsa all’Oro",
				pt: "Corrida do Ouro",
				de: "Goldrausch"
			},
			effect: {
				en: "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez autant de cartes Énergie Metal que vous voulez de votre main. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de cartas de Energía Metal de tu mano. Este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta un numero qualsiasi di carte Energia Metal che hai in mano. Questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer número de cartas de Energia Metal da sua mão. Este ataque causa 30 pontos de dano para cada carta descartada desta forma.",
				de: "Lege beliebig viele Metal-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
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



}

export default card
