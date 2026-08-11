import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'es-mx': "Gliscor",
		'de-de': "Skorgro",
		'it-it': "Gliscor",
		'pt-br': "Gliscor"
	},

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'es-mx': "Gligar",
		'de-de': "Skorgla",
		'it-it': "Gligar",
		'pt-br': "Gligar",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [472],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Poison Ring",
			'fr-fr': "Anneau de Poison",
			'es-es': "Anillo Venenoso",
			'es-mx': "Anillo Venenoso",
			'de-de': "Giftring",
			'it-it': "Velenanello",
			'pt-br': "Anel de Veneno"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "If it succeeds in catching even a faint breeze properly, it can circle the globe without flapping once.",
	},

	illustrator: "Dsuke",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857625,
				tcgplayer: 662163,
				cardtrader: 356833
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857625,
				tcgplayer: 662163,
				cardtrader: 356833
			}
		},
	],	
}

export default card
