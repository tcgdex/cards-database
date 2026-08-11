import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1021],
	set: Set,

	name: {
		'en-us': "Raging Bolt ex",
		'fr-fr': "Ire-Foudre-ex",
		'es-es': "Electrofuria ex",
		'it-it': "Furiatonante-ex",
		'pt-br': "Raio Fúria ex",
		'de-de': "Furienblitz-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Burst Roar",
			'fr-fr': "Rugissement Éclatant",
			'es-es': "Rugido Explosivo",
			'it-it': "Boatoscoppio",
			'pt-br': "Rugido Disruptivo",
			'de-de': "Berstender Brüller"
		},

		effect: {
			'en-us': "Discard your hand and draw 6 cards.",
			'fr-fr': "Défaussez votre main, puis piochez 6 cartes.",
			'es-es': "Descarta las cartas de tu mano y roba 6 cartas.",
			'it-it': "Scarta le carte che hai in mano e pesca sei carte.",
			'pt-br': "Descarte a sua mão e compre 6 cartas.",
			'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 6 Karten."
		}
	}, {
		cost: ["Lightning", "Fighting"],

		name: {
			'en-us': "Bellowing Thunder",
			'fr-fr': "Tonnerre Rugissant",
			'es-es': "Bramido Atronador",
			'it-it': "Fragortuono",
			'pt-br': "Trovão Estrondoso",
			'de-de': "Kläffender Donner"
		},

		effect: {
			'en-us': "You may discard any amount of Basic Energy from your Pokémon. This attack does 70 damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser autant d'Énergies de base que vous le voulez de vos Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar cualquier cantidad de Energías Básicas de tus Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare tutte le Energie base che vuoi dai tuoi Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar qualquer quantidade de Energia Básica dos seus Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Du kannst beliebig viele Basis-Energien von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760838,
				tcgplayer: 542929
			}
		},
	],

	suffix: "ex",
	illustrator: "Teeziro",

}

export default card