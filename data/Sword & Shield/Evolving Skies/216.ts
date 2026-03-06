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
		en: "Garbodor VMAX",
		fr: "Miasmax VMAX",
		es: "Garbodor VMAX",
		it: "Garbodor VMAX",
		pt: "Garbodor VMAX",
		de: "Deponitox VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "5ban Graphics",
	dexId: [569],

	evolveFrom: {
		en: "Garbodor V",
		fr: "Miasmax-V",
		es: "Garbodor V",
		it: "Garbodor-V",
		pt: "Garbodor V",
		de: "Deponitox-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rubbish Collecting",
			fr: "Ramassage de Déchets"
		},

		effect: {
			en: "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			fr: "Jusqu'à 2 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "G-Max Malodor",
			fr: "Pestilence G-Max"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574149,
		tcgplayer: 246740
	}
}

export default card
