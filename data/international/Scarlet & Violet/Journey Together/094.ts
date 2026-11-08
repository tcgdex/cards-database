import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [980],
	set: Set,

	name: {
		'en-us': "Paldean Clodsire ex",
		'fr-fr': "Terraiste de Paldea-ex",
		'es-es': "Clodsire de Paldea ex",
		'de-de': "Paldea-Suelord-ex",
		'it-it': "Clodsire di Paldea-ex",
		'pt-br': "Clodsire de Paldea ex",
		'es-mx': "Clodsire de Paldea ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axoloto de Paldea",
		'es-es': "Wooper de Paldea",
		'de-de': "Paldea-Felino",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'es-mx': "Wooper de Paldea"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Poison Ring",
			'fr-fr': "Anneau de Poison",
			'es-es': "Anillo Venenoso",
			'de-de': "Giftring",
			'it-it': "Velenanello",
			'pt-br': "Anel de Veneno",
			'es-mx': "Anillo Venenoso"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse."
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact",
			'es-es': "Gigaimpacto",
			'de-de': "Gigastoß",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'es-mx': "Gigaimpacto"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede atacar."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "PLANETA Tsuji",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817246,
				tcgplayer: 623521
			}
		},
],
}

export default card
