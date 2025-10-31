import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1021],
	set: Set,

	name: {
		en: "Raging Bolt ex",
		fr: "Ire-Foudre-ex",
		es: "Electrofuria ex",
		it: "Furiatonante-ex",
		pt: "Raio Fúria ex",
		de: "Furienblitz-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Burst Roar",
			fr: "Rugissement Éclatant",
			es: "Rugido Explosivo",
			it: "Boatoscoppio",
			pt: "Rugido Disruptivo",
			de: "Berstender Brüller"
		},

		effect: {
			en: "Discard your hand and draw 6 cards.",
			fr: "Défaussez votre main, puis piochez 6 cartes.",
			es: "Descarta las cartas de tu mano y roba 6 cartas.",
			it: "Scarta le carte che hai in mano e pesca sei carte.",
			pt: "Descarte a sua mão e compre 6 cartas.",
			de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 6 Karten."
		}
	}, {
		cost: ["Lightning", "Fighting"],

		name: {
			en: "Bellowing Thunder",
			fr: "Tonnerre Rugissant",
			es: "Bramido Atronador",
			it: "Fragortuono",
			pt: "Trovão Estrondoso",
			de: "Kläffender Donner"
		},

		effect: {
			en: "You may discard any amount of Basic Energy from your Pokémon. This attack does 70 damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser autant d'Énergies de base que vous le voulez de vos Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar cualquier cantidad de Energías Básicas de tus Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare tutte le Energie base che vuoi dai tuoi Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar qualquer quantidade de Energia Básica dos seus Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma.",
			de: "Du kannst beliebig viele Basis-Energien von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "aky CG Works",

	thirdParty: {
		cardmarket: 760848
	}
}

export default card