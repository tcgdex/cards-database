import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		'fr-fr': "Dracolosse VSTAR",
		'de-de': "Dragoran VSTAR",
		'es-es': "Dragonite V-ASTRO",
		'pt-br': "Dragonite V-ASTRO",
		'it-it': "Dragonite V ASTRO",
		'en-us': "Dragonite VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		'fr-fr': "Dracolosse-V",
		'de-de': "Dragoran-V",
		'es-es': "Dragonite V",
		'pt-br': "Dragonite V",
		'it-it': "Dragonite-V",
		'en-us': "Dragonite V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Giga Impact",
			'de-de': "Gigastoß",
			'es-es': "Gigaimpacto",
			'pt-br': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'en-us': "Giga Impact"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
		},

		damage: 250
	}, {
		cost: ["Colorless"],

		name: {
			'fr-fr': "Draco Star",
			'de-de': "Drachenstern",
			'es-es': "Astro Dracónico",
			'pt-br': "Dragão Astral",
			'it-it': "Astro del Drago",
			'en-us': "Draconic Star"
		},

		effect: {
			'fr-fr': "Regardez les 12 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie {W} et {L} que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Schau dir die obersten 12 Karten deines Decks an und lege beliebig viele {W}- oder {L}-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Mira las 12 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía {W} o {L} que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Olhe as 12 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia {W} ou {L} que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'it-it': "Guarda le prime 12 carte del tuo mazzo e assegna un numero qualsiasi di carte Energia {W} o {L} presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo. Non puoi usare più di un Potere V ASTRO a partita.",
			'en-us': "Look at the top 12 cards of your deck and attach any number of {W} or {L} Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck. (You can't use more than 1 VSTAR Power in a game.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 664341
	}
}

export default card
