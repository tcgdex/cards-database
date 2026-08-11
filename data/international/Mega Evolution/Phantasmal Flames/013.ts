import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Charizard X ex",
		'fr-fr': "Méga-Dracaufeu X-ex",
		'es-es': "Mega-Charizard X ex",
		'es-mx': "Mega-Charizard X ex",
		'de-de': "Mega-Glurak X-ex",
		'it-it': "Mega Charizard X-ex",
		'pt-br': "Mega Charizard X ex"
	},

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'es-mx': "Charmeleon",
		'de-de': "Glutexo",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [6],
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Inferno X",
			'fr-fr': "Inferno X",
			'es-es': "Infierno X",
			'es-mx': "Infierno X",
			'de-de': "Inferno X",
			'it-it': "Inferno X",
			'pt-br': "Inferno X"
		},

		effect: {
			'en-us': "Discard any amount of {R} Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez autant d'Énergies {R} que vous le voulez parmi vos Pokémon. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta cualquier cantidad de Energías {R} de tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta cualquier cantidad de Energías {R} de tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que descartaste de esta manera.",
			'de-de': "Lege beliebig viele {R}-Energien von deinen Pokémon auf deinen Ablagestapel, und diese Attacke fügt für jede Karte, die du auf diese Weise auf den Ablagestapel gelegt hast, 90 Schadenspunkte zu.",
			'it-it': "Scarta un numero qualsiasi di Energie {R} dai tuoi Pokémon e questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte qualquer quantidade de Energia {R} dentre seus Pokémon, e este ataque causa 90 pontos de dano para cada carta descartada desta forma."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	illustrator: "takuyoa",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857588,
				tcgplayer: 662182,
				cardtrader: 353122
			}
		},
	],	
}

export default card
