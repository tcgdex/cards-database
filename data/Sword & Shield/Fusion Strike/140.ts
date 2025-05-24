import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [207],
	set: Set,

	name: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "It flies straight at its target's face, then clamps down on the startled victim to inject poison."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
			de: "Giftstachel",
			es: "Picotazo Veneno",
			pt: "Ferrão Venenoso",
			it: "Velenospina"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Pierce",
			fr: "Transpercement",
			de: "Durchbohren",
			es: "Perforar",
			pt: "Perfurar",
			it: "Perforare"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card