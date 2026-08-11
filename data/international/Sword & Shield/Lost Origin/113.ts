import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Shinji Kanda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "String Bind",
			'fr-fr': "Ficelage",
			'es-es': "Hilo Atadura",
			'it-it': "Filo Legatutto",
			'pt-br': "Fio Aprisionante",
			'de-de': "Fadenfessel"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Venomous Fang",
			'fr-fr': "Croc-Poison",
			'es-es': "Colmillo Nocivo",
			'it-it': "Dentevelenoso",
			'pt-br': "Dente Venenoso",
			'de-de': "Gifthauer"
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

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674126,
				tcgplayer: 284009
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674126,
				tcgplayer: 284009
			}
		},
	],
}

export default card
