import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
		es: "Oddish",
		it: "Oddish",
		pt: "Oddish",
		de: "Myrapla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Offensive Scent",
			fr: "Parfum Offensif",
			es: "Aroma Ofensivo",
			it: "Aroma Offensivo",
			pt: "Aroma Ofensivo",
			de: "Widerlicher Duft"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691719,
		tcgplayer: 478042
	}
}

export default card