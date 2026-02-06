import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [160],

	name: {
		en: "Mega Feraligatr ex",
		fr: "Méga-Aligatueur-ex",
		es: "Mega-Feraligatr ex",
		'es-mx': "Mega-Feraligatr ex",
		de: "Mega-Impergator-ex",
		it: "Mega Feraligatr-ex",
		pt: "Mega Feraligatr ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 370,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Mortal Crunch",
			fr: "Mâchouille Mortelle",
			es: "Trituración Mortífera",
			'es-mx': "Trituración Mortífera",
			de: "Letalknirscher",
			it: "Sgranocchio Letale",
			pt: "Mastigada Mortal"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 200 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 200 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 200 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 200 puntos de daño más.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 200 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 200 pontos de dano a mais."
		},

		damage: "200+"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675855,
		cardmarket: 869654
	}
}

export default card