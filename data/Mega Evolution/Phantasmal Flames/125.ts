import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Charizard X ex",
		fr: "Méga-Dracaufeu X-ex",
		es: "Mega-Charizard X ex",
		'es-mx': "Mega-Charizard X ex",
		de: "Mega-Glurak X-ex",
		it: "Mega Charizard X-ex",
		pt: "Mega Charizard X ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",

	dexId: [6],
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [6],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Inferno X",
			fr: "Inferno X",
			es: "Infierno X",
			'es-mx': "Infierno X",
			de: "Inferno X",
			it: "Inferno X",
			pt: "Inferno X"
		},

		effect: {
			en: "Discard any amount of {R} Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way.",
			fr: "Défaussez autant d'Énergies {R} que vous le voulez parmi vos Pokémon. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta cualquier cantidad de Energías {R} de tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta cualquier cantidad de Energías {R} de tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que descartaste de esta manera.",
			de: "Lege beliebig viele {R}-Energien von deinen Pokémon auf deinen Ablagestapel, und diese Attacke fügt für jede Karte, die du auf diese Weise auf den Ablagestapel gelegt hast, 90 Schadenspunkte zu.",
			it: "Scarta un numero qualsiasi di Energie {R} dai tuoi Pokémon e questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte qualquer quantidade de Energia {R} dentre seus Pokémon, e este ataque causa 90 pontos de dano para cada carta descartada desta forma."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857700
	}
}

export default card