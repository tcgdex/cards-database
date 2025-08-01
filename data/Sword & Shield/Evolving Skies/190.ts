import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Garbodor V",
		fr: "Miasmax V",
		es: "Garbodor V",
		it: "Garbodor V",
		pt: "Garbodor V",
		de: "Deponitox V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			en: "Trash Stench",
			fr: "Relents d'Ordures",
			es: "Basura Pestilente",
			it: "Tanfo di Spazzatura",
			pt: "Trash Stench",
			de: "Müllmief"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			en: "Sludge Bomb",
			fr: "Bombe Beurk",
			es: "Bomba Lodo",
			it: "Fangobomba",
			pt: "Sludge Bomb",
			de: "Matschbombe"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [569],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574148
	}
}

export default card
