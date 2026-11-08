import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Charizard X ex",
		'fr-fr': "Méga-Dracaufeu X-ex",
		'de-de': "Mega-Glurak X-ex",
		'it-it': "Mega Charizard X-ex",
		'es-es': "Mega-Charizard X ex",
		'pt-br': "Mega Charizard X ex"
	},

	suffix: "ex",
	illustrator: "takuyoa",
	rarity: "Promo",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [6],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo",
		'it-it': "Charmeleon",
		'es-es': "Charmeleon",
		'pt-br': "Charmeleon"
	},

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Inferno X",
			'fr-fr': "Inferno X",
			'de-de': "Inferno X",
			'it-it': "Inferno X",
			'es-es': "Inferno X",
			'pt-br': "Inferno X"
		},

		damage: "90×",

		effect: {
			'en-us': "Discard any amount of [R] Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez autant d'Énergies [R] que vous le voulez parmi vos Pokémon. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			'de-de': "Lege beliebig viele [R] Energiekarten von deinen Pokémon auf deinen Ablagestapel und diese Attacke fügt für jede auf diese Weise abgelegte Karte 90 Schadenspunkte zu.",
			'it-it': "Scarta qualsiasi numero di carte Energia [R] dai tuoi Pokémon. Questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
			'es-es': "Descarta cualquier cantidad de cartas de Energía [R] de entre tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte qualquer quantidade de cartas de Energia [R] dentre seus Pokémon, e este ataque causará 90 pontos de dano para cada carta descartada desta forma."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873692,
				tcgplayer: 680639
			}
		},
	],
}

export default card
