import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Muk",
		fr: "Grotadmorv",
		de: "Sleimok",
		it: "Muk",
		es: "Muk",
		pt: "Muk"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Sacs",
			fr: "Sacs de Poison",
			de: "Gifttaschen",
			it: "Sacche Velenose",
			es: "Sacos de Veneno",
			pt: "Bolsas de Veneno"
		},

		effect: {
			en: "Your opponent's Poisoned Pokémon don't recover from that Special Condition when they evolve or devolve.",
			fr: "Les Pokémon Empoisonnés de votre adversaire ne guérissent pas de cet État Spécial lorsqu'ils évoluent ou dés-évoluent.",
			de: "Die vergifteten Pokémon deines Gegners erholen sich nicht von jenem Speziellen Zustand, wenn sie sich entwickeln oder rückentwickeln.",
			it: "I Pokémon avvelenati del tuo avversario non guariscono da quella condizione speciale quando si evolvono o se ne annulla l'evoluzione.",
			es: "Los Pokémon Envenenados de tu rival no se recuperan de esa Condición Especial cuando evolucionan o involucionan.",
			pt: "Os Pokémon Envenenados do seu oponente não se recuperarão daquela Condição Especial quando eles evoluírem ou suas evoluções forem revertidas."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Toxic Strike",
			fr: "Frappe Toxique",
			de: "Giftschlag",
			it: "Attacco Tossico",
			es: "Golpe Tóxico",
			pt: "Golpe Tóxico"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 100
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card