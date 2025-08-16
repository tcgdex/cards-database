import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		fr: "Balbuto",
		en: "Baltoy",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Tour Rapide",
			en: "Rapid Spin",
			es: "Giro Rápido",
			it: "Rapigiro",
			pt: "Giro Rápido",
			de: "Turbodreher"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Scav",

	thirdParty: {
		cardmarket: 725174
	}
}

export default card