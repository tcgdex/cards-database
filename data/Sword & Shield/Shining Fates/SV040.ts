import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		fr: "Fulgudog",
		en: "Boltund",
		es: "Boltund",
		it: "Boltund",
		pt: "Boltund",
		de: "Bellektro"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Voltoutou",
		en: "Yamper"
	},

	attacks: [{
		name: {
			fr: "Grosse Morsure",
			en: "Big Bite",
			es: "Gran Mordisco",
			it: "Grande Morso",
			pt: "Mordidona",
			de: "Mächtiger Biss"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Crocs Combatifs",
			en: "Fighting Fangs",
			es: "Colmillos Luchadores",
			it: "Zanne Combattenti",
			pt: "Caninos de Luta",
			de: "Kämpfende Reißzähne"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V o un Pokémon-GX, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V o un Pokémon-GX, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V ou um Pokémon-GX, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V oder Pokémon-GX ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "This Pokémon generates electricity and channels it into its legs to keep them going strong. Boltund can run nonstop for three full days."
	},

	thirdParty: {
		cardmarket: 539588
	}
}

export default card
