import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [528],
	set: Set,

	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Attraction Wave",
			fr: "Onde Attirante",
			es: "Onda Atracción",
			it: "Fascinonda",
			pt: "Onda de Atração",
			de: "Anziehungswelle"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused. Put 6 damage counters instead of 3 on that Pokémon for this Special Condition.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 6 marqueurs de dégâts au lieu de 3 sur ce Pokémon-là pour cet État Spécial.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Pon 6 contadores de daño en vez de 3 en ese Pokémon por esta Condición Especial.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Metti sei segnalini danno invece di tre su quel Pokémon per effetto di questa condizione speciale.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Coloque 6 contadores de dano ao invés de 3 naquele Pokémon para esta Condição Especial.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege für diesen Speziellen Zustand 6 Schadensmarken anstelle von 3 Schadensmarken auf jenes Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card