import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [539],
	set: Set,

	name: {
		'en-us': "Sawk",
		'fr-fr': "Karaclée",
		'de-de': "Karadonis",
		'it-it': "Sawk",
		'pt-br': "Sawk",
		'es-es': "Sawk",
		'es-mx': "Sawk"
	},

	illustrator: "Dsuke",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Elbow Strike",
			'fr-fr': "Coup de Coude",
			'de-de': "Ellbogenstoß",
			'it-it': "Colpogomito",
			'pt-br': "Golpe de Cotovelo",
			'es-es': "Codazo",
			'es-mx': "Codazo"
		},

		damage: 30
	}, {
		cost: ["Fighting"],

		name: {
			'en-us': "Rising Chop",
			'fr-fr': "Poing Ascendant",
			'de-de': "Aufwärtshieb",
			'it-it': "Colpo Ascendente",
			'pt-br': "Golpe Ascendente",
			'es-es': "Golpe Ascendente",
			'es-mx': "Golpe Ascendente"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon isn't a Pokémon ex, this attack does nothing. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire n'est pas un Pokémon-ex, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners kein Pokémon-ex ist, hat diese Attacke keine Auswirkungen. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			'it-it': "Se il Pokémon attivo del tuo avversario non è un Pokémon-ex, questo attacco non ha effetto. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'pt-br': "Se o Pokémon Ativo do seu oponente não for um Pokémon ex, este ataque não fará nada. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'es-es': "Si el Pokémon Activo de tu rival no es un Pokémon ex, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'es-mx': "Si el Pokémon Activo de tu rival no es un Pokémon ex, este ataque no hace nada. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835991,
				tcgplayer: 642161
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835991,
				tcgplayer: 642161
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836581,
				tcgplayer: 642403
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836582,
				tcgplayer: 642331
			}
		},
	],
}

export default card
