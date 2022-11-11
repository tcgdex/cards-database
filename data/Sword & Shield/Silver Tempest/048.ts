import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
		es: "Dewpider",
		it: "Dewpider",
		pt: "Dewpider",
		de: "Araqua"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Drowning Ball",
			fr: "Bulle Noyade",
			es: "Burbuja Ahogante",
			it: "Annegabolla",
			pt: "Bola de Afogamento",
			de: "Ertränkende Blase"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía de ese Pokémon.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e scarti un'Energia assegnata a quel Pokémon.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado, e descarte 1 Energia daquele Pokémon.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und du legst 1 Energie von jenem Pokémon auf den Ablagestapel deines Gegners."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card