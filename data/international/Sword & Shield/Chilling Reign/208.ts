import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		'en-us': "Metagross VMAX",
		'fr-fr': "Métalosse VMAX",
		'es-es': "Metagross VMAX",
		'it-it': "Metagross VMAX",
		'pt-br': "Metagross VMAX",
		'de-de': "Metagross VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Zap Traction",
			'fr-fr': "Magnétisation",
			'es-es': "Electrotracción",
			'it-it': "Falcetrazione",
			'pt-br': "Tração Zap",
			'de-de': "Magnethaftung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Metal"]
	}, {
		name: {
			'en-us': "Max Rush",
			'fr-fr': "Chargeomax",
			'es-es': "Maxiembestida",
			'it-it': "Dynassalto",
			'pt-br': "Arremetida Max",
			'de-de': "Dyna-Ansturm"
		},

		damage: 100,

		effect: {
			'en-us': "During your next turn, this Pokémon's Max Rush attack does 150 more damage.",
			'fr-fr': "Pendant votre prochain tour, l'attaque Chargeomax de ce Pokémon inflige 150 dégâts supplémentaires.",
			'es-es': "Durante tu próximo turno, el ataque Maxiembestida de este Pokémon hace 150 puntos de daño más.",
			'it-it': "Durante il tuo prossimo turno, l'attacco Dynassalto di questo Pokémon infligge 150 danni in più.",
			'pt-br': "Durante o seu próximo turno, o ataque Arremetida Max deste Pokémon causará 150 pontos de dano a mais.",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Dyna-Ansturm dieses Pokémon 150 Schadenspunkte mehr zu."
		},

		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,


	stage: "VMAX",
	illustrator: "Ryota Murayama",

	evolveFrom: {
		'en-us': "Metagross V",
		'fr-fr': "Métalosse-V",
		'es-es': "Metagross V",
		'it-it': "Metagross-V",
		'pt-br': "Metagross V",
		'de-de': "Metagross-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567316,
				tcgplayer: 241790
			}
		},
	],
}

export default card
