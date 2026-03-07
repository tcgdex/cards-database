import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Charizard X ex",
		fr: "Méga-Dracaufeu X-ex",
		de: "Mega-Glurak X-ex",
		it: "Mega Charizard X-ex",
		es: "Mega-Charizard X ex",
		pt: "Mega Charizard X ex"
	},

	suffix: "EX",
	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [6],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo",
		it: "Charmeleon",
		es: "Charmeleon",
		pt: "Charmeleon"
	},

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Inferno X",
			fr: "Inferno X",
			de: "Inferno X",
			it: "Inferno X",
			es: "Inferno X",
			pt: "Inferno X"
		},

		damage: "90×",

		effect: {
			en: "Discard any amount of [R] Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way.",
			fr: "Défaussez autant d'Énergies [R] que vous le voulez parmi vos Pokémon. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege beliebig viele [R] Energiekarten von deinen Pokémon auf deinen Ablagestapel und diese Attacke fügt für jede auf diese Weise abgelegte Karte 90 Schadenspunkte zu.",
			it: "Scarta qualsiasi numero di carte Energia [R] dai tuoi Pokémon. Questo attacco infligge 90 danni per ogni carta che hai scartato in questo modo.",
			es: "Descarta cualquier cantidad de cartas de Energía [R] de entre tus Pokémon, y este ataque hace 90 puntos de daño por cada carta que hayas descartado de esta manera.",
			pt: "Descarte qualquer quantidade de cartas de Energia [R] dentre seus Pokémon, e este ataque causará 90 pontos de dano para cada carta descartada desta forma."
		}
	}],

	retreat: 2,
	regulationMark: "I",
}

export default card
