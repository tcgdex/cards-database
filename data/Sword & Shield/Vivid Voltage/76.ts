import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Draw",
				fr: "Triple Pioche",
				es: "Triple Robo",
				it: "Pescata Tripla",
				pt: "Compra Tripla",
				de: "Dreifachzug"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Flying Fury",
				fr: "Furie Volante",
				es: "Furia Voladora",
				it: "Furia Volante",
				pt: "Fúria Alada",
				de: "Fliegende Furie"
			},
			effect: {
				en: "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
				fr: "Avant d’infliger des dégâts, vous pouvez défausser autant de cartes Outil Pokémon que vous le voulez de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Antes de infligir daño, puedes descartar cualquier cantidad de Herramientas Pokémon de tus Pokémon. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Prima di infliggere danni, puoi scartare un numero qualsiasi di carte Oggetto Pokémon dai tuoi Pokémon. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Antes de causar dano, você poderá descartar qualquer número de Ferramentas Pokémon dos seus Pokémon. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Bevor du Schaden zufügst, kannst du beliebig viele Pokémon-Ausrüstungen von deinen Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0
}

export default card
