import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		'fr-fr': "Salamèche",
		'en-us': "Charmander",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Destruction Ardente",
			'en-us': "Blazing Destruction",
			'es-es': "Destrucción Abrasadora",
			'it-it': "Raso al Fuoco",
			'pt-br': "Destruição Flamejante",
			'de-de': "Feurige Verwüstung"
		},

		effect: {
			'fr-fr': "Défaussez un Stade en jeu.",
			'en-us': "Discard a Stadium in play.",
			'es-es': "Descarta 1 Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Descarte um Estádio em jogo.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Crachage de Feu Régulier",
			'en-us': "Steady Firebreathing",
			'es-es': "Lanzallamas Continuo",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante",
			'de-de': "Stetiger Feuerhauch"
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

	description: {
		'en-us': "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733599,
				tcgplayer: 502555,
				cardtrader: 261106
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733599,
				tcgplayer: 502555,
				cardtrader: 261106
			}
		},
		{
			type: 'normal',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 720366
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 791827
			}
		},
		{
			type: 'reverse',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 759873
			}
		},
		{
			type: 'reverse',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 794909
			}
		},
	],

	illustrator: "GIDORA",

	
}

export default card
