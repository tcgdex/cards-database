import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [621],
	set: Set,

	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'de-de': "Shardrago",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
		'es-es': "Druddigon",
		'es-mx': "Druddigon"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Shred",
			'fr-fr': "Déchiquetage",
			'de-de': "Zerfetzer",
			'it-it': "Tritatutto",
			'pt-br': "Triturar",
			'es-es': "Hacer Trizas",
			'es-mx': "Despedazar"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 40
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			'en-us': "Ambush",
			'fr-fr': "Embuscade",
			'de-de': "Hinterhalt",
			'it-it': "Imboscata",
			'pt-br': "Emboscada",
			'es-es': "Emboscada",
			'es-mx': "Emboscada"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836031,
				tcgplayer: 642184
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836031,
				tcgplayer: 642184
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836626,
				tcgplayer: 642425
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836627,
				tcgplayer: 642353
			}
		},
	],
}

export default card
