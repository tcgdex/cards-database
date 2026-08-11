import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [959],
	set: Set,

	name: {
		'fr-fr': "Forgelina-ex",
		'en-us': "Tinkaton ex",
		'es-es': "Tinkaton ex",
		'it-it': "Tinkaton-ex",
		'pt-br': "Tinkaton ex",
		'de-de': "Granforgita-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Forgella",
		'en-us': "Tinkatuff",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'de-de': "Tafforgita"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Marteau Massif",
			'en-us': "Big Hammer",
			'es-es': "Gran Martillo",
			'it-it': "Gran Martello",
			'pt-br': "Martelão",
			'de-de': "Großer Hammer"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte dans votre main.",
			'en-us': "This attack does 30 damage for each card in your hand.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta en tu mano.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta che hai in mano.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta na sua mão.",
			'de-de': "Diese Attacke fügt für jede Karte auf deiner Hand 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pression Pulvérisante",
			'en-us': "Pulverizing Press",
			'es-es': "Presión Pulverizadora",
			'it-it': "Pressa Polverizzante",
			'pt-br': "Aperto Pulverizador",
			'de-de': "Pulverisierende Presse"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715737,
				tcgplayer: 497681,
				cardtrader: 248916
			}
		},
	],

	suffix: "ex",
	illustrator: "Tika Matsuno",

	
}

export default card
