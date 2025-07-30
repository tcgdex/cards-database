import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [111],
	set: Set,

	name: {
		fr: "Rhinocorne",
		en: "Rhyhorn",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Recul",
			en: "Push Down",
			es: "Oprimir",
			it: "Spintonare",
			pt: "Rebaixar",
			de: "Runterdrücken"
		},

		effect: {
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Rocher Écrasant",
			en: "Boulder Crush",
			es: "Alud de Rocas",
			it: "Macignata",
			pt: "Rocha Esmagadora",
			de: "Felsenquetscher"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "GOSSAN",

	thirdParty: {
		cardmarket: 733706
	}
}

export default card