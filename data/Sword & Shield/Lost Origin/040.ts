import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [456],
	set: Set,

	name: {
		en: "Finneon",
		fr: "Écayon",
		es: "Finneon",
		it: "Finneon",
		pt: "Finneon",
		de: "Finneon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Oceanic Accompaniment",
			fr: "Cortège Océanique",
			es: "Acompañamiento Oceánico",
			it: "Scorta Oceanica",
			pt: "Escolta Oceânica",
			de: "Ozeanische Begleitung"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Pokémon that has the Swim Freely attack.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l'un de vos Pokémon ayant l'attaque Nage Libre.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water de tu mano a 1 de tus Pokémon que tenga el ataque Nado Libre.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che ha l'attacco Nuotata Libera una carta Energia Water dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Water da sua mão a 1 dos seus Pokémon que tiver o ataque Nadar Sossegado.",
			de: "Beliebig oft während deines Zuges kannst du 1 Water-Energiekarte aus deiner Hand an 1 deiner Pokémon, das die Attacke Freischwimmen hat, anlegen."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674050
	}
}

export default card