import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [579],
	set: Set,

	name: {
		en: "Reuniclus",
		fr: "Symbios",
		es: "Reuniclus",
		it: "Reuniclus",
		pt: "Reuniclus",
		de: "Zytomega"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Summoning Gate",
			fr: "Portail Invocatoire",
			es: "Portal de Invocación",
			it: "Portale Evocativo",
			pt: "Portal da Invocação",
			de: "Beschwörendes Portal"
		},

		effect: {
			en: "Look at the top 8 cards of your deck. You may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck.",
			fr: "Regardez les 8 cartes du dessus de votre deck. Vous pouvez placer sur votre Banc le nombre voulu de Pokémon que vous y trouvez. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 8 primeras cartas de tu baraja. Puedes poner cualquier cantidad de Pokémon que encuentres entre ellas en tu Banca. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Guarda le prime otto carte del tuo mazzo. Puoi mettere un numero qualsiasi di Pokémon presenti tra esse nella tua panchina. Rimischia le altre carte nel tuo mazzo.",
			pt: "Olhe as 8 cartas de cima do seu baralho. Você pode colocar qualquer número de Pokémon que encontrar lá no seu Banco. Embaralhe as outras cartas de volta no seu baralho.",
			de: "Schau dir die obersten 8 Karten deines Decks an. Du kannst beliebig viele Pokémon, die du dort findest, auf deine Bank legen. Mische die anderen Karten zurück in dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Brain Shake",
			fr: "Cahot Mental",
			es: "Sacudida Cerebral",
			it: "Scuotimente",
			pt: "Chacoalhada Cerebral",
			de: "Gehirnschütteln"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card