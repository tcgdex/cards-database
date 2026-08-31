import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
		de: "Ninjask"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [291],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
		de: "Nincada"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Loose Shell",
				fr: "Carapace branlante",
				de: "Loser Panzer"
			},
			effect: {
				en: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Ninjask de votre main sur un de vos Pokémon pour le faire évoluer, vous pouvez chercher Munja dans votre deck et le placer sur votre Banc. Traitez le nouveau Pokémon du Banc comme un Pokémon de base. Ensuite, mélangez votre deck.",
				de: "Einmal während deines Zuges, wenn du Ninjask von deiner Hand spielst um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach Ninjatom durchsuchen und auf deine Bank legen. Behandle das neue Pokémon wie ein Basis-Pokémon. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Touch",
				fr: "Touche rapide",
				de: "Schnelle Berührung"
			},
			effect: {
				en: "You may switch Ninjask with 1 of your Benched Pokémon. If you do, you may move any number of Grass Energy cards attached to Ninjask to the new Active Pokémon.",
				fr: "Vous pouvez échanger Ninjask contre un des Pokémon de votre Banc. Vous pouvez alors attacher au nouveau Pokémon Actif autant de cartes Énergie {G} attachées à Ninjask que vous le voulez.",
				de: "Du kannst Ninjask gegen 1 Pokémon auf deiner Bank austauschen. Wenn du das machst, kannst du beliebig viele an Ninjask angelegte {G}-Energiekarten an das neue Aktive Pokémon anlegen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87783,
				cardmarket: 275895
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87783,
				cardmarket: 275895
			},
		},
	],

}

export default card
