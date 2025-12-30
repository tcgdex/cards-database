import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [565],
	set: Set,

	name: {
		en: "Carracosta",
		fr: "Mégapagos",
		de: "Karippas",
		it: "Carracosta",
		pt: "Carracosta",
		es: "Carracosta",
		'es-mx': "Carracosta"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
		de: "Galapaflos",
		it: "Tirtouga",
		pt: "Tirtouga",
		es: "Tirtouga",
		'es-mx': "Tirtouga"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mighty Shell",
			fr: "Coquille Puissante",
			de: "Mächtiger Panzer",
			it: "Guscioforza",
			pt: "Casco Cascudo",
			es: "Caparazón Poderoso",
			'es-mx': "Caparazón Poderoso"
		},

		effect: {
			en: "Prevent all damage from and effects of attacks done to this Pokémon by your opponent's Pokémon that have any Special Energy attached.",
			fr: "Évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée.",
			de: "Verhindere allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon von Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt werden.",
			it: "Previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario che hanno Energie speciali assegnate.",
			pt: "Previna todo o dano e os efeitos de ataques causados a este Pokémon pelos Pokémon do seu oponente que tiverem alguma Energia Especial ligada a eles.",
			es: "Se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon por los Pokémon de tu rival que tengan alguna Energía Especial unida.",
			'es-mx': "Se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon por los Pokémon de tu rival que tengan alguna Energía Especial unida."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
			de: "Mächtiger Biss",
			it: "Grande Morso",
			pt: "Mordidona",
			es: "Gran Mordisco",
			'es-mx': "Gran Mordida"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835947
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835947
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836312
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836310
			}
		}
	]
}

export default card
