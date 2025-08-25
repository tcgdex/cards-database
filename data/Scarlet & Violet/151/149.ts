import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		fr: "Dracolosse",
		en: "Dragonite",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Propulsion de Croisière",
			en: "Jet Cruise",
			es: "Travesía Propulsión",
			it: "Crociera Jet",
			pt: "Navegação a Jato",
			de: "Jet-Cruisen"
		},

		effect: {
			fr: "Vos Pokémon en jeu n'ont pas de Coût de Retraite.",
			en: "Your Pokémon in play have no Retreat Cost.",
			es: "Tus Pokémon en juego no tienen ningún Coste de Retirada.",
			it: "I tuoi Pokémon in gioco non hanno costo di ritirata.",
			pt: "Seus Pokémon em jogo não têm custo de Recuo.",
			de: "Deine Pokémon im Spiel haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			fr: "Draco-Choc",
			en: "Dragon Pulse",
			es: "Pulso Dragón",
			it: "Dragopulsar",
			pt: "Pulso do Dragão",
			de: "Drachenpuls"
		},

		effect: {
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
			en: "Discard the top 2 cards of your deck.",
			es: "Descarta las 2 primeras cartas de tu baraja.",
			it: "Scarta le prime due carte del tuo mazzo.",
			pt: "Descarte as 2 cartas de cima do seu baralho.",
			de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Sanosuke Sakuma",

	thirdParty: {
		cardmarket: 733744
	}
}

export default card
