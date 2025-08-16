import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		en: "Dragonite VSTAR",
		fr: "Dracolosse VSTAR",
		es: "Dragonite V-ASTRO",
		it: "Dragonite V ASTRO",
		pt: "Dragonite V-ASTRO",
		de: "Dragoran VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		en: "Dragonite V",
		fr: "Dracolosse-V",
		es: "Dragonite V",
		it: "Dragonite-V",
		pt: "Dragonite V",
		de: "Dragoran-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 250
	}, {
		cost: ["Colorless"],

		name: {
			en: "Draconic Star",
			fr: "Draco Star",
			es: "Astro Dracónico",
			it: "Astro del Drago",
			pt: "Dragão Astral",
			de: "Drachenstern"
		},

		effect: {
			en: "Look at the top 12 cards of your deck and attach any number of Water or Lightning Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Regardez les 12 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie Water et Lightning que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Mira las 12 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Water o Lightning que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Guarda le prime 12 carte del tuo mazzo e assegna un numero qualsiasi di carte Energia Water o Lightning presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Olhe as 12 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia Water ou Lightning que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Schau dir die obersten 12 Karten deines Decks an und lege beliebig viele Water- oder Lightning-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664594,
		tcgplayer: 277014
	}
}

export default card