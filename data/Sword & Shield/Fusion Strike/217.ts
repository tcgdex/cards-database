import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

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

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Yamashita",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			de: "Bodyslam",
			es: "Golpe Cuerpo",
			pt: "Pancada Corporal",
			it: "Corposcontro"
		},

		damage: 40,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Nom-Nom-Nom Incisors",
			fr: "Triple Incisive",
			de: "Mjam-Mjam-Mjam-Nager",
			es: "Incisivos Ñam-Ñam-Ñam",
			pt: "Incisivos Nham-nham-nham",
			it: "Incisivi Masticanti"
		},

		damage: 120,

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			de: "Ziehe 3 Karten.",
			es: "Roba 3 cartas.",
			pt: "Compre 3 cartas.",
			it: "Pesca tre carte."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582953,
		tcgplayer: 253316
	}
}

export default card
