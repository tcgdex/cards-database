import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Corrosive Winds",
			fr: "Vents Corrosifs",
			es: "Vientos Corrosivos",
			it: "Venti Corrosivi",
			pt: "Ventos Corrosivos",
			de: "Korrosionswinde"
		},

		effect: {
			en: "Put 2 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			fr: "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
			es: "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
			it: "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario che ha dei segnalini danno.",
			pt: "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente que tem algum contador de dano nele.",
			de: "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Destructive Beam",
			fr: "Rayon Désintégrateur",
			es: "Rayo Exterminador",
			it: "Demoliraggio",
			pt: "Raio Destruidor",
			de: "Zerstörungsstrahler"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "SIE NANAHARA"
}

export default card
