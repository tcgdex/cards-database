import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [168],

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'es-mx': "Ariados",
		'de-de': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados"
	},

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'es-mx': "Spinarak",
		'de-de': "Webarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
	},

	illustrator: "svlt",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

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
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684398,
				cardmarket: 877414
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684398,
				cardmarket: 877414
			}
		}
	],

}

export default card
