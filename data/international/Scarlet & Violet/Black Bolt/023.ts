import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [565],
	set: Set,

	name: {
		'en-us': "Carracosta",
		'fr-fr': "Mégapagos",
		'de-de': "Karippas",
		'it-it': "Carracosta",
		'pt-br': "Carracosta",
		'es-es': "Carracosta",
		'es-mx': "Carracosta"
	},

	illustrator: "Gemi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'de-de': "Galapaflos",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'es-es': "Tirtouga",
		'es-mx': "Tirtouga"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mighty Shell",
			'fr-fr': "Coquille Puissante",
			'de-de': "Mächtiger Panzer",
			'it-it': "Guscioforza",
			'pt-br': "Casco Cascudo",
			'es-es': "Caparazón Poderoso",
			'es-mx': "Caparazón Poderoso"
		},

		effect: {
			'en-us': "Prevent all damage from and effects of attacks done to this Pokémon by your opponent's Pokémon that have any Special Energy attached.",
			'fr-fr': "Évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée.",
			'de-de': "Verhindere allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon von Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt werden.",
			'it-it': "Previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario che hanno Energie speciali assegnate.",
			'pt-br': "Previna todo o dano e os efeitos de ataques causados a este Pokémon pelos Pokémon do seu oponente que tiverem alguma Energia Especial ligada a eles.",
			'es-es': "Se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon por los Pokémon de tu rival que tengan alguna Energía Especial unida.",
			'es-mx': "Se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon por los Pokémon de tu rival que tengan alguna Energía Especial unida."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Big Bite",
			'fr-fr': "Grosse Morsure",
			'de-de': "Mächtiger Biss",
			'it-it': "Grande Morso",
			'pt-br': "Mordidona",
			'es-es': "Gran Mordisco",
			'es-mx': "Gran Mordida"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
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
				cardmarket: 835947,
				tcgplayer: 642475
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835947,
				tcgplayer: 642475
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836312,
				tcgplayer: 642720
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836310,
				tcgplayer: 642648
			}
		}
	]
}

export default card
