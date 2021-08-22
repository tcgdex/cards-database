import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct",
		fr: "Krakos",
		es: "Grapploct",
		it: "Grapploct",
		pt: "Grapploct",
		de: "Kaocto"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Clobbopus",
		fr: "Poulpaf"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Stranglehold Master",
			fr: "Emprise Magistrale",
			es: "Maestro del Estrangulamiento",
			it: "Morsa da Maestro",
			pt: "Mata-leão de Mestre",
			de: "Meister des Klammergriffs"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s Retreat Cost is ColorlessColorless more.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless.",
			es: "Mientras este Pokémon esté en el Puesto Activo, el Coste de Retirada del Pokémon Activo de tu rival es de ColorlessColorless más.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il costo di ritirata del Pokémon attivo del tuo avversario aumenta di Colorless Colorless.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, o custo de Recuo do Pokémon Ativo do seu oponente será ColorlessColorless a mais.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Rückzugskosten des Aktiven Pokémon deines Gegners um ColorlessColorless."
		}
	}],

	attacks: [{
		name: {
			en: "Synchro Buster",
			fr: "Buster Synchro",
			es: "Sincrodestrucción",
			it: "Sincrodistruzione",
			pt: "Aniquilação Sincronizada",
			de: "Synchronknacker"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea."
	}
}

export default card