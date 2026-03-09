import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1013],
	set: Set,

	name: {
		en: "Sinistcha",
		fr: "Théffroyable",
		es: "Sinistcha",
		it: "Sinistcha",
		pt: "Sinistcha",
		de: "Fatalitcha"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		en: "Poltchageist",
		fr: "Poltchageist",
		es: "Poltchageist",
		it: "Poltchageist",
		pt: "Poltchageist",
		de: "Mortcha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
			es: "Caída Maldita",
			it: "Caduta Maledetta",
			pt: "Queda Amaldiçoada",
			de: "Verfluchter Fall"
		},

		effect: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti quattro segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Spill the Tea",
			fr: "Thé Renversé",
			es: "Derramar el Té",
			it: "Rovescia il Tè",
			pt: "Chá de Sumiço",
			de: "Plaudertee"
		},

		effect: {
			en: "Discard up to 3 {G} Energy cards from your Pokémon. This attack does 70 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 3 cartes Énergie {G} de vos Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 3 cartas de Energía {G} de tus Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta fino a tre carte Energia {G} dai tuoi Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 3 cartas de Energia {G} dos seus Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma.",
			de: "Lege bis zu 3 {G}-Energiekarten von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 769196
	}
}

export default card
