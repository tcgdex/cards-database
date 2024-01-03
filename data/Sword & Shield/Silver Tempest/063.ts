import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		it: "Misdreavus",
		pt: "Misdreavus",
		de: "Traunfugil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
			es: "Rayo Confuso",
			it: "Stordiraggio",
			pt: "Raio da Confusão",
			de: "Konfusstrahl"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: 10
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