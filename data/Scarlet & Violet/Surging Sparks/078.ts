import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Uxie",
		fr: "Créhelf",
		es: "Uxie",
		it: "Uxie",
		pt: "Uxie",
		de: "Selfe"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Painful Memories",
			fr: "Souvenirs Douloureux",
			es: "Recuerdos Dolorosos",
			it: "Brutti Ricordi",
			pt: "Lembranças Dolorosas",
			de: "Schmerzhafte Erinnerungen"
		},

		effect: {
			en: "Put 2 damage counters on each of your opponent's Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			es: "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival.",
			it: "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			pt: "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente.",
			de: "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card