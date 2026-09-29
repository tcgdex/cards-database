import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	cameoDexIds: [25],

	name: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		de: "Driftlon",
		it: "Drifloon",
		pt: "Drifloon",
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [425],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pull",
			fr: "Tirer",
			es: "Tirar",
			de: "Ziehen",
			it: "Tira",
			pt: "Puxar",
		},

		effect: {
			en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			de: "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			it: "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851051,
				tcgplayer: 656255
			}
		},
	],
}

export default card
