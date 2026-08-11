import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		'en-us': "Dragonite VSTAR",
		'fr-fr': "Dracolosse VSTAR",
		'es-es': "Dragonite V-ASTRO",
		'it-it': "Dragonite V ASTRO",
		'pt-br': "Dragonite V-ASTRO",
		'de-de': "Dragoran VSTAR"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Dragonite V",
		'fr-fr': "Dracolosse-V",
		'es-es': "Dragonite V",
		'it-it': "Dragonite-V",
		'pt-br': "Dragonite V",
		'de-de': "Dragoran-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact",
			'es-es': "Gigaimpacto",
			'it-it': "Gigaimpatto",
			'pt-br': "Gigaimpacto",
			'de-de': "Gigastoß"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 250
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Draconic Star",
			'fr-fr': "Draco Star",
			'es-es': "Astro Dracónico",
			'it-it': "Astro del Drago",
			'pt-br': "Dragão Astral",
			'de-de': "Drachenstern"
		},

		effect: {
			'en-us': "Look at the top 12 cards of your deck and attach any number of Water or Lightning Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Regardez les 12 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie Water et Lightning que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Mira las 12 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Water o Lightning que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Guarda le prime 12 carte del tuo mazzo e assegna un numero qualsiasi di carte Energia Water o Lightning presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Olhe as 12 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia Water ou Lightning que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Schau dir die obersten 12 Karten deines Decks an und lege beliebig viele Water- oder Lightning-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 665692,
				tcgplayer: 277014
			}
		},
	],
}

export default card
