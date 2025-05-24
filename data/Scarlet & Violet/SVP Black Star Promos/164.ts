import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras ex",
		fr: "Lokhlass-ex",
		es: "Lapras ex",
		it: "Lapras-ex",
		pt: "Lapras ex",
		de: "Lapras-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Power Splash",
			fr: "Éclaboussure Puissante",
			es: "Salpicadura Enérgica",
			it: "Forzasplash",
			pt: "Esguicho Poderoso",
			de: "Power-Platscher"
		},

		effect: {
			en: "This attack does 40 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}, {
		cost: ["Water", "Psychic", "Metal"],

		name: {
			en: "Larimar Rain",
			fr: "Pluie Larimar",
			es: "Lluvia Larimar",
			it: "Pioggia di Larimar",
			pt: "Chuva de Larimar",
			de: "Larimar-Regen"
		},

		effect: {
			en: "Look at the top 20 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Regardez les 20 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			es: "Mira las 20 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Guarda le prime 20 carte del tuo mazzo e assegna un numero qualsiasi di carte Energia presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			pt: "Olhe as 20 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia que encontrar lá aos seus Pokémon como desejar. Embaralhe as outras cartas de volta no seu baralho.",
			de: "Schau dir die obersten 20 Karten deines Decks an und lege beliebig viele Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "5ban Graphics"
}

export default card