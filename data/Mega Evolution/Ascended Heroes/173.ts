import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Rufflet",
		fr: "Furaiglon d'Okuba",
		es: "Rufflet de Laureano",
		'es-mx': "Rufflet de Laureano",
		de: "Aokis Geronimatz",
		it: "Rufflet di Ubaldo",
		pt: "Rufflet do Lauro"
	},

	illustrator: "cochi8i",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Peck the Wound",
			fr: "Picpic Plaie",
			es: "Picotear la Herida",
			'es-mx': "Picotear la Herida",
			de: "Wundenpiekser",
			it: "Beccaferita",
			pt: "Bicar a Ferida"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675985,
		cardmarket: 869784
	}
}

export default card