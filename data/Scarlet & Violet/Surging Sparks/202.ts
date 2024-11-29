import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		it: "Stunfisk",
		pt: "Stunfisk",
		de: "Flunschlik"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Paralyzing Crackle",
			fr: "Crépitement Paralysant",
			es: "Chasquido Paralizante",
			it: "Crepitio Paralizzante",
			pt: "Estalo Paralisante",
			de: "Paralysierendes Knistern"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía de ese Pokémon.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e tu scarti un'Energia da quel Pokémon.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado, e descarte uma Energia daquele Pokémon.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert, und du legst 1 Energie von jenem Pokémon auf seinen Ablagestapel."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
