import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [986],
	set: Set,

	name: {
		en: "Brute Bonnet",
		fr: "Fongus-Furie",
		es: "Furioseta",
		it: "Fungofurioso",
		pt: "Capuz Bruto",
		de: "Wutpilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Spray",
			fr: "Pulvérisation Toxique",
			es: "Aerosol Venenoso",
			it: "Spruzzo Velenoso",
			pt: "Spray de Veneno",
			de: "Giftspray"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Relentless Punches",
			fr: "Poings Acharnés",
			es: "Puños Implacables",
			it: "Pugni Continui",
			pt: "Socos Implacáveis",
			de: "Unerbittliche Hiebe"
		},

		effect: {
			en: "This attack does 50 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "danciao"
}

export default card