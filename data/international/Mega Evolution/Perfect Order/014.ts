import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [663],

	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'es-mx': "Talonflame",
		'de-de': "Fiaro",
		'it-it': "Talonflame",
		'pt-br': "Talonflame"
	},

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'es-mx': "Fletchinder",
		'de-de': "Dartignis",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sky Hunt",
			'fr-fr': "Chasse Céleste",
			'es-es': "Cacería Aérea",
			'es-mx': "Caza Aérea",
			'de-de': "Jäger der Lüfte",
			'it-it': "Caccia Aerea",
			'pt-br': "Rapina Aérea"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Flip a coin. If heads, discard a random card from your opponent's hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'es-es': "Ala Ígnea",
			'es-mx': "Ala Ígnea",
			'de-de': "Feuerflügel",
			'it-it': "Alafiamma",
			'pt-br': "Asa de Fogo"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684405,
				cardmarket: 877426
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684405,
				cardmarket: 877426
			}
		}
	],

}

export default card
