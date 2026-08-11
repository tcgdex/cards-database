import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Garbodor VMAX",
		'fr-fr': "Miasmax VMAX",
		'es-es': "Garbodor VMAX",
		'it-it': "Garbodor VMAX",
		'pt-br': "Garbodor VMAX",
		'de-de': "Deponitox VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "5ban Graphics",
	dexId: [569],

	evolveFrom: {
		'en-us': "Garbodor V",
		'fr-fr': "Miasmax-V",
		'es-es': "Garbodor V",
		'it-it': "Garbodor-V",
		'pt-br': "Garbodor V",
		'de-de': "Deponitox-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rubbish Collecting",
			'fr-fr': "Ramassage de Déchets"
		},

		effect: {
			'en-us': "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			'fr-fr': "Jusqu'à 2 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "G-Max Malodor",
			'fr-fr': "Pestilence G-Max"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574274,
				tcgplayer: 246740
			}
		},
	],
}

export default card
