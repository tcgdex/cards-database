import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		en: "Muk",
		fr: "Grotadmorv",
		es: "Muk",
		it: "Muk",
		pt: "Muk",
		de: "Sleimok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Grimer"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Sacs",
			fr: "Sacs de Poison",
			es: "Sacos de Veneno",
			it: "Sacche Velenose",
			pt: "Bolsas de Veneno",
			de: "Gifttaschen"
		},

		effect: {
			en: "Your opponent's Poisoned Pokémon don't recover from that Special Condition when they evolve or devolve.",
			fr: "Les Pokémon Empoisonnés de votre adversaire ne guérissent pas de cet État Spécial lorsqu'ils évoluent ou dés-évoluent.",
			es: "Los Pokémon Envenenados de tu rival no se recuperan de esa Condición Especial cuando evolucionan o involucionan.",
			it: "I Pokémon avvelenati del tuo avversario non guariscono da quella condizione speciale quando si evolvono o se ne annulla l'evoluzione.",
			pt: "Os Pokémon Envenenados do seu oponente não se recuperarão daquela Condição Especial quando eles evoluírem ou suas evoluções forem revertidas.",
			de: "Die vergifteten Pokémon deines Gegners erholen sich nicht von jenem Speziellen Zustand, wenn sie sich entwickeln oder rückentwickeln."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Toxic Strike",
			fr: "Frappe Toxique",
			es: "Golpe Tóxico",
			it: "Attacco Tossico",
			pt: "Golpe Tóxico",
			de: "Giftschlag"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "G",
	illustrator: "Haru Akasaka",

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: {
		holo: false
	},

	thirdParty: {
		cardmarket: 702422
	}
}

export default card