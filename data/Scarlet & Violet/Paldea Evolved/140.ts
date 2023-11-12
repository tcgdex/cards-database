import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Trioxhydre",
		en: "Hydreigon",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Triple Hurlement",
			en: "Tri Howl",
			es: "Trialarido",
			it: "Triplo Grido",
			pt: "Uivo Triplo",
			de: "Dreifacher Jauler"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie que vous y trouvez à vos Pokémon, comme il vous plaît. Défaussez les autres cartes.",
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Discard the other cards.",
			es: "Una vez durante tu turno, puedes mirar las 3 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía que encuentres entre ellas a tus Pokémon de la manera que desees. Descarta el resto de las cartas.",
			it: "Una sola volta durante il tuo turno, puoi guardare le prime tre carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia presenti tra esse ai tuoi Pokémon nel modo che preferisci. Scarta le altre carte.",
			pt: "Uma vez durante o seu turno, você poderá olhar as 3 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia que encontrar lá aos seus Pokémon como desejar. Descarte as outras cartas.",
			de: "Einmal während deines Zuges kannst du dir die obersten 3 Karten deines Decks anschauen und beliebig viele Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Lege die anderen Karten auf deinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Tranch'Obscur",
			en: "Dark Cutter",
			es: "Cuchilla Oscura",
			it: "Oscurotaglio",
			pt: "Cortador de Escuridão",
			de: "Dunkler Zerschneider"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card