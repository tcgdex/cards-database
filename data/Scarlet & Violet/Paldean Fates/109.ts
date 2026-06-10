import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Blazing Destruction",
			fr: "Destruction Ardente",
			es: "Destrucción Abrasadora",
			it: "Raso al Fuoco",
			pt: "Destruição Flamejante",
			de: "Feurige Verwüstung"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante",
			de: "Stetiger Feuerhauch"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751648,
				tcgplayer: 534483,
				cardtrader: 274293
			}
		},
	],

	illustrator: "sowsow",

	description: {
		en: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
	},

}

export default card
