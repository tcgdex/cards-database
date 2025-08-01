import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Gas",
			fr: "Gaz Toxik",
			de: "Giftwolke",
			es: "Gas Venenoso",
			pt: "Gás Venenoso",
			it: "Velenogas"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Sludge Whirlpool",
			fr: "Tourbillon de Boue",
			de: "Schlammstrudel",
			es: "Torbellino de Residuos",
			pt: "Redemoinho de Lodo",
			it: "Fangovortice"
		},

		damage: 130
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582797
	}
}

export default card