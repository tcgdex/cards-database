import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Mawile ex",
		fr: "Méga-Mysdibule-ex",
		de: "Mega-Flunkifer-ex",
		it: "Mega Mawile-ex",
		es: "Mega-Mawile ex",
		pt: "Mega Mawile ex",
		'es-mx': "Mega-Mawile ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Gobble Down",
			fr: "Gobage",
			de: "Vertilgen",
			it: "Abbuffata",
			es: "Ingesta Voraz",
			pt: "Engolidona",
			'es-mx': "Ingesta Voraz"
		},

		effect: {
			en: "This attack does 80 damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 80 dégâts pour chaque carte Récompense que vous avez récupérée.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 80 Schadenspunkte zu.",
			it: "Questo attacco infligge 80 danni per ogni carta Premio che hai preso.",
			es: "Este ataque hace 80 puntos de daño por cada carta de Premio que hayas cogido.",
			pt: "Este ataque causa 80 pontos de dano para cada carta de Prêmio que você pegou.",
			'es-mx': "Este ataque hace 80 puntos de daño por cada carta de Premio que hayas tomado."
		},

		damage: "80×"
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Huge Bite",
			fr: "Morsure Immense",
			de: "Gewaltiger Biss",
			it: "Macromorso",
			es: "Mordisco Gigante",
			pt: "Dentadona",
			'es-mx': "Enorme Mordida"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack's base damage is 30.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, les dégâts de base de cette attaque sont de 30.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, beträgt der Grundschaden dieser Attacke 30 Schadenspunkte.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, i danni base di questo attacco sono 30.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, el daño básico de este ataque es de 30 puntos de daño.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, o dano base deste ataque será 30.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, el daño base de este ataque es de 30 puntos de daño."
		},

		damage: 260
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654433
	}
}

export default card