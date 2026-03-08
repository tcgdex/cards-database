import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [979],
	set: Set,

	name: {
		en: "Annihilape ex",
		fr: "Courrousinge-ex",
		es: "Annihilape ex",
		it: "Annihilape-ex",
		pt: "Annihilape ex",
		de: "Epitaff-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	evolveFrom: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Angry Grudge",
			fr: "Rancune Rageuse",
			es: "Rabia Iracunda",
			it: "Rancorfurioso",
			pt: "Rancor Guardado",
			de: "Böses Nachspiel"
		},

		effect: {
			en: "Put up to 12 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way.",
			fr: "Placez jusqu'à 12 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts placé de cette façon.",
			es: "Pon hasta 12 contadores de daño en este Pokémon. Este ataque hace 20 puntos de daño por cada contador de daño que hayas colocado de esta manera.",
			it: "Metti fino a 12 segnalini danno su questo Pokémon. Questo attacco infligge 20 danni per ogni segnalino danno che hai messo in questo modo.",
			pt: "Coloque até 12 contadores de dano neste Pokémon. Este ataque causa 20 pontos de dano para cada contador de dano colocado desta forma.",
			de: "Lege bis zu 12 Schadensmarken auf dieses Pokémon. Diese Attacke fügt für jede auf diese Weise platzierte Schadensmarke 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			pt: "Arremesso Sísmico",
			de: "Geowurf"
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "PLANETA Hiiragi"
}

export default card