import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Disorienting Flash",
			fr: "Flash Désorientant",
			es: "Destello Aturdidor",
			it: "Flash Disorientante",
			pt: "Clarão Atordoante",
			de: "Desorientierender Blitz"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused. Put 8 damage counters instead of 3 on that Pokémon for this Special Condition.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Placez 8 marqueurs de dégâts au lieu de 3 sur ce Pokémon-là pour cet État Spécial.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Pon 8 contadores de daño en vez de 3 en ese Pokémon por esta Condición Especial.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Metti otto segnalini danno invece di tre su quel Pokémon per effetto di questa condizione speciale.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Coloque 8 contadores de dano ao invés de 3 naquele Pokémon para esta Condição Especial.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege für diesen Speziellen Zustand 8 Schadensmarken anstelle von 3 Schadensmarken auf jenes Pokémon."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunderous Bolt",
			fr: "Éclair du Tonnerre",
			es: "Rayo Atronador",
			it: "Fulmine Tonante",
			pt: "Raio Estrondoso",
			de: "Donnernder Einschlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card