import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Groudon",
		fr: "Groudon",
		es: "Groudon",
		it: "Groudon",
		pt: "Groudon",
		de: "Groudon"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wreck",
				fr: "Anéantissement",
				es: "Naufragio",
				it: "Demolitore",
				pt: "Destruir",
				de: "Abreißen"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 50 puntos de daño más. Después, descarta esa carta de Estadio.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 50 danni in più. Poi scarta quella carta Stadio.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 50 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 50 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
			},
			damage: "50+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ground Slash",
				fr: "Tranch’Sol",
				es: "Tajo al Suelo",
				it: "Laceraterra",
				pt: "Talho do Solo",
				de: "Bodennaher Schlitzer"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
