import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1013],
	set: Set,

	name: {
		'en-us': "Sinistcha",
		'fr-fr': "Théffroyable",
		'es-es': "Sinistcha",
		'it-it': "Sinistcha",
		'pt-br': "Sinistcha",
		'de-de': "Fatalitcha"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Poltchageist",
		'fr-fr': "Poltchageist",
		'es-es': "Poltchageist",
		'it-it': "Poltchageist",
		'pt-br': "Poltchageist",
		'de-de': "Mortcha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Cursed Drop",
			'fr-fr': "Chute Maudite",
			'es-es': "Caída Maldita",
			'it-it': "Caduta Maledetta",
			'pt-br': "Queda Amaldiçoada",
			'de-de': "Verfluchter Fall"
		},

		effect: {
			'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			'fr-fr': "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			'es-es': "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			'it-it': "Metti quattro segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			'pt-br': "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
			'de-de': "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Spill the Tea",
			'fr-fr': "Thé Renversé",
			'es-es': "Derramar el Té",
			'it-it': "Rovescia il Tè",
			'pt-br': "Chá de Sumiço",
			'de-de': "Plaudertee"
		},

		effect: {
			'en-us': "Discard up to 3 {G} Energy cards from your Pokémon. This attack does 70 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez jusqu'à 3 cartes Énergie {G} de vos Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta hasta 3 cartas de Energía {G} de tus Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta fino a tre carte Energia {G} dai tuoi Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte até 3 cartas de Energia {G} dos seus Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege bis zu 3 {G}-Energiekarten von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It prefers cool, dark places, such as the back of a shelf or the space beneath a home's floorboards. It wanders in search of prey after sunset.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769196,
				tcgplayer: 550066
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769196,
				tcgplayer: 550066
			}
		},
		{
			type: "holo",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 771355,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 858724,
			}
		},
	],

	illustrator: "Kouki Saitou",

}

export default card
