import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		en: "Herdier",
		fr: "Ponchien",
		de: "Terribark",
		it: "Herdier",
		pt: "Herdier",
		es: "Herdier",
		'es-mx': "Herdier"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Roar",
			fr: "Hurlement",
			de: "Brüller",
			it: "Boato",
			pt: "Rugido",
			es: "Rugido",
			'es-mx': "Rugido"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			de: "Sprungangriff",
			it: "Affondo Lungo",
			pt: "Bote",
			es: "Arremeter",
			'es-mx': "Embestida Brusca"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836191
	}
}

export default card