import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Dracolosse VSTAR",
		de: "Dragoran VSTAR",
		es: "Dragonite V-ASTRO",
		pt: "Dragonite V-ASTRO",
		it: "Dragonite V ASTRO",
		en: "Dragonite VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		fr: "Dracolosse-V",
		de: "Dragoran-V",
		es: "Dragonite V",
		pt: "Dragonite V",
		it: "Dragonite-V",
		en: "Dragonite V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Giga Impact",
			de: "Gigastoß",
			es: "Gigaimpacto",
			pt: "Gigaimpacto",
			it: "Gigaimpatto",
			en: "Giga Impact"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 250
	}, {
		cost: ["Colorless"],

		name: {
			fr: "Draco Star",
			de: "Drachenstern",
			es: "Astro Dracónico",
			pt: "Dragão Astral",
			it: "Astro del Drago",
			en: "Draconic Star"
		},

		effect: {
			fr: "Regardez les 12 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie {W} et {L} que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			de: "Schau dir die obersten 12 Karten deines Decks an und lege beliebig viele {W}- oder {L}-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			es: "Mira las 12 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía {W} o {L} que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			pt: "Olhe as 12 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia {W} ou {L} que encontrar lá aos seus Pokémon como desejar. Embaralhe as demais cartas de volta no seu baralho (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			it: "Guarda le prime 12 carte del tuo mazzo e assegna un numero qualsiasi di carte Energia {W} o {L} presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo. Non puoi usare più di un Potere V ASTRO a partita.",
			en: "Look at the top 12 cards of your deck and attach any number of {W} or {L} Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck. (You can't use more than 1 VSTAR Power in a game.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 664341
	}
}

export default card