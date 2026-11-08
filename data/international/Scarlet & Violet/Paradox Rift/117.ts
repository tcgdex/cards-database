import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Chuck",
			'fr-fr': "Bazardage",
			'es-es': "Desechar",
			'it-it': "Tiro",
			'pt-br': "Tacar Fora",
			'de-de': "Wurf"
		},

		effect: {
			'en-us': "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez de votre main le nombre voulu de cartes Outil Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta cualquier cantidad de cartas de Herramienta Pokémon de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta un numero qualsiasi di carte Oggetto Pokémon che hai in mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte qualquer número de cartas de Ferramenta Pokémon da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege beliebig viele Pokémon-Ausrüstungen aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Venomous Hit",
			'fr-fr': "Frappe Venimeuse",
			'es-es': "Golpe Venenoso",
			'it-it': "Colpo Velenoso",
			'pt-br': "Golpe Venenoso",
			'de-de': "Giftiger Schlag"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740644,
				tcgplayer: 523791,
				cardtrader: 265228
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740644,
				tcgplayer: 523791,
				cardtrader: 265228
			}
		},
	],

	illustrator: "Aya Kusube",

	
}

export default card
