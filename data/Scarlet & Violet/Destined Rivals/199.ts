import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Tarountula",
		fr: "Tissenboule",
		de: "Tarundel",
		it: "Tarountula",
		es: "Tarountula",
		pt: "Tarountula"
	},

	illustrator: "Miki Tanaka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "String Shot",
			fr: "Sécrétion",
			de: "Fadenschuss",
			it: "Millebave",
			es: "Disparo Demora",
			pt: "Estilingada"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card