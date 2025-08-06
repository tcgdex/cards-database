import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Cara Liss",
		fr: "Alba Minçalor",
		es: "Carmen Babia",
		it: "Fossilia Di Strattis",
		pt: "Clara Petra",
		de: "Petra Fakt"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for up to 2 Rare Fossil cards and put them onto your Bench. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 2 cartes Fossile Rare, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 2 cartas de Fósil Raro y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a due carte Fossile Raro e mettile nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 2 cartas Fóssil Raro no seu baralho e coloque-as no seu Banco. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 2 Seltenes Fossil-Karten und lege sie auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 512455,
		tcgplayer: 226502
	}
}

export default card
