import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cleaning Up",
			fr: "Ménage",
			es: "Purgar",
			it: "Pulitura",
			pt: "Limpar",
			de: "Putzen"
		},

		effect: {
			en: "Discard up to 2 Pokémon Tools from your opponent's Pokémon.",
			fr: "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			es: "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			it: "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			pt: "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente.",
			de: "Lege bis zu 2 Pokémon-Ausrüstungen von Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Shibuzoh.",

	thirdParty: {
		cardmarket: 760812
	}
}

export default card