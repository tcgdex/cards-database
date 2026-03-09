import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon",
		it: "Drifloon",
		es: "Drifloon",
		pt: "Drifloon"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "None",
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
			de: "Ziehen",
			it: "Trascinamento",
			es: "Jalar",
			pt: "Puxar"
		},

		effect: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			de: "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon auf der Bank deines Gegners gegen dessen Aktives Pokémon aus.",
			it: "Lancia una moneta. Se esce testa, scambia 1 dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			pt: "Jogue 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 656255,
		cardmarket: 851051
	},
	variants: [
		{
			type: "holo",
		}
	]
}

export default card