import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [579],
	set: Set,

	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'es-es': "Reuniclus",
		'it-it': "Reuniclus",
		'pt-br': "Reuniclus",
		'de-de': "Zytomega"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'es-es': "Duosion",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'de-de': "Mitodos"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Summoning Gate",
			'fr-fr': "Portail Invocatoire",
			'es-es': "Portal de Invocación",
			'it-it': "Portale Evocativo",
			'pt-br': "Portal da Invocação",
			'de-de': "Beschwörendes Portal"
		},

		effect: {
			'en-us': "Look at the top 8 cards of your deck. You may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck.",
			'fr-fr': "Regardez les 8 cartes du dessus de votre deck. Vous pouvez placer sur votre Banc le nombre voulu de Pokémon que vous y trouvez. Mélangez les autres cartes avec votre deck.",
			'es-es': "Mira las 8 primeras cartas de tu baraja. Puedes poner cualquier cantidad de Pokémon que encuentres entre ellas en tu Banca. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Guarda le prime otto carte del tuo mazzo. Puoi mettere un numero qualsiasi di Pokémon presenti tra esse nella tua panchina. Rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Olhe as 8 cartas de cima do seu baralho. Você pode colocar qualquer número de Pokémon que encontrar lá no seu Banco. Embaralhe as outras cartas de volta no seu baralho.",
			'de-de': "Schau dir die obersten 8 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, auf deine Bank legen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Brain Shake",
			'fr-fr': "Cahot Mental",
			'es-es': "Sacudida Cerebral",
			'it-it': "Scuotimente",
			'pt-br': "Chacoalhada Cerebral",
			'de-de': "Gehirnschütteln"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 100
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
	regulationMark: "H",

	description: {
		'en-us': "While it could use its psychic abilities in battle, this Pokémon prefers to swing its powerful arms around to beat opponents into submission.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760702,
				tcgplayer: 542816
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760702,
				tcgplayer: 542816
			}
		},
	],

	illustrator: "Gemi",

}

export default card