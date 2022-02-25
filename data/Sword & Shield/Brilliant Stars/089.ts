import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ticking Terror",
			fr: "Tic Tac Terreur",
			es: "Terror Inminente",
			it: "Terrore a Orologeria",
			pt: "Tique-taque Tenebroso",
			de: "Tickender Terror"
		},

		effect: {
			en: "Until the end of your next turn, the Defending Pokémon's Weakness is now Darkness. (The amount of Weakness doesn't change.)",
			fr: "Jusqu'à la fin de votre prochain tour, la Faiblesse du Pokémon Défenseur est maintenant de type Darkness. (La valeur de la Faiblesse ne change pas.)",
			es: "Hasta el final de tu próximo turno, la Debilidad del Pokémon Defensor pasa a ser Darkness. (La cantidad de Debilidad no cambia).",
			it: "Fino alla fine del tuo prossimo turno, la debolezza del Pokémon difensore diventa Darkness. Quanto è debole non cambia.",
			pt: "Até o final do seu próximo turno, a Fraqueza do Pokémon Defensor será Darkness (a quantidade de Fraqueza não muda).",
			de: "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Darkness. (Die Höhe der Schwäche ändert sich nicht.)"
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
			es: "Caída Maldita",
			it: "Caduta Maledetta",
			pt: "Queda Amaldiçoada",
			de: "Verfluchter Fall"
		},

		effect: {
			en: "Put 2 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			es: "Pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card