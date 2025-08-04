import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia VSTAR",
		fr: "Lugia VSTAR",
		es: "Lugia V-ASTRO",
		it: "Lugia V ASTRO",
		pt: "Lugia V-ASTRO",
		de: "Lugia VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lugia V",
		fr: "Lugia-V",
		es: "Lugia V",
		it: "Lugia-V",
		pt: "Lugia V",
		de: "Lugia-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tempest Dive",
			fr: "Plongée Tempétueuse",
			es: "Zambullida Tempestad",
			it: "Immersione Tempestosa",
			pt: "Mergulho Tempestuoso",
			de: "Sturmwindflug"
		},

		effect: {
			en: "You may discard a Stadium in play.",
			fr: "Vous pouvez défausser un Stade en jeu.",
			es: "Puedes descartar un Estadio en juego.",
			it: "Puoi scartare una carta Stadio in gioco.",
			pt: "Você pode descartar 1 Estádio em jogo.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682186,
		tcgplayer: 451995
	}
}

export default card