import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		209,
	],
	hp: 70,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Make a Mess",
				fr: "Bazar Garanti",
				es: "Desordenar",
				it: "Scompiglio",
				pt: "Fazer Bagunça",
				de: "Tohuwabohu"
			},
			effect: {
				en: "Discard up to 2 Trainer cards from your hand. This attack does 20 damage for each card you discarded in this way.",
				fr: "Défaussez jusqu’à 2 cartes Dresseur de votre main. Cette attaque inflige 20 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta hasta 2 cartas de Entrenador de tu mano. Este ataque hace 20 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta fino a due carte Allenatore che hai in mano. Questo attacco infligge 20 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte até 2 cartas de Treinador da sua mão. Este ataque causa 20 pontos de dano para cada carta descartada desta forma.",
				de: "Lege bis zu 2 Trainerkarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
