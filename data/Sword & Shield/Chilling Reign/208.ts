import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [376],
	set: Set,

	name: {
		en: "Metagross VMAX",
		fr: "Métalosse VMAX",
		es: "Metagross VMAX",
		it: "Metagross VMAX",
		pt: "Metagross VMAX",
		de: "Metagross VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Zap Traction",
			fr: "Magnétisation",
			es: "Electrotracción",
			it: "Falcetrazione",
			pt: "Tração Zap",
			de: "Magnethaftung"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Metal"]
	}, {
		name: {
			en: "Max Rush",
			fr: "Chargeomax",
			es: "Maxiembestida",
			it: "Dynassalto",
			pt: "Arremetida Max",
			de: "Dyna-Ansturm"
		},

		damage: 100,

		effect: {
			en: "During your next turn, this Pokémon's Max Rush attack does 150 more damage.",
			fr: "Pendant votre prochain tour, l'attaque Chargeomax de ce Pokémon inflige 150 dégâts supplémentaires.",
			es: "Durante tu próximo turno, el ataque Maxiembestida de este Pokémon hace 150 puntos de daño más.",
			it: "Durante il tuo prossimo turno, l'attacco Dynassalto di questo Pokémon infligge 150 danni in più.",
			pt: "Durante o seu próximo turno, o ataque Arremetida Max deste Pokémon causará 150 pontos de dano a mais.",
			de: "Während deines nächsten Zuges fügt die Attacke Dyna-Ansturm dieses Pokémon 150 Schadenspunkte mehr zu."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	illustrator: "Ryota Murayama",

	evolveFrom: {
		en: "Metagross V",
		fr: "Métalosse-V",
		es: "Metagross V",
		it: "Metagross-V",
		pt: "Metagross V",
		de: "Metagross-V"
	},

	regulationMark: "E"
}

export default card
