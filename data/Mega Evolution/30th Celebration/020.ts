import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Palkia",
		fr: "Palkia",
		de: "Palkia",
		es: "Palkia",
		it: "Palkia",
		'es-mx': "Palkia"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Wormhole",
			fr: "Trou de Ver",
			de: "Wurmloch",
			es: "Agujero de Gusano",
			it: "Tunnel Gravitazionale",
			'es-mx': "Agujero Espaciotemporal"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. <em>(Your opponent chooses the new Active Pokémon.)</em>",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de votre adversaire sur le Banc. <em>(Votre adversaire choisit le nouveau Pokémon Actif.)</em>",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. <em>(Dein Gegner wählt das neue Aktive Pokémon.)</em>",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. <em>(Tu rival elige el nuevo Pokémon Activo)</em>.",
			it: "Scambia questo Pokémon con uno nella tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. <em>Il tuo avversario sceglie il nuovo Pokémon attivo</em>.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. <em>(Tu rival elige el nuevo Pokémon Activo).</em>"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card