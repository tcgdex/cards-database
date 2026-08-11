import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [982],
	set: Set,

	name: {
		'en-us': "Dudunsparce ex",
		'fr-fr': "Deusolourdo-ex",
		'es-es': "Dudunsparce ex",
		'de-de': "Dummimisel-ex",
		'it-it': "Dudunsparce-ex",
		'pt-br': "Dudunsparce ex",
		'es-mx': "Dudunsparce ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'de-de': "Dummisel",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'es-mx': "Dunsparce"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tenacious Tail",
			'fr-fr': "Queue Tenace",
			'es-es': "Cola Tenaz",
			'de-de': "Hartnäckiger Schweif",
			'it-it': "Coda Tenace",
			'pt-br': "Cauda Tenaz",
			'es-mx': "Cola Tenaz"
		},

		effect: {
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon ex in play.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon-ex en jeu de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon ex en juego de tu rival.",
			'de-de': "Diese Attacke fügt für jedes Pokémon-ex deines Gegners im Spiel 60 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon-ex in gioco del tuo avversario.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon ex do seu oponente em jogo.",
			'es-mx': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon ex en juego de tu rival."
		},

		damage: "60×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Destructive Drill",
			'fr-fr': "Perceuse Destructrice",
			'es-es': "Taladro Destructivo",
			'de-de': "Zerstörerischer Bohrer",
			'it-it': "Trapano Distruttivo",
			'pt-br': "Broca Bruta",
			'es-mx': "Taladro Destructivo"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	suffix: "ex",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 817331
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817331,
				tcgplayer: 623605
			}
		},
	],
}

export default card
