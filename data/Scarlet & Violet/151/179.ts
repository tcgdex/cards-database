import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "M. Mime",
		en: "Mr. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Barrière Copie",
			en: "Mimic Barrier",
			es: "Barrera Mimética",
			it: "Barriera Mimica",
			pt: "Barreira de Mímica",
			de: "Mimikry-Sperre"
		},

		effect: {
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont autant d'Énergies attachées, évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire.",
			en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, prevent all damage done to this Pokémon by attacks from your opponent's Pokémon.",
			es: "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival.",
			it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario.",
			pt: "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, previna todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente.",
			de: "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Puissance Psy",
			en: "Psypower",
			es: "Psicopoder",
			it: "Psicotere",
			pt: "Poder Psíquico",
			de: "Psy-Power"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card