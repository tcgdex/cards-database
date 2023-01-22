import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Greedent V",
		fr: "Rongrigou V",
		es: "Greedent V",
		it: "Greedent V",
		pt: "Greedent V",
		de: "Schlaraffel V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			pt: "Pancada Corporal",
			de: "Bodyslam"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Nom-Nom-Nom Incisors",
			fr: "Triple Incisive",
			es: "Incisivos Ñam-Ñam-Ñam",
			it: "Incisivi Masticanti",
			pt: "Incisivos Nham-nham-nham",
			de: "Mjam-Mjam-Mjam-Nager"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Compre 3 cartas.",
			de: "Ziehe 3 Karten."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card