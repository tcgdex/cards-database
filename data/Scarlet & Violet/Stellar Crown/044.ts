import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		en: "Drednaw",
		fr: "Torgamord",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Impervious Shell",
			fr: "Coquille Impénétrable",
			es: "Caparazón Impenetrable",
			it: "Guscio Impenetrabile",
			pt: "Casco Impenetrável",
			de: "Undurchdringlicher Panzer"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon if that damage is 200 or more.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire si ces dégâts sont de 200 ou plus.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival si ese daño es igual o superior a 200 puntos de daño.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario se quei danni sono 200 o più.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente se aquele dano for 200 ou mais.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird, wenn jener Schaden 200 Schadenspunkte oder mehr beträgt."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hard Crunch",
			fr: "Mâchouil'Dur",
			es: "Aplaste Contundente",
			it: "Ultrasgranocchio",
			pt: "Mastigada Bruta",
			de: "Kräftiger Knirscher"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Dsuke",

	thirdParty: {
		cardmarket: 785898
	}
}

export default card
