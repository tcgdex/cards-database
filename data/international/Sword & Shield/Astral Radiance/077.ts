import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [409],
	set: Set,

	name: {
		'en-us': "Rampardos",
		'fr-fr': "Charkos",
		'es-es': "Rampardos",
		'it-it': "Rampardos",
		'pt-br': "Rampardos",
		'de-de': "Rameidon"
	},

	illustrator: "Nisota Niso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
		'es-es': "Cranidos",
		'it-it': "Cranidos",
		'pt-br': "Cranidos",
		'de-de': "Koknodon"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Jurassic Hammer",
			'fr-fr': "Marteau Jurassique",
			'es-es': "Martillo Jurásico",
			'it-it': "Martello Giurassico",
			'pt-br': "Martelo Jurássico",
			'de-de': "Jurahammer"
		},

		effect: {
			'en-us': "If your opponent has 3 or fewer cards in their hand, this attack does nothing.",
			'fr-fr': "Si votre adversaire a 3 cartes ou moins dans sa main, cette attaque ne fait rien.",
			'es-es': "Si tu rival tiene 3 cartas o menos en su mano, este ataque no hace nada.",
			'it-it': "Se il tuo avversario ha tre o meno carte in mano, questo attacco non ha effetto.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas na própria mão, este ataque não fará nada.",
			'de-de': "Wenn dein Gegner 3 oder weniger Karten auf seiner Hand hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This ancient Pokémon used headbutts skillfully. Its brain was really small, so some theories suggest that its stupidity led to its extinction.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658675,
				tcgplayer: 272278
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658675,
				tcgplayer: 272278
			}
		},
	],
}

export default card
