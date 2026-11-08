import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [544],
	set: Set,

	name: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'es-es': "Whirlipede",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'de-de': "Rollum"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
		'es-es': "Venipede",
		'it-it': "Venipede",
		'pt-br': "Venipede",
		'de-de': "Toxiped"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Ring",
			'fr-fr': "Anneau de Poison",
			'es-es': "Anillo Venenoso",
			'it-it': "Velenanello",
			'pt-br': "Anel de Veneno",
			'de-de': "Giftring"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769290,
				tcgplayer: 550160
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769290,
				tcgplayer: 550160
			}
		},
	],

	illustrator: "Krgc",

}

export default card