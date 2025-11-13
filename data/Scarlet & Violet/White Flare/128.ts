import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [525],
	set: Set,

	name: {
		en: "Boldore",
		fr: "Géolithe",
		de: "Sedimantur",
		it: "Boldore",
		pt: "Boldore",
		es: "Boldore",
		'es-mx': "Boldore"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
		de: "Kiesling",
		it: "Roggenrola",
		pt: "Roggenrola",
		es: "Roggenrola",
		'es-mx': "Roggenrola"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Smack Down",
			fr: "Anti-Air",
			de: "Katapult",
			it: "Abbattimento",
			pt: "Derrubada",
			es: "Antiaéreo",
			'es-mx': "Antiaéreo"
		},

		effect: {
			en: "If your opponent's Active Pokémon has {F} Resistance, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a une Résistance à {F}, cette attaque inflige 50 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners {F}-Resistenz hat, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario ha resistenza al tipo {F}, questo attacco infligge 50 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente tiver Resistência {F}, este ataque causará 50 pontos de dano a mais.",
			es: "Si el Pokémon Activo de tu rival tiene Resistencia a {F}, este ataque hace 50 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival tiene Resistencia a {F}, este ataque hace 50 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
			de: "Juwelenkraft",
			it: "Gemmoforza",
			pt: "Gema Poderosa",
			es: "Joya de Luz",
			'es-mx': "Joya de Luz"
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836145
	}
}

export default card