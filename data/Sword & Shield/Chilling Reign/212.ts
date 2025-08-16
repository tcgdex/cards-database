import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Brawly",
		fr: "Bastien",
		es: "Marcial",
		it: "Rudi",
		pt: "Brawly",
		de: "Kamillo"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 3 Basic Rapid Strike Pokémon and put them onto your Bench. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 3 Pokémon Mille Poings de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja hasta 3 Pokémon Golpe Fluido Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo fino a tre Pokémon Base Colpo Rapido e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por até 3 Pokémon Golpe Fluido Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach bis zu 3 Basis-Fließender-Angriff-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Sanosuke Sakuma",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 567239,
		tcgplayer: 241819
	}
}

export default card
