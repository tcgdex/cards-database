import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	illustrator: "Aya Kusube",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Chakra Awakening",
			'fr-fr': "Ouverture de Chakra",
			'es-es': "Despertar Chakra",
			'it-it': "Risveglio Chakra",
			'pt-br': "Despertar dos Chakras",
			'de-de': "Erwachende Chakras"
		},

		effect: {
			'en-us': "If you have exactly 4 cards in your hand, this Pokémon's attacks cost ColorlessColorlessColorless less.",
			'fr-fr': "S'il vous reste exactement 4 cartes en main, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
			'es-es': "Si tienes exactamente 4 cartas en tu mano, los ataques de este Pokémon cuestan ColorlessColorlessColorless menos.",
			'it-it': "Se hai esattamente quattro carte in mano, il costo degli attacchi di questo Pokémon è ridotto di ColorlessColorlessColorless.",
			'pt-br': "Se você tiver exatamente 4 cartas na sua mão, os ataques deste Pokémon custarão ColorlessColorlessColorless a menos.",
			'de-de': "Wenn du genau 4 Karten auf deiner Hand hast, verringern sich die Kosten der Attacken dieses Pokémon um ColorlessColorlessColorless."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Vigorous Kick",
			'fr-fr': "Coup de Pied Vigoureux",
			'es-es': "Patada Vigorosa",
			'it-it': "Calcio Vigoroso",
			'pt-br': "Chute Vigoroso",
			'de-de': "Energischer Tritt"
		},

		effect: {
			'en-us': "If your opponent has any Pokémon VMAX in play, this attack does 90 more damage.",
			'fr-fr': "Si votre adversaire a au moins un Pokémon-VMAX en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tu rival tiene algún Pokémon VMAX en juego, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il tuo avversario ha dei Pokémon-VMAX in gioco, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o seu oponente tiver algum Pokémon VMAX em jogo, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner mindestens 1 Pokémon-VMAX im Spiel hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Through yoga training, it gained the psychic power to predict its foe's next move.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682120,
				tcgplayer: 451727
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682120,
				tcgplayer: 451727
			}
		},
	],
}

export default card
