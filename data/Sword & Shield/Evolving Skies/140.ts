import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage2",
	illustrator: "Tika Matsuno",

	attacks: [{
		name: {
			en: "Clutch",
			fr: "Serre",
			es: "Embrague",
			it: "Grinfie",
			pt: "Clutch",
			de: "Greifer"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Nitro Dive",
			fr: "Plongée Nitrée",
			es: "Nitropicado",
			it: "Picchiata Nitrica",
			pt: "Nitro Dive",
			de: "Nitro-Sturzflug"
		},

		effect: {
			en: "If this Pokémon has any Fire Energy attached, this attack does 80 more damage.",
			fr: "Si de l'Énergie Fire est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 80 danni in più.",
			pt: "If this Pokémon has any Fire Energy attached, this attack does 80 more damage.",
			de: "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	dexId: [663],

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	description: {
		en: "Bird Pokémon make up most of its diet. It approaches at high speeds and smacks them down to the ground with its powerful kick."
	},

	regulationMark: "E"
}

export default card
