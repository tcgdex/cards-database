import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Battle VIP Pass",
		fr: "Passe de Combat VIP",
		es: "Pase de Combate VIP",
		it: "Superpass VIP Lotta",
		pt: "Passe de Batalha VIP",
		de: "VIP-Kampfpass"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can use this card only during your first turn.\n\nSearch your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
		fr: "Vous ne pouvez utiliser cette carte que pendant votre premier tour.\nCherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		es: "Puedes usar esta carta solo durante tu primer turno.\nBusca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		it: "Puoi usare questa carta solo durante il tuo primo turno.\nCerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		pt: "Você só pode usar esta carta durante o seu primeiro turno.\nProcure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		de: "Du kannst diese Karte nur während deines ersten Zuges verwenden.\nDurchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "E",
	illustrator: "Ryo Ueda",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582961
	}
}

export default card