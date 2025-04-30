import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Clodsire ex",
		fr: "Terraiste de Paldea-ex",
		es: "Clodsire de Paldea ex",
		de: "Paldea-Suelord-ex",
		it: "Clodsire di Paldea-ex",
		pt: "Clodsire de Paldea ex",
		'es-mx': "Clodsire de Paldea ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Poison Ring",
			fr: "Anneau de Poison",
			es: "Anillo Venenoso",
			de: "Giftring",
			it: "Velenanello",
			pt: "Anel de Veneno",
			'es-mx': "Anillo Venenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse."
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			de: "Gigastoß",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			'es-mx': "Gigaimpacto"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
