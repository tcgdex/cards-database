import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [334],
	set: Set,

	name: {
		fr: "Altaria",
		en: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		de: "Altaria"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Glissement",
			en: "Glide",
			es: "Planeo",
			it: "Aliante",
			pt: "Planeio",
			de: "Gleiten"
		},

		damage: 30
	}, {
		cost: ["Water", "Metal"],

		name: {
			fr: "Berceuse Apaisante",
			en: "Soothing Lullaby",
			es: "Nana Sedante",
			it: "Ninnananna Calmante",
			pt: "Canção de Ninar Calmante",
			de: "Beruhigendes Wiegenlied"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Pendant le Contrôle Pokémon, votre adversaire lance 2 pièces au lieu d'une. S'il obtient au moins un côté pile, ce Pokémon-là reste Endormi.",
			en: "Your opponent's Active Pokémon is now Asleep. During Pokémon Checkup, your opponent flips 2 coins instead of 1. If either of them is tails, that Pokémon is still Asleep.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido. Durante el Chequeo Pokémon, tu rival lanza 2 monedas en vez de una. Si sale cruz en alguna de ellas, ese Pokémon sigue Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato. Durante il controllo Pokémon, il tuo avversario lancia due volte una moneta invece di una. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido. Durante o Checape Pokémon, seu oponente joga 2 moedas ao invés de 1. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt. Beim Pokémon-Check wirft dein Gegner 2 Münzen anstelle von 1. Zeigt mindestens 1 Zahl, schläft jenes Pokémon weiter."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card