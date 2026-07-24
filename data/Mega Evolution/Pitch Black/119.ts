import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Gwynn",
		fr: "Albia",
		es: "Inma",
		'es-mx': "Inma",
		de: "Gwynn",
		it: "Imma",
		pt: "Clarita"
	},

	illustrator: "Naoki Saito",
	rarity: "Special illustration rare",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Discard up to 2 Pokémon that don't have a Rule Box from your hand, and draw 3 cards for each card you discarded in this way. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
		fr: "Défaussez jusqu'à 2 Pokémon n'ayant pas d'encadré Règle de votre main, puis piochez 3 cartes pour chaque carte défaussée de cette façon. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
		es: "Descarta hasta 2 Pokémon que no tengan un recuadro de regla de tu mano y roba 3 cartas por cada carta que hayas descartado de esta manera. (Los Pokémon ex, Pokémon V, etc., tienen recuadros de regla).",
		'es-mx': "Descarta hasta 2 Pokémon que no tengan un Recuadro de Regla de tu mano y roba 3 cartas por cada carta que descartaste de esta manera. (Los Pokémon ex, los Pokémon V, etc., tienen Recuadros de Regla).",
		de: "Lege bis zu 2 Pokémon, die kein Regelfeld haben, aus deiner Hand auf deinen Ablagestapel und ziehe 3 Karten für jede auf diese Weise abgelegte Karte. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
		it: "Scarta fino a due Pokémon che non hanno una regola speciale dalla tua mano e pesca tre carte per ogni carta che hai scartato in questo modo. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
		pt: "Descarte até 2 Pokémon que não têm uma Caixa de Regras da sua mão e compre 3 cartas para cada carta descartada desta forma. (Pokémon ex, Pokémon V, etc. têm Caixa de Regras.)"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895904,
				tcgplayer: 704876
			}
		},
	],
}

export default card
