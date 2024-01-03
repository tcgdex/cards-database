import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Invite Out",
			fr: "Invitation à Sortir",
			es: "Invitar a Salir",
			it: "Vienifuori",
			pt: "Vem Jogar",
			de: "Ausführen"
		},

		effect: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			it: "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Jogue 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			de: "Wirf 1 Münze. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			de: "Schmetterkick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card