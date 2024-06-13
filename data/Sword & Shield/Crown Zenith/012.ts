import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [455],
	set: Set,

	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		pt: "Carnivine",
		de: "Venuflibis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Festering Saliva",
			fr: "Salive Suppurative",
			es: "Saliva Infecciosa",
			it: "Saliva Infetta",
			pt: "Saliva Asquerosa",
			de: "Schwärender Speichel"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und vergiftet."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bind Down",
			fr: "Astreinte",
			es: "Amarrar",
			it: "Legafermo",
			pt: "Aprisionamento",
			de: "Anbinden"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card