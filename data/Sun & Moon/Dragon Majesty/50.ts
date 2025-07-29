import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		pt: "Turtonator",
		de: "Tortunator"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		776,
	],

	hp: 110,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Explosive Jet",
				fr: "Souffle Explosif",
				es: "Propulsión Explosiva",
				it: "Getto Esplosivo",
				pt: "Jato Explosivo",
				de: "Explosiver Antrieb"
			},
			effect: {
				en: "Discard any amount of Fire Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez n’importe quel nombre d’Énergies Fire de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de Energías Fire de tus Pokémon. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Fire che vuoi assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer quantidade de Energia Fire dos seus Pokémon. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				de: "Lege beliebig viele Fire-Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 363521
	}
}

export default card
