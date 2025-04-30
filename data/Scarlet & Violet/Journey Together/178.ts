import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Dudunsparce ex",
		fr: "Deusolourdo-ex",
		es: "Dudunsparce ex",
		de: "Dummimisel-ex",
		it: "Dudunsparce-ex",
		pt: "Dudunsparce ex",
		'es-mx': "Dudunsparce ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tenacious Tail",
			fr: "Queue Tenace",
			es: "Cola Tenaz",
			de: "Hartnäckiger Schweif",
			it: "Coda Tenace",
			pt: "Cauda Tenaz",
			'es-mx': "Cola Tenaz"
		},

		effect: {
			en: "This attack does 60 damage for each of your opponent's Pokémon ex in play.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon-ex en jeu de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada uno de los Pokémon ex en juego de tu rival.",
			de: "Diese Attacke fügt für jedes Pokémon-ex deines Gegners im Spiel 60 Schadenspunkte zu.",
			it: "Questo attacco infligge 60 danni per ogni Pokémon-ex in gioco del tuo avversario.",
			pt: "Este ataque causa 60 pontos de dano para cada Pokémon ex do seu oponente em jogo.",
			'es-mx': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon ex en juego de tu rival."
		},

		damage: "60×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Destructive Drill",
			fr: "Perceuse Destructrice",
			es: "Taladro Destructivo",
			de: "Zerstörerischer Bohrer",
			it: "Trapano Distruttivo",
			pt: "Broca Bruta",
			'es-mx': "Taladro Destructivo"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
