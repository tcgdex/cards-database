import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [959],
	set: Set,

	name: {
		'en-us': "Tinkaton ex",
		'fr-fr': "Forgelina-ex",
		'es-es': "Tinkaton ex",
		'it-it': "Tinkaton-ex",
		'pt-br': "Tinkaton ex",
		'de-de': "Granforgita-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'de-de': "Tafforgita"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Big Hammer",
			'fr-fr': "Marteau Massif",
			'es-es': "Gran Martillo",
			'it-it': "Gran Martello",
			'pt-br': "Martelão",
			'de-de': "Großer Hammer"
		},

		effect: {
			'en-us': "This attack does 30 damage for each card in your hand.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte dans votre main.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta en tu mano.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta che hai in mano.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta na sua mão.",
			'de-de': "Diese Attacke fügt für jede Karte auf deiner Hand 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Pulverizing Press",
			'fr-fr': "Pression Pulvérisante",
			'es-es': "Presión Pulverizadora",
			'it-it': "Pressa Polverizzante",
			'pt-br': "Aperto Pulverizador",
			'de-de': "Pulverisierende Presse"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "takuyoa",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 709540,
				tcgplayer: 505537
			},
		}
	],
}

export default card
