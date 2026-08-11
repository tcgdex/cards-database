import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Garbodor V",
		'fr-fr': "Miasmax V",
		'es-es': "Garbodor V",
		'it-it': "Garbodor V",
		'pt-br': "Garbodor V",
		'de-de': "Deponitox V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "aky CG Works",

	attacks: [{
		name: {
			'en-us': "Trash Stench",
			'fr-fr': "Relents d'Ordures",
			'es-es': "Basura Pestilente",
			'it-it': "Tanfo di Spazzatura",
			'pt-br': "Trash Stench",
			'de-de': "Müllmief"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'en-us': "Sludge Bomb",
			'fr-fr': "Bombe Beurk",
			'es-es': "Bomba Lodo",
			'it-it': "Fangobomba",
			'pt-br': "Sludge Bomb",
			'de-de': "Matschbombe"
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574248,
				tcgplayer: 246737
			}
		},
	],
}

export default card
