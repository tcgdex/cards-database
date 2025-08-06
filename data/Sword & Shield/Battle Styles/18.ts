import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple V",
		fr: "Pomdrapi V",
		es: "Flapple V",
		it: "Flapple V",
		pt: "Flapple V",
		de: "Drapfel V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Sour Spit",
			fr: "Rejet Acide",
			es: "Escupitajo Ácido",
			it: "Asprosputo",
			pt: "Cuspe Azedo",
			de: "Sauerspucke"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks cost ColorlessColorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus.",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan ColorlessColorless más.",
			it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi del Pokémon difensore aumenta di Colorless Colorless.",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor custarão ColorlessColorless a mais.",
			de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um ColorlessColorless."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 544996,
		tcgplayer: 234087
	}
}

export default card
