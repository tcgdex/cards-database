import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [456],
	set: Set,

	name: {
		fr: "Écayon",
		de: "Finneon",
		es: "Finneon",
		pt: "Finneon",
		it: "Finneon",
		en: "Finneon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cortège Océanique",
			de: "Ozeanische Begleitung",
			es: "Acompañamiento Oceánico",
			pt: "Escolta Oceânica",
			it: "Scorta Oceanica",
			en: "Oceanic Accompaniment"
		},

		effect: {
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {W} de votre main à l'un de vos Pokémon ayant l'attaque Nage Libre.",
			de: "Beliebig oft während deines Zuges kannst du 1 {W}-Energiekarte aus deiner Hand an 1 deiner Pokémon, das die Attacke Freischwimmen hat, anlegen.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {W} de tu mano a 1 de tus Pokémon que tenga el ataque Nado Libre.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia {W} da sua mão a 1 dos seus Pokémon que tiver o ataque Nadar Sossegado.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che ha l'attacco Nuotata Libera una carta Energia {W} dalla tua mano tutte le volte che vuoi.",
			en: "As often as you like during your turn, you may attach a {W} Energy card from your hand to 1 of your Pokémon that has the Swim Freely attack."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pistolet à O",
			de: "Aquaknarre",
			es: "Pistola Agua",
			pt: "Revólver d'Água",
			it: "Pistolacqua",
			en: "Water Gun"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	description: {
		en: "It lures in prey with its shining tail fins. It stays near the surface during the day and moves to the depths when night falls."
	},

	thirdParty: {
		cardmarket: 665983
	}
}

export default card