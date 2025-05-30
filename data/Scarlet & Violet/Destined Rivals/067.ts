import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty",
		it: "Flaaffy",
		es: "Flaaffy",
		pt: "Flaaffy"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			de: "Donnerschock",
			it: "Tuonoshock",
			es: "Impactrueno",
			pt: "Trovoada de Choques"
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
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			de: "Elektroball",
			it: "Energisfera",
			es: "Bola Voltio",
			pt: "Bola Elétrica"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card