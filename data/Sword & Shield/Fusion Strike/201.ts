import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [85],
	set: Set,

	name: {
		en: "Dodrio V",
		fr: "Dodrio V",
		es: "Dodrio V",
		it: "Dodrio V",
		pt: "Dodrio V",
		de: "Dodri V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",
	retreat: 1,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "No Reprieve",
			fr: "Sans Répit",
			de: "Schonungslos",
			es: "Sin Respiro",
			pt: "Sem Trégua",
			it: "Senza Tregua"
		},

		damage: 20,

		effect: {
			en: "During your next turn, this Pokémon's attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Durante tu próximo turno, los ataques de este Pokémon hacen 80 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o seu próximo turno, os ataques deste Pokémon causarão 80 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			it: "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 80 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rampage Drill",
			fr: "Perceuse Furieuse",
			de: "Tobender Bohrer",
			es: "Furia Taladro",
			pt: "Broca Voraz",
			it: "Trapano Infuriato"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582876,
		tcgplayer: 253295
	}
}

export default card
