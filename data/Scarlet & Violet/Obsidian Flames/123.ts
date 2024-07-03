import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Floréclat-ex",
		en: "Glimmora ex",
		es: "Glimmora ex",
		it: "Glimmora-ex",
		pt: "Glimmora ex",
		de: "Lumiflora-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Champ de Poussière",
			en: "Dust Field",
			es: "Campo Polvoriento",
			it: "Campo Polverulento",
			pt: "Campo Empoeirado",
			de: "Staubfeld"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas avoir plus de 3 Pokémon de Banc. S'il a 4 Pokémon de Banc ou plus, il doit défausser des Pokémon de Banc jusqu'à en avoir 3 sur le Banc. Si plus d'un effet change le nombre de Pokémon de Banc autorisés, utilisez le nombre le plus petit.",
			en: "As long as this Pokémon is in the Active Spot, your opponent can't have more than 3 Benched Pokémon. If they have 4 or more Benched Pokémon, they discard Benched Pokémon until they have 3 Pokémon on the Bench. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede tener más de 3 Pokémon en Banca. Si tiene 4 Pokémon en Banca o más, tu rival descarta Pokémon en Banca hasta tener 3 Pokémon en la Banca. Si más de un efecto cambia el número de Pokémon en Banca permitidos, se usa el número inferior.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può avere più di tre Pokémon in panchina. Se ha quattro o più Pokémon in panchina, ne scarta fino ad averne tre. Se più di un effetto modifica il numero di Pokémon in panchina permessi, adotta il numero più piccolo.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá ter mais de 3 Pokémon no Banco. Se o seu oponente tiver 4 ou mais Pokémon no Banco, ele descartará Pokémon até ter 3 Pokémon no Banco. Se mais de um efeito alterar o número permitido de Pokémon no Banco, use o menor número.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner nicht mehr als 3 Pokémon auf seiner Bank haben. Wenn er 4 oder mehr Pokémon auf seiner Bank hat, legt er so lange Pokémon von seiner Bank auf seinen Ablagestapel, bis er 3 Pokémon auf seiner Bank hat. Wenn mehr als 1 Effekt die Anzahl der auf der Bank erlaubten Pokémon verändert, verwende die kleinere Anzahl."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Gemme Empoisonnée",
			en: "Poisonous Gem",
			es: "Joya Venenosa",
			it: "Velenogemma",
			pt: "Gema Venenosa",
			de: "Giftiges Juwel"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent's Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card