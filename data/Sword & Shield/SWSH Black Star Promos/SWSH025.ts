import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},

	illustrator: "tetsuya koizumi",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Poisonous Puddle",
			fr: "Flaque Toxique",
			es: "Charco Venenoso",
			it: "Pozza Velenosa",
			pt: "Poisonous Puddle",
			de: "Giftpfütze"
		},

		effect: {
			en: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
			fr: "Une fois pendant votre tour, si un Stade est en jeu, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
			es: "Una vez durante tu turno, si hay un Estadio en juego, puedes dejar al Pokémon Activo de tu rival Envenenado.",
			it: "Una sola volta durante il tuo turno, se c'è in gioco una carta Stadio, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
			pt: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
			de: "Einmal während deines Zuges, wenn eine Stadionkarte im Spiel ist, kannst du das Aktive Pokémon deines Gegners vergiften."
		}
	}],

	attacks: [{
		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk",
			es: "Bomba Lodo",
			it: "Fangobomba",
			pt: "Sludge Bomb",
			de: "Matschbombe"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten."
	},

	stage: "Stage1",
	dexId: [569],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
